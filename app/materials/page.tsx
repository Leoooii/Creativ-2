"use client";

import { useEffect, useState } from "react";
import { fetchMaterials } from "@app/lib/data";
import MaterialCard from "@app/ui/meterials/MaterialCard";

import { Slider, Button } from "@nextui-org/react";
import { useDebounce } from "use-debounce";
import { Material } from "../lib/definitions";
import ModalComponent from "../components/Modal";
import MaterialList from "../components/MaterialsList";

import PaginationComponent from "../ui/meterials/pagination";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "../ui/skeletons";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [materials, setMaterials] = useState<Material[]>([]); // Starea pentru lista de materiale
  const [value, setValue] = useState([0, 300]);
  const [debouncedValue] = useDebounce(value, 500);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const searchParams = useSearchParams();

  const search = searchParams.get("page");
  console.log(search);

  const loadMaterials = async () => {
    const { materialsData, totalPages } = await fetchMaterials(
      page,
      debouncedValue[0],
      debouncedValue[1]
    );

    // let pages = await fetchMaterialsPages();
    setNumberOfPages(totalPages);

    setMaterials(materialsData);
    setNumberOfItems(materialsData.length);
  };

  useEffect(() => {
    loadMaterials();
  }, [debouncedValue, page]);

  return (
    <div className="flex p-3 justify-between">
      <div className="w-4/5">
        <div className="w-full flex justify-center">
          <PaginationComponent
            page={page}
            numberOfPages={numberOfPages}
            setPage={setPage}
          />
        </div>
        {/* <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense> */}
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <MaterialList materials={materials} loadMaterials={loadMaterials} />
        </Suspense>
        {numberOfItems === 0 && (
          <h1>Nu exista produse in acel interval de pret</h1>
        )}
      </div>
      <div className="w-1/5 flex  flex-col gap-2 right-0 border-l-4 p-3">
        <h1>Selecteaza filtre:</h1>
        <>
          <Slider
            className="max-w-md"
            label="Interval pret"
            formatOptions={{ style: "currency", currency: "LEI" }}
            step={10}
            maxValue={300}
            minValue={0}
            onChange={(value: number | number[]) =>
              setValue(Array.isArray(value) ? value : [value])
            }
            value={value}
          />
        </>

        <ModalComponent onSubmit={loadMaterials} />
      </div>
    </div>
  );
}
