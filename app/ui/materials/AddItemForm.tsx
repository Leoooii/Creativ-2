'use client'

import { addMaterial, fetchCategories } from '@app/lib/data'
import React, { useEffect, useState } from 'react'
import { Button, Image, Input, Switch } from '@nextui-org/react'

import AutocompleteComponent from './Autocomplete'

import { Category } from '@/app/lib/definitions'

interface AddItemProps {
  onSubmit: () => Promise<void>
}

const defaultImg =
  'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/upload-bold-arrow-icon.png'

const AddItemForm: React.FC<AddItemProps> = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('1')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [available, setAvailable] = useState(true)

  const [category, setCategory] = useState('Constructii')
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories() // Fetch categories din backend

        setCategories(fetchedCategories) // Setează categoriile
      } catch (error) {
        console.error('Failed to fetch categories', error)
      }
    }

    loadCategories()
  }, [])

  const handleSubmit = async () => {
    const { message } = await addMaterial(
      name,
      price,
      imageURL,
      description,
      available,
      category
    )

    alert(message)
  }

  const handleCategory = async (category: string): Promise<void> => {
    setCategory(category)
  }

  return (
    <form
      className="flex flex-col p-5 bg-white gap-2 justify-center"
      onSubmit={handleSubmit}
    >
      <Input
        required
        label="Nume produs"
        placeholder="Introduceti numele produsului"
        size="md"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        required
        label="Pret"
        placeholder="Introduceti pretul"
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <Input
        required
        label="URL imagine"
        placeholder="URL imagine"
        value={imageURL}
        onChange={e => setImageURL(e.target.value)}
      />

      <div className="flex justify-center">
        <Image
          alt="preview"
          height={100}
          src={imageURL || defaultImg}
          width={100}
        />
      </div>

      <Input
        required
        label="Descrierea produsului"
        placeholder="Introduceti descrierea produsului"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <AutocompleteComponent
        categories={categories}
        setCategory={handleCategory}
      />
      {category}

      <Switch isSelected={available} onValueChange={setAvailable}>
        In stoc
      </Switch>

      <Button color="primary" type="submit">
        Adauga
      </Button>
    </form>
  )
}

export default AddItemForm
