// /components/MaterialList.tsx
import React from "react";
import MaterialCard from "@app/ui/materials/MaterialCard";

import { Material } from "../lib/definitions";

interface MaterialListProps {
  materials: Material[];
  loadMaterials: () => Promise<void>;
  isEditable: boolean;
}

const MaterialList: React.FC<MaterialListProps> = ({
  materials,
  loadMaterials,
  isEditable
}) => {
  return (
    <div className="grid grid-cols-3 gap-3 px-10 ">
      {materials.map(material => (
        <MaterialCard
          key={material.id} // Folosește id-ul pentru a evita generarea de chei duplicate
          isEditable={isEditable}
          material={material}
          onDelete={loadMaterials} // Transmite funcția de reîncărcare
        />
      ))}
    </div>
  );
};

export default MaterialList;
