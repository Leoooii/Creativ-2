'use client'

import { Autocomplete, AutocompleteItem } from '@nextui-org/react'

export default function SearchBar() {
  return (
    <Autocomplete
      allowsCustomValue
      className="max-w-xs"
      color={'default'}
      defaultItems={[
        {
          label: 'Cat',
          value: 'cat',
          description: 'The second most popular pet in the world'
        }
      ]}
      label="Cautati un material"
      variant="faded"
    >
      {item => (
        <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
      )}
    </Autocomplete>
  )
}
