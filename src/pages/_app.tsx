import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import Header from '@/layouts/HeaderLayout'

const colors = {
  brand: {
    // 900: '#805AD5',
    // 800: '#153e75',
    700: '#805AD5',
    600: '#5E7BDB',
    500: '#4299E1',
    400: '#4299E1',
    300: '#5E7BDB',
    200: '#805AD5',
    // 100: '#4299E1',
  },
}

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

export const theme = extendTheme({ colors, config })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;