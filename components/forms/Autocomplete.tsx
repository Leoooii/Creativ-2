import React from 'react'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'

import { Category } from '@/lib/definitions'

interface AutocompleteProps {
  categories: Category[]
  setCategory: (category: string) => Promise<void>
  defaultValue: string
}

const AutocompleteComponent: React.FC<AutocompleteProps> = ({
  categories,
  setCategory,
  defaultValue,
}) => {
  const [value, setValue] = React.useState('')

  const onInputChange = (category: string) => {
    setCategory(category)
  }

  return (
    <div className="flex w-full flex-col">
      <h1>{defaultValue}</h1>
      <Autocomplete
        allowsCustomValue={false}
        className="max-w-xs"
        defaultItems={categories}
        label={
          defaultValue ? defaultValue.toUpperCase() : 'Alegeti o categorie'
        }
        variant="bordered"
        onInputChange={onInputChange}
      >
        {(category) => (
          <AutocompleteItem key={category.id}>{category.name}</AutocompleteItem>
        )}
      </Autocomplete>

      {/* <p className="text-small text-default-500">Current input text: {value}</p> */}
    </div>
  )
}

export default AutocompleteComponent
