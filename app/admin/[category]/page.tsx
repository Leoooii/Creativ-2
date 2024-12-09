import CategoryPage from '@/components/CategoryPage'

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const category = (await params).category

  return (
    <div>
      <CategoryPage filteredCategory={category} />
    </div>
  )
}
