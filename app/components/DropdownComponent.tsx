import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from "@nextui-org/react";

interface DropdownItem {
  label: string;
}

interface DropdownComponentProps {
  array: DropdownItem[]; // Array de obiecte de tip DropdownItem
  name: string;
}

export const DropdownComponent = ({
  array = [],
  name
}: DropdownComponentProps) => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="bordered">{name}</Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        color="primary"
        aria-label="Dynamic Actions"
        items={array}
        className="rounded-lg"
      >
        {item => (
          <DropdownItem
            key={item.label}
            color={"primary"}
            className={"default bg-white"}
            href={`/materials/${item.label}`}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
