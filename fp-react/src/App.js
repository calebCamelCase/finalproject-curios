import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
// import router from '../../fp-api/app/routes/router';

import Header from './components/Header';
import Card from './components/Card';
import Home from './components/Home';
import Store from './components/Store';
import CurioPage from './components/CurioPage';
import Login from './components/Login';
import Footer from './components/Footer';

export default function App() {
    const [curioArr, setCurioArr] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3001/api/curio'

        axios.get(url)
            .then(res =>
            
                setCurioArr(res.data)
                )
        }, [])

        console.log(curioArr);
    
    return(
        <>
        <Header />
            <Routes>
                <Route path='/' index element={<Home />}/>
                <Route path='/menu' element={<Store props={curioArr} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<CurioPage />}/>
                <Route path='*' element={<h1>Error</h1>}/>
            </Routes>
        <Footer />
        </>
    )
}