// src/app/[category]/[id]/page.tsx
// import { useRouter } from 'next/navigation';
// import { Metalurgice } from '../../../../public/data/DummyData';
// import Image from 'next/image';

const DetailPage = () => {
  // const { category, id } = params; // Obține categoria și id-ul din parametrii URL
  // console.log();
  // const subcategorieGasita = Metalurgice.find((subcategorie) => subcategorie.label === category.replace(/%20/g, ' '));
  // const selected = subcategorieGasita?.materiale?.find((item) => item.code === Number(id));
  // if (selected) {
  //   console.log('a', selected, id);
  // } else {
  //   console.log('Obiectul nu a fost găsit sau materialele nu sunt disponibile.', id);
  // }
  // // item va conține acum doar categoriile care au cel puțin un material cu code egal cu id
  // return (
  //   <div className="text-black">
  //     <h1 className="text-black">
  //       Detalii pentru {category} - ID: {id}
  //     </h1>
  //     <h1>{selected?.title}</h1>
  //     <h1>{selected?.code}</h1>
  //     <h1>{selected?.description}</h1>
  //     <h1>{selected?.price}</h1>
  //     <Image src={`${selected?.img}`} height={100} width={100} alt="item" />
  //     {/* Aici poți adăuga mai multe detalii despre elementul specific */}
  //   </div>
  // );
};

export default DetailPage;
