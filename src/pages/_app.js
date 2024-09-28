
import Footer from '@/Components/Footer';
import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}
