'use client'

import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Button, Card, CardBody, Input } from '@nextui-org/react'

import { addCategorie, fetchCategories, fetchMaterials } from '@/lib/data'
import { Category, Material } from '@/lib/definitions'

const Page = () => {
  const [materials, setMaterials] = useState<Material[]>([])
  const [page, setPage] = useState(1)
  const [value, setValue] = useState([0, 300])
  const [debouncedValue] = useDebounce(value, 500)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategory, setNewCategory] = useState('')

  const loadMaterials = async (): Promise<void> => {
    const { materialsData, totalPages } = await fetchMaterials(
      page,
      debouncedValue[0],
      debouncedValue[1]
    )

    setNumberOfPages(totalPages)
    setMaterials(materialsData)
    setNumberOfItems(materialsData.length)
  }

  const handleAddCategory = async () => {
    const { message } = await addCategorie(newCategory)

    alert(message)
  }
  const loadCategories = async () => {
    try {
      const fetchedCategories = await fetchCategories() // Fetch categories din backend

      setCategories(fetchedCategories) // Setează categoriile
    } catch (error) {
      console.error('Failed to fetch categories', error)
    }
  }

  useEffect(() => {
    loadMaterials()
    loadCategories()
  }, [])

  return (
    <div>
      <Card className={'w-1/3 justify-center text-center'}>
        <h1>Categorii:</h1>
        <CardBody className={'flex gap-2 text-center'}>
          {categories.length > 0 &&
            categories.map(category => {
              return <div key={category.id}>{category.name}</div>
            })}
          <form onSubmit={handleAddCategory}>
            <Input
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
            />
            <Button type={'submit'}>Adauga categorie</Button>
          </form>
        </CardBody>
      </Card>
      {/*<Header section={'admin'} />*/}
      {/*<div className={'bg-red-600 w-full h-20'}>*/}

      {/*</div>*/}
      {/*<div className="flex p-3 justify-between ">*/}
      {/*  <div className="w-4/5 overflow-y-auto h-full ">*/}
      {/*    <Suspense fallback={<InvoicesTableSkeleton />}>*/}
      {/*      <MaterialList loadMaterials={loadMaterials} materials={materials} />*/}
      {/*    </Suspense>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Page
