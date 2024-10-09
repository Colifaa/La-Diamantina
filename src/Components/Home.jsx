import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import { useAnimation, motion } from 'framer-motion';

function Home() {
  const [isMounted, setIsMounted] = useState(false); // Estado para verificar si el componente se ha montado
  const animationControls = useAnimation();
  const sectionsRef = useRef([]);

  useEffect(() => {
    setIsMounted(true); // Cambia a verdadero una vez que el componente se ha montado

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationControls.start({ opacity: 1, y: 0 });
        } else {
          animationControls.start({ opacity: 0, y: 50 });
        }
      });
    });

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [animationControls]);

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
                  <button className="mt-8 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
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
              <motion.div 
                className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                ref={(el) => (sectionsRef.current[0] = el)}
                initial={{ opacity: 0, y: 50 }} 
                animate={isMounted ? animationControls : { opacity: 0, y: 50 }} // Solo animar si está montado
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>
              
              <motion.div 
                className="w-full md:w-4/12 px-4 text-center"
                ref={(el) => (sectionsRef.current[1] = el)}
                initial={{ opacity: 0, y: 50 }} 
                animate={isMounted ? animationControls : { opacity: 0, y: 50 }} // Solo animar si está montado
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              <motion.div 
                className="pt-6 w-full md:w-4/12 px-4 text-center"
                ref={(el) => (sectionsRef.current[2] = el)}
                initial={{ opacity: 0, y: 50 }} 
                animate={isMounted ? animationControls : { opacity: 0, y: 50 }} // Solo animar si está montado
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de compras mayoristas */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center mb-8 fade-in">Compras Mayoristas</h2>
            <p className="text-lg text-center text-blueGray-500 mb-8 fade-in">
              Ofrecemos compras mayoristas para negocios y distribuidores. Contáctanos para más información.
            </p>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 px-4">
                <div className="bg-blueGray-100 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h4 className="text-xl font-semibold mb-4">Proceso de Compra</h4>
                  <ol className="list-decimal text-left text-blueGray-500 text-lg mx-auto w-2/3">
                    <li>Contáctanos para consultar precios.</li>
                    <li>Elige los productos que deseas comprar.</li>
                    <li>Confirma tu pedido y realiza el pago.</li>
                    <li>Recibe tus productos en la dirección indicada.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de contacto */}
        <section className="bg-blueGray-200 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center mb-8 fade-in">Contáctanos</h2>
            <p className="text-lg text-center text-blueGray-500 mb-8 fade-in">
              Para consultas, pedidos o información adicional, no dudes en ponerte en contacto con nosotros.
            </p>
            <div className="text-center fade-in">
              <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                Contactar
              </button>
            </div>
          </div>
        </section>
      </section>

      
    </div>
  );
}

export default Home;
