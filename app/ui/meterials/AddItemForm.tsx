"use client";

import { addMaterial } from "@app/lib/data";
import { useState, useEffect } from "react";
import { Input, Switch, Button, Image } from "@nextui-org/react";
import { fetchCategories } from "@app/lib/data";
import { Category } from "@/app/lib/definitions";
import AutocompleteComponent from "./Autocomplete";

interface AddItemProps {
  onSubmit: () => Promise<void>;
}

const defaultImg =
  "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/upload-bold-arrow-icon.png";

const AddItemForm: React.FC<AddItemProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("1");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState(true);

  const [category, setCategory] = useState("Constructii");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories(); // Fetch categories din backend
        setCategories(fetchedCategories); // Setează categoriile
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    loadCategories();
  }, []);

  const handleSubmit = async () => {
    const { message } = await addMaterial(
      name,
      price,
      imageURL,
      description,
      available,
      category
    );
    alert(message);
  };

  const handleCategory = (category: string) => {
    // Logica ta pentru a seta categoria, de exemplu, apelând o API
    setCategory(category);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-5 bg-white gap-2 justify-center"
    >
      <Input
        size="md"
        label="Nume produs"
        required
        placeholder="Introduceti numele produsului"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        placeholder="Introduceti pretul"
        label="Pret"
        required
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <Input
        label="URL imagine"
        placeholder="URL imagine"
        required
        value={imageURL}
        onChange={e => setImageURL(e.target.value)}
      />

      <div className="flex justify-center">
        <Image
          src={imageURL || defaultImg}
          alt="preview"
          width={100}
          height={100}
        />
      </div>

      <Input
        label="Descrierea produsului"
        placeholder="Introduceti descrierea produsului"
        required
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

      <Button type="submit" color="primary">
        Adauga
      </Button>
    </form>
  );
};

export default AddItemForm;
