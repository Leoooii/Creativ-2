import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Category } from "@/app/lib/definitions";

interface AutocompleteProps {
  categories: Category[];
  setCategory: (category: string) => Promise<void>;
}

const AutocompleteComponent: React.FC<AutocompleteProps> = ({
  categories,
  setCategory
}) => {
  const [value, setValue] = React.useState("");

  const onInputChange = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="flex w-full flex-col">
      <Autocomplete
        label="Search an animal"
        variant="bordered"
        defaultItems={categories}
        className="max-w-xs"
        allowsCustomValue={true}
        onInputChange={onInputChange}
      >
        {category => (
          <AutocompleteItem key={category.id}>{category.name}</AutocompleteItem>
        )}
      </Autocomplete>

      {/* <p className="text-small text-default-500">Current input text: {value}</p> */}
    </div>
  );
};
export default AutocompleteComponent;
