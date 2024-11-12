'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { Slider } from '@nextui-org/react'

import { fetchMaterials } from '@/lib/data'
import { Material } from '@/lib/definitions'
import { useAuthStore } from '@/providers/auth-store-provider'
import MaterialList from '@/components/MaterialsList'
import { InvoicesTableSkeleton } from '@/components/ui/skeletons'
import PaginationComponent from '@/components/layout/pagination'

const Materials = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const [page, setPage] = useState(1)
  const [value, setValue] = useState([0, 300])
  const [debouncedValue] = useDebounce(value, 500)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [materials, setMaterials] = useState<Material[]>([])
  const [numberOfItems, setNumberOfItems] = useState(0)
  const user = useAuthStore(state => state.user)

  const loadMaterials = async () => {
    if (category) {
      const { materialsData, totalPages } = await fetchMaterials(
        page,
        debouncedValue[0],
        debouncedValue[1],
        category
      )

      setNumberOfPages(totalPages)
      setMaterials(materialsData)
      setNumberOfItems(materialsData.length)
    } else {
      const { materialsData, totalPages } = await fetchMaterials(
        page,
        debouncedValue[0],
        debouncedValue[1]
      )

      console.log('aici2')
      setNumberOfPages(totalPages)
      setMaterials(materialsData)
      setNumberOfItems(materialsData.length)
    }
  }

  useEffect(() => {
    loadMaterials()
  }, [debouncedValue, page])

  return (
    <div className="flex p-3 justify-between h-screen flex-row w-full">
      <div className="w-full  h-full pr-3">
        <h1>{category}</h1>
        <div className={'flex justify-center mb-5'}>
          <Slider
            className="max-w-md"
            formatOptions={{ style: 'currency', currency: 'LEI' }}
            label="Interval pret"
            maxValue={300}
            minValue={0}
            step={10}
            value={value}
            onChange={(value: number | number[]) =>
              setValue(Array.isArray(value) ? value : [value])
            }
          />
        </div>
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <MaterialList loadMaterials={loadMaterials} materials={materials} />
        </Suspense>
        <div className={'flex justify-center  '}>
          <PaginationComponent
            numberOfPages={numberOfPages}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Materials
