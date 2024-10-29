import { CheckCircleIcon } from '@heroicons/react/16/solid'
import { inter } from '@app/ui/fonts';

const list = [
  {
    description:
      'Suntem unul dintre marii furnizori de materiale pentru constructii si instalatii, din Romania, care furnizeaza materiale pentru constructii “la cheie".',
  },
  {
    description:
      'Prin deviza noastra “BADUC …. si casa e gata” dorim sa va facem cunoscut faptul ca noi suntem acel “furnizor unic” pe care il cautati pentru a economisi timp si bani, achizitionand materiale necesare din aceeasi sursa.',
  },
  {
    description: 'Experienta, profesionalismul si seriozitatea ne caracterizeaza activitatea de peste patru decenii.',
  },
  {
    description:
      'Specialistii nostri va ofera consultanta tehnica si economica in legatura cu toate materialele si solutiile constructive utilizate actualmente.',
  },
  {
    description:
      'Oferta noastra de materiale pentru constructii si instalatii, completa si diversificata, raspunde atat exigentelor tehnice actuale cat si diverselor optiuni economice ale clientilor nostrii.',
  },
  {
    description: 'Logistica noastra asigura santierului dumeavoastra toate materialele, intotdeauna, la timp.',
  },
];

export default function AboutUs() {
  return (
    <div className={`${inter.className} grid grid-cols-3  gap-10`}>
      {list.map((item) => {
        return (
          <div
            key={item.description}
            className="bg-blue-950 text-white rounded-md p-3 hover:bg-blue-900 hover:cursor-pointer flex flex-raw gap-2"
          >
            <div>
              <CheckCircleIcon color="white" className="size-8 text-white" />
            </div>

            <h1>{item.description}</h1>
          </div>
        );
      })}
    </div>
  );
}
