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
  setPage
}) => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-5 rounded-md p-2 bg-blue-900 z-50 fixed bottom-0">
      <Pagination
        color="primary"
        page={page}
        total={numberOfPages}
        onChange={setPage}
        // onChange={e => router.push(`/materials/${e}`)}
      />
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
          variant="ghost"
          onPress={() => setPage(page < numberOfPages ? page + 1 : page)}
        >
          Inainte
        </Button>
      </div>
    </div>
  )
}

export default PaginationComponent
