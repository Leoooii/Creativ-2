'use client'

import { Suspense, useEffect, useState } from 'react'
import { Slider } from '@nextui-org/react'
import { useDebounce } from 'use-debounce'
import PaginationComponent from '@ui/materials/pagination'
import { useSearchParams } from 'next/navigation'
import { InvoicesTableSkeleton } from '@ui/skeletons'

import { Material } from '@/lib/definitions'
import MaterialList from '@/components/MaterialsList'
import { fetchMaterials } from '@/lib/data'

export default function Page() {
  const [materials, setMaterials] = useState<Material[]>([]) // Starea pentru lista de materiale
  const [value, setValue] = useState([0, 300])
  const [debouncedValue] = useDebounce(value, 500)
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const searchParams = useSearchParams()

  const search = searchParams.get('page')

  console.log(search)

  const loadMaterials = async () => {
    const { materialsData, totalPages } = await fetchMaterials(
      page,
      debouncedValue[0],
      debouncedValue[1]
    )

    // let pages = await fetchMaterialsPages();
    setNumberOfPages(totalPages)

    setMaterials(materialsData)
    setNumberOfItems(materialsData.length)
  }

  useEffect(() => {
    loadMaterials()
  }, [debouncedValue, page])

  return (
    <div className="flex p-3 justify-between h-screen">
      <div className="w-4/5 overflow-y-auto h-full pr-3">
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <MaterialList
            isEditable={false}
            loadMaterials={loadMaterials}
            materials={materials}
          />
        </Suspense>
        {numberOfItems === 0 && (
          <h1>Nu exista produse in acel interval de pret</h1>
        )}
      </div>
      <div className="w-1/5 flex flex-col gap-2 right-0 border-l-4 p-3 sticky top-0 h-full">
        <div className="w-full flex justify-center">
          <PaginationComponent
            numberOfPages={numberOfPages}
            page={page}
            setPage={setPage}
          />
        </div>
        <h1>Selecteaza filtre:</h1>
        <>
          <Slider
            className="max-w-md"
            color={'primary'}
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
        </>
      </div>
    </div>
  )
}
