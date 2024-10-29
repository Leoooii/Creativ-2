import React from 'react'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'

import { Category } from '@/app/lib/definitions'

interface AutocompleteProps {
  categories: Category[]
  setCategory: (category: string) => Promise<void>
}

const AutocompleteComponent: React.FC<AutocompleteProps> = ({
  categories,
  setCategory
}) => {
  const [value, setValue] = React.useState('')

  const onInputChange = (category: string) => {
    setCategory(category)
  }

  return (
    <div className="flex w-full flex-col">
      <Autocomplete
        allowsCustomValue={false}
        className="max-w-xs"
        defaultItems={categories}
        label="Search an animal"
        variant="bordered"
        onInputChange={onInputChange}
      >
        {category => (
          <AutocompleteItem key={category.id}>{category.name}</AutocompleteItem>
        )}
      </Autocomplete>

      {/* <p className="text-small text-default-500">Current input text: {value}</p> */}
    </div>
  )
}

export default AutocompleteComponent
