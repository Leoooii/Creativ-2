import React, { useState } from 'react'
import { Button, Input } from '@nextui-org/react'

import { updateRequest } from '@/lib/data'

const AdminAnswer = ({ id, fetchData }: { id: number; fetchData: any }) => {
  const [answer, setAnswer] = useState('')

  return (
    <div className={'flex gap-2'}>
      <Input value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <Button
        color={'success'}
        variant={'bordered'}
        onClick={() => {
          updateRequest(id, answer, 'raspuns').then(() => {
            fetchData()
          })
        }}
      >
        Raspunde
      </Button>
    </div>
  )
}

export default AdminAnswer
