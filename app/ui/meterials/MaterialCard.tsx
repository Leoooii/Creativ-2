"use client";

import React from "react";
import { Material } from "@app/lib/definitions";
import { useState } from "react";
import { updateMaterial, deleteMaterial } from "@app/lib/data";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
  Input,
  Textarea,
  Switch
} from "@nextui-org/react";

interface MaterialProps {
  material: Material;
  onDelete: () => Promise<void>;
}

const MaterialCard: React.FC<MaterialProps> = ({ material, onDelete }) => {
  // Inițializează starea cu valorile din material
  const [name, setName] = useState(material.name);
  const [price, setPrice] = useState(material.price);
  const [description, setDescription] = useState(material.description);
  const [category, setCategory] = useState(material.category);
  const [available, setAvailable] = useState(material.available);

  // Funcția pentru a gestiona schimbarea numelui
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Funcția pentru a gestiona schimbarea prețului
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value)); // Convertește în număr
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value); // Convertește în număr
  };
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value); // Convertește în număr
  };

  const handleEdit = async () => {
    const { message } = await updateMaterial(
      material.id,
      name,
      price,
      material.image_url,
      description,
      category,
      available
    );

    alert(message);
  };
  const handleDelete = async () => {
    const { message } = await deleteMaterial(material.id);

    alert(message);
    await onDelete();
  };

  return (
    <Card className="border border-black rounded-md" shadow="sm">
      <CardBody className="overflow-visible p-0 flex justify-center ">
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
      </CardBody>

      <Divider />
      <CardFooter className="text-small justify-between flex-col gap-2">
        <Input
          isClearable
          onClear={() => setName("")}
          type="text"
          value={name}
          onChange={handleNameChange}
          label="Nume"
          isRequired={true}
        />

        <Input
          label="Pret (RON) cu TVA"
          type="number"
          value={String(price)}
          onChange={handlePriceChange}
        />

        <Textarea
          label="Descriere"
          value={description}
          onChange={handleDescriptionChange}
          minRows={1}
          maxRows={3}
        />
      </CardFooter>
      <CardFooter className="text-small justify-between">
        <Button
          className="text-white px-3 py-1 rounded-lg  hover:border hover:border-cyan-400"
          onClick={handleEdit}
          color="warning"
          size="sm"
        >
          Editeaza
        </Button>
        <Switch isSelected={available} onValueChange={setAvailable}>
          In stoc
        </Switch>
        <Button
          className=" px-3 py-1 rounded-lg hover:text-white hover:border hover:border-cyan-400"
          onClick={handleDelete}
          color="danger"
          size="sm"
        >
          Sterge
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MaterialCard;
