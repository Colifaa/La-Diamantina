import React from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import NavBar from '@/Components/NavBar';

function Mine() {
  return (
    <div>
      <Head>
        <title>La Mina - La Diamantina</title>
        <meta name="description" content="Conoce la historia de la mina La Diamantina, su importancia y el proceso de extracción." />
      </Head>
    <NavBar />
      <section className="bg-blueGray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">La Mina La Diamantina</h2>
          <p className="text-lg text-center text-blueGray-500 mb-8">
            La Mina La Diamantina es el único yacimiento de piedras de afilar en Argentina, con una concesión exclusiva que nos permite extraer y procesar mineral de alta calidad.
          </p>
          <div className="flex flex-wrap justify-center mb-10">
            <img src="/images/mina.jpg" alt="Mina" className="w-64 h-auto mx-4 rounded shadow-lg" />
            <img src="/images/extraccion.jpg" alt="Extracción" className="w-64 h-auto mx-4 rounded shadow-lg" />
          </div>
          <h3 className="text-3xl font-semibold text-center mb-4">Proceso de Extracción</h3>
          <p className="text-lg text-center text-blueGray-500 mb-8">
            El proceso de extracción en nuestra mina es cuidadoso y sostenible, garantizando la preservación del medio ambiente mientras se obtienen piedras de la más alta calidad.
          </p>
          <div className="flex justify-center mb-8">
            <iframe
              src="https://www.youtube.com/embed/XXXXXXXXX"
              width="600"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Proceso de Extracción"
            ></iframe>
          </div>
          <h3 className="text-3xl font-semibold text-center mb-4">Mapa del Distrito Minero</h3>
          <img src="/images/mapa-minero.jpg" alt="Mapa del Distrito Minero" className="w-full h-auto mb-8 rounded shadow-lg" />
        </div>
      </section>


    </div>
  );
}

export default Mine;
