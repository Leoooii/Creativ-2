'use client'

import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Link } from '@nextui-org/link'
import { useRouter } from 'next/navigation'

import { fetchMaterialByFilter } from '@/lib/data'

export default function SearchBar() {
  const [searchItems, setSearchItems] = useState([
    {
      name: 'Leo',
      id: '',
    },
  ])
  const router = useRouter()

  const fetchMaterial = async (value) => {
    const result = await fetchMaterialByFilter(value)

    setSearchItems(result)
    console.log(result, '2')
    // if (result != null) console.log(result, 'vopsa')
  }

  useEffect(() => {
    fetchMaterial('')
  }, [])

  const onInputChange = (value: string) => {
    fetchMaterial(value)
  }

  const onSelectionChange = (id) => {
    router.push(`/catalog/${id}`)
  }

  return (
    <Autocomplete
      allowsCustomValue
      className="max-w-xs w-40"
      color={'default'}
      defaultItems={searchItems}
      label="Cauta produs"
      variant="faded"
      onInputChange={onInputChange}
      onSelectionChange={onSelectionChange}
    >
      {(item) => (
        <AutocompleteItem key={item.id}>
          <Link href={`/catalog/${item.id}`}>{item.name}</Link>
        </AutocompleteItem>
      )}
    </Autocomplete>
  )
}
