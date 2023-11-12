// addUser.js (Register form componenti)
"use client"

import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    image: '',
    birthday: '',
    email: '',
    name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, imageFile: selectedFile });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append('username', formData.username);
      formDataWithFile.append('password', formData.password);
      formDataWithFile.append('email', formData.email);
      formDataWithFile.append('name', formData.name);

      // formDataWithFile'ı kullanarak API'ye POST isteği gönderin
      const responseFromApi = await fetch('http://127.0.0.1:3000/auth/register', {
        method: 'POST',
        body: formDataWithFile
      }).then(response => {
        if (response.ok) {
          console.error('Kayıt BAŞARILI oldu');
          // Kayıt başarılıysa, başka bir sayfaya yönlendirin
          //window.location.href = '/users'; // Yönlendirilecek sayfayı belirleyin
        } else {
          
          console.error('Kayıt BAŞARISIZ oldu : ' + response);
        }
      })
      .then(result => console.log("result : ", result))
      .catch(error => console.log('error : ', error));;    
        
      console.log("response : ", response, " - response ok : ", response.body);
      
    } catch (error) {
      console.error('Kayıt hatası:', error);
    }
  };

  return (
    <div>
      <h2>Kayıt Ol</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
      
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="E-Posta"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default Register;

