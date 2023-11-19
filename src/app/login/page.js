// addUser.js (Register form componenti)
"use client"

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStore from '../../store/store';
import Link from 'next/link';

const Login = () => {
  const { setUser } = useStore();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const login = async (formDataWithFile) => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/auth/login', formDataWithFile);
      
      console.log("DATA : ", response);


      if (response.status == 200) {
        window.localStorage.token = response.data.token;
        console.log("user 1 : ", response.data.user.name);

        if (response.data && response.data.user) {
          console.log("user 1 : ", response.data.user);

          window.localStorage.user = JSON.stringify(response.data.user);

          setUser(response.data.user);

          console.log("user 11111111 : ");
        }

        window.location.href = '/'; 
      } else {
        //window.alert("giriş yapılırken hata")
      }
    } catch (error) {
      console.error('giriş yapılırken hata oluştu:', error);

      window.alert("giriş yapılırken hata")
    }
  };

  const loginViaGoogle = async () => {
    window.location.href = 'http://127.0.0.1:3000/auth/google';

    /*
    try {
      const response = await axios.get('http://127.0.0.1:3000/auth/google');
      
      console.log("DATA : ", response);

      window.localStorage.token = response.data.token;
      console.log("user 1 : ", response.data.user.name);

      if (response.data && response.data.user) {
        console.log("user 1 : ", response.data.user);

        window.localStorage.user = JSON.stringify(response.data.user);

        setUser(response.data.user);

        console.log("user 11111111 : ");
      }

      window.location.href = '/'; 
    } catch (error) {
      console.error('google ile giriş yapılırken hata oluştu:', error);

      //window.alert("google ile giriş yapılırken hata")
    }
    */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append('username', formData.username);
      formDataWithFile.append('password', formData.password);
      
      login(formDataWithFile);
    } catch (error) {
      console.error('giriş hatası:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="mb-3 text-center">Giriş Yap</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Kullanıcı Adı</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Kullanıcı Adınızı Girin"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Parola</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Parolanızı Girin"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">Giriş Yap</button>
          </form>

          <Link className="nav-link text-dark w-100 mt-3" href="/register" style={{textAlign: "center"}}>Register</Link>
          <br />
          <h3 className="nav-link text-dark w-100 mt-3" style={{textAlign: "center"}} onClick={loginViaGoogle}>Google ile kaydol</h3>

        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;

