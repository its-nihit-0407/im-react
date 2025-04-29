import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {

  return (
    <>
    <h1>Vite hello</h1>
    </>
  );
}

const reactELement = {
  type: "a",
  props: {
      href: "https://www.google.com",
      target: "_blank"
  },
  children: "Click here to visit google", 
}
const newt = "Hello I'm nihit"; // works

let activeElement = ( // works
  <a href='https://www.google.com'>
    Visit Google
  </a>
)

let reactnewEl = React.createElement(
  "a",
  {href: "https://www.google.com", target: "_blank"},
  "Please Visit Google",
) // working



createRoot(document.getElementById('root')).render(
  // reactnewEl // you can't create tag from variable
  // newt  
  //blocks the variables
  <StrictMode> 
    <App/>
  </StrictMode>
)
