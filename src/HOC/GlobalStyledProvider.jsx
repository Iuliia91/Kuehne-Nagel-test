import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
  padding:0;
  -webkit-font-smoothing: antialiased;
}
*{
  box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
/*@font-face{
  font-family:"spartanmedium";
  src:url(${spartanmediumFontURL})
}*/

`
const GlobalStyledProvide = () => {
  return (
    <React.Fragment>
      <GlobalStyled />
    </React.Fragment>
  )
}

export default GlobalStyledProvide
