'use client';

// import { ImageCardComponent } from '@app/components/ImageCardComponent';

export default function Page({ params }: { params: { category: string } }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="flex">
        <h2 className="text-xl font-bold mb-4 text-black">Materiale de Construcții{` >>`} </h2>
        <div className="text-black text-xl"> {params.category.replace(/%20/g, ' ')}</div>
      </div>
      {/* <ImageCardComponent filtru={params.category.replace(/%20/g, ' ')} /> */}
    </div>
  );
}
