import { createGlobalStyle } from 'styled-components'
import img from '../assets/Green.jpg'

export const GlobalStyle = createGlobalStyle`
body {
  min-height: 100vh;
  max-width: 100vw;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${img});
}
`
