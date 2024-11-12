'use client'

import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { Link } from '@nextui-org/link'

import { deleteMaterial, updateMaterial } from '@/lib/data'
import { Material } from '@/lib/definitions'
import { useAuthStore } from '@/providers/auth-store-provider'

interface MaterialProps {
  material: Material
  onDelete: () => Promise<void>
}

const MaterialCard: React.FC<MaterialProps> = ({ material, onDelete }) => {
  // Inițializează starea cu valorile din material
  const [name, setName] = useState(material.name)
  const [price, setPrice] = useState(material.price)
  const [description, setDescription] = useState(material.description)
  const [category, setCategory] = useState(material.category)
  const [available, setAvailable] = useState(material.available)
  const router = useRouter()
  const isAdmin = useAuthStore(state => state.isAdmin)

  // Funcția pentru a gestiona schimbarea numelui
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  // Funcția pentru a gestiona schimbarea prețului
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value)) // Convertește în număr
  }

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value) // Convertește în număr
  }
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value) // Convertește în număr
  }

  const handleEdit = async () => {
    const { message } = await updateMaterial(
      material.id,
      name,
      price,
      material.image_url,
      description,
      category,
      available
    )

    alert(message)
  }
  const handleDelete = async () => {
    const { message } = await deleteMaterial(material.id)

    alert(message)
    await onDelete()
  }

  return (
    <Card
      className={`border border-white rounded-md  ${!material.available && 'bg-red-500'} `}
      shadow="lg"
      style={{ boxShadow: '0px 4px 10px rgba(0, 00, 100, 50)' }}
    >
      <CardBody className="overflow-visible p-0 flex justify-center ">
        <Link href={`/catalog/${material.id}`}>
          <div className="flex justify-center w-full mt-2">
            <Image
              alt={material.name}
              className="w-full object-fit hover:shadow-2xl"
              radius="lg"
              shadow="md"
              src={material.image_url}
              width={200}
            />
          </div>
        </Link>
      </CardBody>

      <Divider />
      <CardFooter className="text-small justify-between flex-col gap-2">
        <Input
          isRequired={true}
          label="Nume"
          readOnly={!isAdmin}
          type="text"
          value={name}
          onChange={handleNameChange}
        />

        <Input
          label="Pret (RON) cu TVA"
          readOnly={!isAdmin}
          type="number"
          value={String(price)}
          onChange={handlePriceChange}
        />
      </CardFooter>
      {isAdmin && (
        <CardFooter className="text-small justify-between">
          <Button
            className="text-white px-3 py-1 rounded-lg  hover:border hover:border-cyan-400"
            color="warning"
            size="sm"
            onClick={handleEdit}
          >
            Editeaza
          </Button>
          {/*<Switch isSelected={available} onValueChange={setAvailable} />*/}
          <Button
            className=" px-3 py-1 rounded-lg hover:text-white hover:border hover:border-cyan-400"
            color="danger"
            size="sm"
            onClick={handleDelete}
          >
            Sterge
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default MaterialCard
