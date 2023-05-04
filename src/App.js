import './App.css';
import {useEffect, useState} from "react";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Search from './search';
import Reservation from './reservation';
import CheckReservation from './CheckReservation';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="CheckReservation" element={<CheckReservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
