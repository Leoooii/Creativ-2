// /components/MaterialList.tsx
import React from 'react'

import MaterialCard from '@/components/MaterialCard'
import { Material } from '@/lib/definitions'

interface MaterialListProps {
  materials: Material[]
  loadMaterials: () => Promise<void>
}

const MaterialList: React.FC<MaterialListProps> = ({
  materials,
  loadMaterials
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-10 pb-20 pt-5">
      {materials.map(material => (
        <MaterialCard
          key={material.id}
          material={material}
          onDelete={loadMaterials}
        />
      ))}
    </div>
  )
}

export default MaterialList
