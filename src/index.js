import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { App } from 'components/App';
// import { Example1 } from 'components/Example1';
import Reader from 'components/Reader/Reader';
import publications from './publications.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <GlobalStyle />
    <Reader items={publications} />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
