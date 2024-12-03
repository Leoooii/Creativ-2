import React from 'react'
import { Slider } from '@nextui-org/react'

import { Category } from '@/lib/definitions'
import CustomModal from '@/components/forms/CustomModal'
import AddItemForm from '@/components/forms/AddItemForm'
import AddCategoryForm from '@/components/forms/AddCategoryForm'
import BreadCrumbBar from '@/components/layout/BreadCrumbbar'

interface FilterSidebarProps {
  categories: Category[]
  setCategory: (category: string) => Promise<void>
  value: number[]
  setValue: (value: number[]) => void
  page: number
  setPage: (page: number) => void
  numberOfPages: number
  reload: () => Promise<void>
  isAdmin: boolean
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  setCategory,
  value,
  setValue,
  page,
  setPage,
  numberOfPages,
  isAdmin
}) => (
  <div className="w-1/4 flex flex-col  gap-2 right-0 border-r-4 p-3 sticky top-0 h-full text-gray-300 font-extrabold">
    <div>
      <BreadCrumbBar />
      <h1>Selectează filtre:</h1>
      <Slider
        className="max-w-md mb-5"
        formatOptions={{ style: 'currency', currency: 'LEI' }}
        label="Interval preț"
        maxValue={300}
        minValue={0}
        step={10}
        value={value}
        onChange={(value: number | number[]) =>
          setValue(Array.isArray(value) ? value : [value])
        }
      />
      {/*<AutocompleteComponent*/}
      {/*  categories={categories}*/}
      {/*  defaultValue={''}*/}
      {/*  setCategory={setCategory}*/}
      {/*/>*/}
    </div>

    <div>
      {isAdmin && (
        <div className={'flex gap-1'}>
          <CustomModal buttonName={'Adauga Item'} header={'hello'}>
            <AddItemForm />
          </CustomModal>
          <CustomModal
            buttonName={'Adauga Categorie'}
            header={'Adauga categorie'}
          >
            <AddCategoryForm />
          </CustomModal>
        </div>
      )}
    </div>
  </div>
)

export default FilterSidebar
