// addUser.js (Register form componenti)
"use client"

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStore from '../../store/store';


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

        window.localStorage.username = response.data.user["username"];

        console.log("user 1 : ", response.data.user);

        if (response.data && response.data.user) {
          setUser(response.data.user);
        }

        //window.location.href = '/'; 
      } else {
        //window.alert("giriş yapılırken hata")
      }
    } catch (error) {
      console.error('giriş yapılırken hata oluştu:', error);

      window.alert("giriş yapılırken hata")
    }
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
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;

