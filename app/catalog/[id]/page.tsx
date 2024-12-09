import { fetchMaterialById } from '@/lib/data'
import CustomButton from '@/components/CustomButton'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params)?.id
  const material = await fetchMaterialById(id)

  return (
    <div
      className={
        'bg-blue-950 my-12 rounded-lg shadow-sm grid grid-cols-1 sm:grid-cols-2  p-12 text-white gap-7'
      }
      style={{ boxShadow: '0px 4px 10px rgba(0, 00, 200, 50)' }}
    >
      <div className="p-2 flex flex-col justify-between">
        <div>
          <h1 className={'text-center mb-10 font-extrabold text-xl'}>
            {material?.name}
          </h1>

          <h3>
            Descriere: <br />
            <hr />
            {material?.description}
          </h3>
          {material?.available ? (
            <h3 className={'text-green-500'}>In stoc</h3>
          ) : (
            <h3 className={'text-red-500'}>Nu e in stoc</h3>
          )}
          <h3>Categoria:`{material?.category}`</h3>
        </div>
        <div>
          <h3 className={'text-2xl'}>{material?.price} lei</h3>
          <CustomButton id={material!.id} />
        </div>
      </div>
      <div
        className={
          'rounded-lg p-2 bg-gray-300 hover:bg-gray-200 flex justify-center'
        }
      >
        <img alt={material?.name} src={material?.image_url} />
      </div>
    </div>
  )
}
