import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
// import { useSelector, useDispatch } from "react-redux";
// import { loginUser, clearUser } from "./Reduser/userSlice";
import firebase from './firebase.js';

import Home from './pages/Home'
import List from './components/post/List'
import Detail from './components/post/Detail'
import Modify from './components/post/Modify'
import Write from './components/post/Write'
import Main from './components/layout/Main'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Login from './components/user/Login'
import Join from './components/user/Join'


// 로그인 하기
const App = () => {
  useEffect(() => {
    // 올바른 함수 호출 구문으로 수정
    firebase.auth().onAuthStateChanged((userInfo) => {
      console.log("userInfo:", userInfo);
    });
  }, []);



  //로그아웃확인
  useEffect(() => {
    firebase.auth().signOut();
  }, []);



  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/write' element={<Write />}></Route>
          <Route path='/detail/:postNum' element={<Detail />}></Route>
          <Route path='/modify/:postNum' element={<Modify />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/join' element={<Join />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>

  )
}

export default App