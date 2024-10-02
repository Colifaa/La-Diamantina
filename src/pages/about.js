import React from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import NavBar from '@/Components/NavBar';
import About2 from '@/Components/About'
function About() {
  return (
    <div>
      <Head>
        <title>Sobre Nosotros - La Diamantina</title>
        <meta name="description" content="Conoce la historia y los valores de La Diamantina, una empresa familiar dedicada a la fabricación de piedras de afilar." />
      </Head>

      <About2 />

    </div>
  );
}

export default About;
