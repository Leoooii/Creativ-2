'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'

import FilterSidebar from '@/components/FilterSidebar'
import { InvoicesTableSkeleton } from '@/components/ui/skeletons'
import MaterialList from '@/components/MaterialsList'
import { fetchCategories, fetchMaterials } from '@/lib/data'
import { Category, Material } from '@/lib/definitions'
import Header from '@/components/layout/Header'

const AdminPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categori = searchParams.get('category')
  const [materials, setMaterials] = useState<Material[]>([])
  const [value, setValue] = useState([0, 300])
  const [debouncedValue] = useDebounce(value, 500)
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)

  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState('Constructii')

  const loadMaterials = async () => {
    const { materialsData, totalPages } = await fetchMaterials(
      page,
      debouncedValue[0],
      debouncedValue[1]
    )

    setNumberOfPages(totalPages)
    setMaterials(materialsData)
    setNumberOfItems(materialsData.length)
  }

  useEffect(() => {
    loadMaterials()
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories()

        setCategories(fetchedCategories)
      } catch (error) {
        console.error('Failed to fetch categories', error)
      }
    }

    loadCategories()
  }, [debouncedValue, page])

  const handleCategory = async (category: string) => {
    setCategory(category)
    router.push(`/admin/${category}`)
  }

  return (
    <div>
      <Header section="admin" />
      <div className="flex p-3 justify-between h-screen">
        <div className="w-4/5 overflow-y-auto h-full ">
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <MaterialList loadMaterials={loadMaterials} materials={materials} />
          </Suspense>
          {numberOfItems === 0 && (
            <h1>Nu există produse în acel interval de preț</h1>
          )}
        </div>
        <FilterSidebar
          categories={categories}
          numberOfPages={numberOfPages}
          page={page}
          reload={loadMaterials}
          setCategory={handleCategory}
          setPage={setPage}
          setValue={setValue}
          value={value}
        />
      </div>
    </div>
  )
}

export default AdminPage
