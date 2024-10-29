'use client'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { auth, signIn, signOut } from '@app/lib/firebase'
import { onAuthStateChanged, User } from '@firebase/auth'
import { Material } from '@app/lib/definitions'
import { useDebounce } from 'use-debounce'
import { fetchMaterials } from '@app/lib/data'
import PaginationComponent from '@app/ui/materials/pagination'
import { InvoicesTableSkeleton } from '@app/ui/skeletons'
import MaterialList from '@app/components/MaterialsList'
import { Button, Slider } from '@nextui-org/react'
import ModalComponent from '@app/components/Modal'
import AcmeLogo from '@app/ui/creativ-logo'

const AdminPage = () => {
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

    return () => unsubscribe() // Cleanup
  }, [debouncedValue, page]) // Execută o singură dată la montare

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

          <ModalComponent onSubmit={loadMaterials} />
          <Button color={'danger'} onClick={signOut}>
            Delogare
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage