import { extendTheme } from '@chakra-ui/react'

// Definir colores personalizados para tu aplicación
const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'light' ? 'gray.100' : 'gray.900',  // Fondo claro en light mode, oscuro en dark mode
      color: props.colorMode === 'light' ? 'black' : 'green',      // Texto negro en light mode, blanco en dark mode
    }
  })
}

const config = {
  initialColorMode: 'light', // o 'dark' si prefieres el modo oscuro por defecto
  useSystemColorMode: false, // Permitir el cambio de color basado en las preferencias del usuario
}

const theme = extendTheme({ config , styles})

export default theme