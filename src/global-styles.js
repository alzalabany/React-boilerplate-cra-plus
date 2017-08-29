import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
    min-width: 0;
  }

  html,
  body,
  #root {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    min-height: 100vh;
    min-width: 100vw;
    overflow-x:hidden;
    position:relative;
    background: #EAEAEA;
    color: #333;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: "SF Optimized", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-family: 'Open Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input:-webkit-autofill,
  select:-webkit-autofill
  textarea:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #EEE inset;
  }

`;
