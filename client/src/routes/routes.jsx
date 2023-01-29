import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import {Login} from "../pages/Login";
import {Home} from "../pages/Home";
import { DataPersonal } from '../pages/DataPersonal';
import { NotFound } from '../pages/NotFound';
import { DataAcademic } from '../pages/DataAcademic';
import FullData from '../pages/FullData';
export function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/DataPersonal" element={<DataPersonal/>}/>
      <Route path="/DataAcademic" element={<DataAcademic/>}/>
      <Route path="/FullData" element={<FullData/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
  )
}

