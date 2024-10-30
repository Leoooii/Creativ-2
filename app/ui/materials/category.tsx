'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from '@firebase/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { Category, Material } from '@app/lib/definitions'
import { useDebounce } from 'use-debounce'
import { fetchCategories, fetchMaterials } from '@app/lib/data'
import { auth, signIn, signOut } from '@app/lib/firebase'
import AcmeLogo from '@app/ui/creativ-logo'
import { Button, Slider } from '@nextui-org/react'
import { InvoicesTableSkeleton } from '@app/ui/skeletons'
import MaterialList from '@app/components/MaterialsList'
import PaginationComponent from '@app/ui/materials/pagination'
import AutocompleteComponent from '@app/ui/materials/Autocomplete'
import ModalComponent from '@app/components/Modal'

const CategoryPage = ({ filteredCategory }: { filteredCategory: string }) => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const [materials, setMaterials] = useState<Material[]>([]) // Starea pentru lista de materiale
  const [value, setValue] = useState([0, 300])
  const [debouncedValue] = useDebounce(value, 500)
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const searchParams = useSearchParams()
  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState(filteredCategory)

  const loadMaterials = async () => {
    const { materialsData, totalPages } = await fetchMaterials(
      page,
      debouncedValue[0],
      debouncedValue[1],
      filteredCategory
    )

    setNumberOfPages(totalPages)
    setMaterials(materialsData)
    setNumberOfItems(materialsData.length)
  }

  const handleLogin = async () => {
    try {
      const response = await signIn() // Aici apelezi funcția de login

      if (response) {
        setIsAuthorized(true)
        setUser(response)
      }
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthorized(true)
        setUser(user)
        loadMaterials() // Aici poți încărca materialele după autentificare, dacă este necesar
      } else {
        setIsAuthorized(false)
        setUser(null)
      }
    })

    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories() // Fetch categories din backend

        setCategories(fetchedCategories) // Setează categoriile
      } catch (error) {
        console.error('Failed to fetch categories', error)
      }
    }

    loadCategories()

    return () => unsubscribe() // Cleanup
  }, [debouncedValue, page]) // Execută o singură dată la montare

  const handleCategory = async (category: string): Promise<void> => {
    setCategory(category)
    router.push(`/admin/${category}`)
  }

  if (!isAuthorized)
    return (
      <div
        className={
          'w-full h-screen bg-blue-950 flex flex-col justify-center items-center gap-2'
        }
      >
        <AcmeLogo />
        <Button color={'primary'} size={'lg'} onClick={handleLogin}>
          Login
        </Button>
      </div>
    )

  return (
    <div>
      <div className="flex p-3 justify-between h-screen">
        <div className="w-4/5 overflow-y-auto h-full pr-3">
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <MaterialList
              isEditable={true}
              loadMaterials={loadMaterials}
              materials={materials}
            />
          </Suspense>
          {numberOfItems === 0 && (
            <h1>Nu exista produse in acel interval de pret</h1>
          )}
        </div>
        <div className="w-1/5 flex flex-col gap-2 right-0 border-l-4 p-3 sticky top-0 h-full">
          <h1 className={'text-center'}>
            Welcome Admin <br />
            {user?.displayName}
          </h1>

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
          <AutocompleteComponent
            categories={categories}
            defaultValue={filteredCategory}
            setCategory={handleCategory}
          />

          <ModalComponent onSubmit={loadMaterials} />
          <Button color={'danger'} onClick={signOut}>
            Delogare
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
