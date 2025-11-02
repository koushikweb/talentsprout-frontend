import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Dashboard from '../pages/Dashboard';
 import Jobs from '../pages/Jobs';
 import Profile from '../pages/Profile';
 import Layout from '../Layout/Layout';

 export default function App () {
    return (
      <Layout>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/jobs' element = {<Jobs/>}/>
          <Route path='/profile' element = {<Profile/>}/>
        </Routes>
        </BrowserRouter>
      </Layout>
    )
 };
