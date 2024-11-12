import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import Link from 'next/link'

import {
  Constructii,
  Electrice,
  Gradina,
  Metalurgice,
  Sanitare,
  Unelte
} from '@/public/data/DummyData'

const LinksAccordion = () => {
  return (
    <Accordion isCompact={true} variant={'bordered'}>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        className={'flex flex-col '}
        title="Metalurgice"
      >
        {Metalurgice.map(item => {
          return (
            <div
              key={item.label}
              className={
                'hover:text-xl hover:bg-blue-950 hover:text-white px-1 rounded-md'
              }
            >
              <Link href={`/admin2?category=${item.label}`}>{item.label}</Link>
            </div>
          )
        })}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Constructii">
        {Constructii.map(item => {
          return (
            <div
              key={item.label}
              className={
                'hover:text-xl hover:bg-blue-950 hover:text-white px-1 rounded-md'
              }
            >
              <Link href={`/admin2?category=${item.label}`}>{item.label}</Link>
            </div>
          )
        })}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Electrice">
        {Electrice.map(item => {
          return (
            <div
              key={item.label}
              className={
                'hover:text-xl hover:bg-blue-950 hover:text-white px-1 rounded-md'
              }
            >
              <Link href={`/admin2?category=${item.label}`}>{item.label}</Link>
            </div>
          )
        })}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Sanitare">
        {Sanitare.map(item => {
          return (
            <div
              key={item.label}
              className={
                'hover:text-xl hover:bg-blue-950 hover:text-white px-1 rounded-md'
              }
            >
              <Link href={`/admin2?category=${item.label}`}>{item.label}</Link>
            </div>
          )
        })}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Unelte">
        {Unelte.map(item => {
          return (
            <div
              key={item.label}
              className={
                'hover:text-xl hover:bg-blue-950 hover:text-white px-1 rounded-md'
              }
            >
              <Link href={`/admin2?category=${item.label}`}>{item.label}</Link>
            </div>
          )
        })}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="Gradina">
        {Gradina.map(item => {
          return (
            <div
              key={item.label}
              className={
                'hover:text-xl hover:bg-blue-950 hover:text-white px-1 rounded-md'
              }
            >
              <Link href={`/admin2?category=${item.label}`}>{item.label}</Link>
            </div>
          )
        })}
      </AccordionItem>
    </Accordion>
  )
}

export default LinksAccordion
