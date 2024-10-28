import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 bottom-0  w-full">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-2">
            <h2 className="text-lg font-bold mb-2">
              POLITICA SI TERMENI LEGALI
            </h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Livrari si Retururi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Termeni și Condiții
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Politica de confidentialitate
                </a>
              </li>
              <li>
                <a
                  href="https://anpc.ro/"
                  className="text-gray-400 hover:text-white"
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
                <h3 className="text-gray-400 hover:text-white">
                  {" "}
                  0751-839-308
                </h3>
              </li>
              <li className="flex">
                <h3 className="text-gray-400 ">Email: </h3>
                <h3 className="text-gray-400 hover:text-white">
                  contact@creativtub.ro
                </h3>
              </li>
            </ul>
          </div>

          {/* <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">Sediu</h2>
            <div className="">
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40adff8363bae4c5:0x9d630f984af38ef5?sa=X&ved=1t:8290&ictx=111"
                className="text-gray-400 hover:text-white"
              >
                Str. Bucuresti nr. 216, Varteju, Jud. Ilfov
              </a>

              <h3 className="text-gray-400 ">(pe Centura Bucuresti)</h3>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {} CREATIV TUB SRL. Toate drepturile rezervate.
          </p>
          {/* <p className="text-gray-500">Website realizat de Ilie Leonard-Andrei</p> new Date().getFullYear()*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
