import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

import constructi from '../public/images/constructii.jpg'
import electrice from '../public/images/Electrice.jpg'
import gradina from '../public/images/Gradina.jpg'
import metalurgice from '../public/images/metalurgice.jpg'
import unelte from '../public/images/Unelte.jpg'
import sanitare from '../public/images/sanitare.jpg'

export default function ResponsiveCarousel() {
  return (
    <div
      className={'w-full max-h-fit bg-white'}
      style={{ boxShadow: '0px 4px 10px rgba(0, 10, 150, 10)' }}
    >
      <Carousel
        infiniteLoop
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
      >
        <div className="flex gap-10  h-min">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image
              alt="creativ-logo"
              height={300}
              src={'/images/logo.png'}
              width={300}
            />

            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">
                Materiale constructii
              </h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center align-middle items-center">
            <Image alt="image1" src={constructi} />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image
              alt="creativ-logo"
              height={500}
              src={'/images/logo.png'}
              width={500}
            />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">
                Materiale metalurgice
              </h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center align-middle items-center">
            <Image alt="image1" src={metalurgice} />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image
              alt="creativ-logo"
              height={500}
              src={'/images/logo.png'}
              width={500}
            />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Sanitare</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center align-middle items-center">
            <Image alt="image1" src={sanitare} />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image
              alt="creativ-logo"
              height={500}
              src={'/images/logo.png'}
              width={500}
            />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Unelte</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center align-middle items-center">
            <Image alt="image1" src={unelte} />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image
              alt="creativ-logo"
              height={500}
              src={'/images/logo.png'}
              width={500}
            />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Electrice</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center align-middle items-center">
            <Image alt="image1" src={electrice} />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image
              alt="creativ-logo"
              height={500}
              src={'/images/logo.png'}
              width={500}
            />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">
                Echipamente gradina
              </h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center align-middle items-center">
            <Image alt="image1" src={gradina} />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
