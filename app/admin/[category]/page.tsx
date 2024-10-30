import CategoryPage from '@app/ui/materials/category'

export default async function Page({
  params
}: {
  params: Promise<{ category: string }>
}) {
  const category = (await params).category

  return (
    <div>
      {/*My Post: {category}*/}
      <CategoryPage filteredCategory={category} />
    </div>
  )
}
