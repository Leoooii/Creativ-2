import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 bottom-0  w-full rounded-lg">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-2">
            <h2 className="text-lg font-bold mb-2">
              POLITICA SI TERMENI LEGALI
            </h2>
            <ul>
              <li>
                <a className="text-gray-400 hover:text-white" href="#">
                  Livrari si Retururi
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  href="https://anpc.ro/"
                >
                  Termeni și Condiții
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  href="https://anpc.ro/"
                >
                  Politica de confidentialitate
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white"
                  href="https://anpc.ro/"
                >
                  ANPC
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">Program</h2>
            <h3 className="text-gray-400 hover:text-white">Luni - Vineri: 8:00 - 17:00 pm</h3>
          </div> */}

          <div className="w-full md:w-1/4 mb-2">
            <h2 className="text-lg font-bold mb-2">Date de contact</h2>
            <ul>
              <li className="flex">
                <h3 className="text-gray-400 ">Telefon: </h3>
                <h3 className="text-gray-400 hover:text-white">0751-839-308</h3>
              </li>
              <li className="flex">
                <h3 className="text-gray-400 ">Email: </h3>
                <h3 className="text-gray-400 hover:text-white">
                  contact@creativtub.ro
                </h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-2 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {} CREATIV TUB SRL. Toate drepturile rezervate.
          </p>
          {/* <p className="text-gray-500">Website realizat de Ilie Leonard-Andrei</p> new Date().getFullYear()*/}
        </div>
      </div>
    </footer>
  )
}

export default Footer
