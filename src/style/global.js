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
* {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  border: 0;
  border: none;
  text-decoration: none;
}
.img-active {
  background: #0072bb66;
}
button {
  border: 0;
}

a {
  text-decoration: none;
  outline: none;
}
a:link {
  color: #50514f;
}
a:visited {
  color: #50514f;
}

.next_page,
.next_page:hover {
  opacity: 0.2;
}
.last_page,
.last_page:hover {
  opacity: 0.2;
}

button {
  border: none;
  text-decoration: none;
}
`
