import { fetchMaterialById } from '@/lib/data'

export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params)?.id
  const material = await fetchMaterialById(id)

  return (
    <div>
      {material && material.name}
      <img alt={material?.name} src={material?.image_url} />
      <h3>{material?.description}</h3>
      <h3>{material?.available}</h3>
      <h3>{material?.category}</h3>
      <h3>{material?.price}</h3>
    </div>
  )
}
