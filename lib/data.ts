'use server'
import { sql } from '@vercel/postgres'

import { Category, Material } from './definitions'

const ITEMS_PER_PAGE = 6

export async function fetchMaterials(
  currentPage: number,
  minPrice?: number,
  maxPrice?: number,
  category?: string
): Promise<{ materialsData: Material[]; totalPages: number }> {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE

    // Query-ul pentru materialele paginate

    let query = sql<Material[]>`
        SELECT * FROM Materials
        WHERE price >= ${minPrice || 0}
        AND price <= ${maxPrice || 999999}
   
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `
    let count =
      await sql`SELECT COUNT(*) FROM Materials   WHERE price >= ${minPrice || 0}
        AND price <= ${maxPrice || 999999}`

    if (category) {
      query = sql<Material[]>`
        SELECT * FROM Materials
        WHERE price >= ${minPrice || 0}
        AND price <= ${maxPrice || 999999}
        AND category=${category}
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `
      count =
        await sql`SELECT COUNT(*) FROM Materials   WHERE price >= ${minPrice || 0}
        AND price <= ${maxPrice || 999999}  AND category=${category}`
    }

    // Executarea query-ului pentru materiale
    const materialsData = await query

    // Aflarea numărului total de pagini

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)

    // Returnează atât materialele, cât și numărul total de pagini
    console.log(materialsData.rows.flat())

    return {
      materialsData: materialsData.rows.flat(),
      totalPages
    }
  } catch (error) {
    console.error('Failed to fetch materials:', error)
    throw new Error('Failed to fetch materials')
  }
}

export async function fetchCategories() {
  try {
    let query = sql<Category[]>`
    SELECT * FROM Categories
  `

    const materials = await query

    return materials.rows.flat()
  } catch (error) {
    console.error('Failed to fetch materials:', error)
    throw new Error('Failed to fetch materials')
  }
}

export async function addCategorie(name: string) {
  if (!name) {
    throw new Error('All fields are required')
  }
  console.log(name)

  try {
    await sql`
      INSERT INTO Categories (name)
      VALUES (${name});
    `
    const query = await sql<Category[]>`
    SELECT * FROM Categories
  `

    console.log(query)

    return { message: 'Category added successfully' }
  } catch (error) {
    console.error('Failed to add material:', error)
    throw new Error('Failed to add material')
  }
}

export async function fetchMaterialById(id: string) {
  try {
    // Query-ul pentru a selecta materialul cu ID-ul specificat
    const data = await sql<Material>`SELECT * FROM Materials WHERE id = ${id}`

    console.log(data.rows[0], 'baa')

    return data.rows[0]
  } catch (error) {
    console.log(error)

    return null
  }
}

export async function addMaterial(
  name: string,
  price: string,
  image_url: string,
  description: string,
  available: boolean,
  category: string
) {
  if (
    !name ||
    !price ||
    !image_url ||
    !description ||
    !available ||
    !category
  ) {
    throw new Error('All fields are required')
  }
  console.log(name, price, image_url, description, available, category)

  try {
    await sql`
      INSERT INTO Materials (name, price, image_url,description,available,category)
      VALUES (${name}, ${Number(price)}, ${image_url},${description},${available},${category});
    `
    const data = await sql<Material>`SELECT * FROM Materials`

    console.log(data.rows, 'baa')

    return { message: 'Material added successfully' }
  } catch (error) {
    console.error('Failed to add material:', error)
    throw new Error('Failed to add material')
  }
}

export async function updateMaterial(
  id: number,
  name: string,
  price: number,
  image_url: string,
  description: string,
  category: string,
  available: boolean
) {
  if (!id || !name || !price || !image_url) {
    throw new Error('ID, name, price, and image_url are required')
  }
  console.log('aici', id, price, name)

  try {
    const result = await sql`
      UPDATE Materials
      SET name = ${name}, price = ${price}, image_url = ${image_url},description=${description},category=${category},available=${available}
      WHERE id = ${id};
    `

    // Verifică numărul de rânduri afectate
    if (result.rowCount === 0) {
      throw new Error('Material not found')
    }

    // alert('Ati reusit sa modificati materialul')
    return { message: 'Material updated successfully' }
  } catch (error) {
    console.error('Failed to update material:', error)
    throw new Error('Failed to update material')
  }
}

export async function deleteMaterial(id: number) {
  if (!id) {
    throw new Error('ID is required')
  }

  try {
    const result = await sql`
      DELETE FROM Materials
      WHERE id = ${id};
    `

    // Verifică numărul de rânduri afectate
    if (result.rowCount === 0) {
      throw new Error('Material not found')
    }

    return { message: 'Material deleted successfully' }
  } catch (error) {
    console.error('Failed to delete material:', error)
    throw new Error('Failed to delete material')
  }
}
