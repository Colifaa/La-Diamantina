import React from 'react';
import Head from 'next/head';
import Footer from '../Components/Footer';
import NavBar from '@/Components/NavBar';

function Contact() {
  return (
    <div>
      <Head>
        <title>Contacto - La Diamantina</title>
        <meta name="description" content="Contacta con nosotros para cualquier consulta o información sobre nuestros productos." />
      </Head>
    <NavBar />
      <section className="bg-blueGray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">Contáctanos</h2>
          <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Teléfono</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phone" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Mensaje</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" required></textarea>
            </div>
            <button className="bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">Información de Contacto</h2>
          <p className="text-lg text-center text-blueGray-500 mb-4">Teléfono: (123) 456-7890</p>
          <p className="text-lg text-center text-blueGray-500 mb-4">Dirección: Calle Falsa 123, Mendoza, Argentina</p>
          <p className="text-lg text-center text-blueGray-500 mb-4">Email: contacto@ladiamantina.com</p>
          <div className="flex justify-center mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8392177629847!2d-68.29424768464222!3d-34.6157559804593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96760a4a4a4a4a4a%3A0x4c4c4c4c4c4c4c4c!2sLa%20Diamantina!5e0!3m2!1ses!2sar!4v1647229447925!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-lg text-center text-blueGray-500 mb-4">Horario de Atención: Lunes a Viernes, 9:00 AM - 5:00 PM</p>
        </div>
      </section>

    </div>
  );
}

export default Contact;
