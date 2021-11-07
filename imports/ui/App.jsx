import React from 'react';
import Header from './Header/Header.jsx';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import DataProvider from './Context/DataProvider.jsx';

export const App = () => (
  <DataProvider>
    <Header/>
    {/* <Hello/>
    <Info/> */}
  </DataProvider>
);
