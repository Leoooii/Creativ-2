import React from "react";
import { Pagination, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  numberOfPages: number;
  setPage: (newPage: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  page,
  numberOfPages,
  setPage
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 mb-5">
      <Pagination
        total={numberOfPages}
        color="secondary"
        page={page}
        onChange={setPage}
        // onChange={e => router.push(`/materials/${e}`)}
      />
      <div className="flex gap-2 justify-between">
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setPage(page > 1 ? page - 1 : page)}
        >
          Inapoi
        </Button>
        <Button
          size="sm"
          variant="flat"
          color="secondary"
          onPress={() => setPage(page < numberOfPages ? page + 1 : page)}
        >
          Inainte
        </Button>
      </div>
    </div>
  );
};
export default PaginationComponent;
