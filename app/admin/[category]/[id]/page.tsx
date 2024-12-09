export default async function Page({
  params,
}: {
  params: Promise<{ category: string; id: string }>
}) {
  const category = (await params).category
  const id = (await params)?.id

  console.log('hei')

  return (
    <div>
      Categoria {category} cu id: {id}
    </div>
  )
}
