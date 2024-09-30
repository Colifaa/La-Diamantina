import Footer from '@/Components/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme/theme' // si usas un tema personalizado
import NavBar from '../Components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}> {/* ChakraProvider debe envolver todo */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} /> {/* Script para manejar el modo oscuro */}
      <ThemeProvider>
      <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </ChakraProvider>
  )
}
