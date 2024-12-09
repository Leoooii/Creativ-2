"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

import FilterSidebar from "@/components/FilterSidebar";
import { InvoicesTableSkeleton } from "@/components/ui/skeletons";
import MaterialList from "@/components/MaterialsList";
import { fetchCategories, fetchMaterials } from "@/lib/data";
import { Category, Material } from "@/lib/definitions";
import { useAuthStore } from "@/providers/auth-store-provider";
import PaginationComponent from "@/components/layout/pagination";

const CatalogPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [materials, setMaterials] = useState<Material[]>([]);
  const [value, setValue] = useState([0, 300]);
  const [debouncedValue] = useDebounce(value, 500);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const isAdmin = useAuthStore(state => state.isAdmin);

  const [categories, setCategories] = useState<Category[]>([]);

  const loadMaterials = async () => {
    if (category) {
      const { materialsData, totalPages } = await fetchMaterials(
        page,
        debouncedValue[0],
        debouncedValue[1],
        category
      );

      console.log(materialsData);
      setNumberOfPages(totalPages);
      setMaterials(materialsData);
      setNumberOfItems(materialsData.length);
    } else {
      const { materialsData, totalPages } = await fetchMaterials(
        page,
        debouncedValue[0],
        debouncedValue[1]
      );

      setNumberOfPages(totalPages);
      setMaterials(materialsData);
      setNumberOfItems(materialsData.length);
    }
  };

  useEffect(() => {
    loadMaterials();
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();

        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    loadCategories();
  }, [debouncedValue, page, category]);

  const handleCategory = async (category: string) => {
    router.push(`/catalog?category=${category}`);
  };

  return (
    <div className="flex flex-col p-3  min-h-screen">
      <FilterSidebar
        categories={categories}
        isAdmin={isAdmin}
        numberOfPages={numberOfPages}
        page={page}
        reload={loadMaterials}
        setCategory={handleCategory}
        setPage={setPage}
        setValue={setValue}
        value={value}
      />
      <div className="  h-full ">
        {/*<div className="w-full text-center bg-blue-950 text-white rounded-sm mb-2">*/}
        {/*  <h1>{category}</h1>*/}
        {/*</div>*/}
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <MaterialList loadMaterials={loadMaterials} materials={materials} />
        </Suspense>
        {numberOfItems === 0 && (
          <h1>Nu există produse în acel interval de preț</h1>
        )}
        <div>
          {numberOfPages > 1 && (
            <PaginationComponent
              numberOfPages={numberOfPages}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
