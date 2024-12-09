'use client'

import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Link } from '@nextui-org/link'
import { useRouter } from 'next/navigation'

import { fetchMaterialByFilter } from '@/lib/data'
import { Material } from '@/lib/definitions'

export default function SearchBar() {
  const [searchItems, setSearchItems] = useState<Material[] | undefined>()

  const router = useRouter()

  const fetchMaterial = async (value: string) => {
    const result = await fetchMaterialByFilter(value)

    if (result !== null) {
      const flatResult = result.flat() // sau orice logică de transformare dorită

      setSearchItems(flatResult)
    } else {
      setSearchItems(undefined) // Sau setăm un array gol, dacă preferi
    }
  }

  useEffect(() => {
    fetchMaterial('')
  }, [])

  const onInputChange = (value: string) => {
    fetchMaterial(value)
  }

  // const onSelectionChange = (id: number) => {
  //   router.push(`/catalog/${id}`)
  // }

  return (
    <Autocomplete
      allowsCustomValue
      className="max-w-xs w-40"
      color={'default'}
      defaultItems={searchItems}
      label="Cauta produs"
      variant="faded"
      onInputChange={onInputChange}
      // onSelectionChange={onSelectionChange}
    >
      {(item) => (
        <AutocompleteItem key={item.id}>
          <Link href={`/catalog/${item.id}`}>{item.name}</Link>
        </AutocompleteItem>
      )}
    </Autocomplete>
  )
}
