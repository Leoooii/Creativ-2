import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import constructi from '../../public/images/constructii.jpg';
import electrice from '../../public/images/Electrice.jpg';
import gradina from '../../public/images/Gradina.jpg';
import metalurgice from '../../public/images/metalurgice.jpg';
import unelte from '../../public/images/Unelte.jpg';
import sanitare from '../../public/images/sanitare.jpg';

export default function ResponsiveCarousel() {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop showStatus={false} autoPlay={true}>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image height={500} width={500} src={'/images/logo.png'} alt="creativ-logo" />

            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Materiale constructii</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={constructi} alt="image1" />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image height={500} width={500} src={'/images/logo.png'} alt="creativ-logo" />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Materiale metalurgice</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={metalurgice} alt="image1" />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image height={500} width={500} src={'/images/logo.png'} alt="creativ-logo" />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Sanitare</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={sanitare} alt="image1" />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image height={500} width={500} src={'/images/logo.png'} alt="creativ-logo" />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Unelte</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={unelte} alt="image1" />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image height={500} width={500} src={'/images/logo.png'} alt="creativ-logo" />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Electrice</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={electrice} alt="image1" />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 text-black font-sans p-14">
            <Image height={500} width={500} src={'/images/logo.png'} alt="creativ-logo" />
            <div className="flex flex-col align-baseline self-start">
              <h2 className="self-start text-xl font-bold">Echipamente gradina</h2>
              <h3 className="self-start">Asiguram transportul</h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={gradina} alt="image1" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
