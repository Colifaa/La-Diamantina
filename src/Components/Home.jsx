import React from 'react';
import Head from 'next/head';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Head>
        <title>La Diamantina - Piedras de Afilar de Máxima Calidad</title>
        <meta name="description" content="LA DIAMANTINA es una empresa familiar dedicada a la explotación minera y manufactura de piedras de afilar de máxima calidad." />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://www.ladiamantina.com.ar/uploads/slides/b4e3ad1474a3ceecb2535f7bee087ab00e755163.jpg')",
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    La Diamantina: 60 años de excelencia.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Piedras de afilar de la más alta calidad, con garantías de fabricación. Desde el corazón de Mendoza, a todo el país.
                  </p>
                  <button className="mt-8 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Ver Productos
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        {/* Sección de información sobre la empresa */}
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-gem"></i>
                    </div>
                    <h6 className="text-xl font-semibold">60 Años de Tradición</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Desde su fundación, La Diamantina ha sido sinónimo de calidad en la explotación minera y la manufactura de piedras de afilar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-industry"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Planta Industrial Propia</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      La planta en San Rafael, Mendoza, procesa el mineral extraído, garantizando la mejor calidad en cada etapa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-mountain"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Yacimiento Propio</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      La mina "La Diamantina" es la única concesión minera de piedras de afilar en Argentina, con una trayectoria de más de seis décadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/* Sección de compras mayoristas */}
                <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center mb-8">Compras Mayoristas</h2>
            <p className="text-lg text-center text-blueGray-500 mb-8">
              Ofrecemos compras mayoristas para negocios y distribuidores. Contáctanos para recibir más información sobre precios y condiciones.
            </p>
            <div className="text-center">
              <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                Contactar
              </button>
            </div>
          </div>
        </section>

        {/* Sección de testimonios */}
        <section className="bg-blueGray-50 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center mb-8">Testimonios de Nuestros Clientes</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6">
                  <p className="text-lg text-blueGray-500">
                    "Las piedras de afilar de La Diamantina son de excelente calidad. Las utilizo en mi taller desde hace años y siempre han superado mis expectativas."
                  </p>
                  <h6 className="mt-4 text-xl font-semibold">- Carlos M.</h6>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6">
                  <p className="text-lg text-blueGray-500">
                    "Un producto duradero y de calidad. Lo recomiendo a cualquier persona que busque una herramienta confiable."
                  </p>
                  <h6 className="mt-4 text-xl font-semibold">- Ana P.</h6>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg p-6">
                  <p className="text-lg text-blueGray-500">
                    "Excelente atención al cliente y productos de primera. La Diamantina nunca me ha fallado."
                  </p>
                  <h6 className="mt-4 text-xl font-semibold">- Roberto G.</h6>
                </div>
              </div>
            </div>
          </div>
        </section>



        <Footer />
      </section>
    </div>
  );
}

export default Home;
