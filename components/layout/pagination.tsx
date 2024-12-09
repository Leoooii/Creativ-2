import React from 'react'
import { Button, Pagination } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

interface PaginationProps {
  page: number
  numberOfPages: number
  setPage: (newPage: number) => void
}

const PaginationComponent: React.FC<PaginationProps> = ({
  page,
  numberOfPages,
  setPage,
}) => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-5 rounded-md p-2 bg-blue-800 z-50  bottom-0  justify-center w-1/2 mx-auto border-1 border-white">
      <div className="flex justify-center">
        <Pagination
          color="primary"
          page={page}
          total={numberOfPages}
          onChange={setPage}
          // onChange={e => router.push(`/materials/${e}`)}
        />
      </div>

      <div className="flex gap-2 justify-between">
        <Button
          className={'text-white'}
          size="sm"
          variant="ghost"
          onPress={() => setPage(page > 1 ? page - 1 : page)}
        >
          Inapoi
        </Button>
        <Button
          className={'text-white'}
          size="sm"
          variant="bordered"
          onPress={() => setPage(page < numberOfPages ? page + 1 : page)}
        >
          Inainte
        </Button>
      </div>
    </div>
  )
}

export default PaginationComponent
