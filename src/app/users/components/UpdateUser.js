// addUser.js (Register form componenti)
"use client"

import React, { useState, useEffect } from 'react';

const UpdateUser = ({id}) => {

  console.log("ID : " + id);
  const [user, setUser] = useState([]); 
  const [lastUsername, setLastUsername] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [lastPassword, setLastPassword] = useState([]);
  const [lastBirthday, setLastBirthday] = useState([]);
  const [lastImage, setLastImage] = useState([]);
  const [lastEmail, setLastEmail] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8083/api/users/' + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error('API isteği başarısız oldu');
        }
        return response.json();
      })
      .then((data) => {
        //console.log("data : " + data["data"]);
        setUser(data["data"]);
      })
      .catch((error) => {
        console.error('API isteği başarısız oldu:', error);
      });
  }, {});
    

  const [formData, setFormData] = useState({
    lastUsername,
    lastBirthday,
    lastEmail,
    lastImage,
    lastName,
    lastPassword,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataWithFile = new FormData();

      if (formData.lastUsername != "" && formData.lastUsername != user.username) {
        formDataWithFile.append('username', formData.lastUsername);
      }

      if (formData.lastPassword != "" && formData.lastPassword != user.password) {
        formDataWithFile.append('password', formData.lastPassword);
      }

      if (formData.lastName != "" && formData.lastName != user.name) {
        formDataWithFile.append('name', formData.lastName);
      }

      if (formData.lastEmail != "" && formData.lastEmail != user.email) {
        formDataWithFile.append('email', formData.lastEmail);
      }

      if (formData.lastImage != "" && formData.lastImage != user.image) {
        formDataWithFile.append('image', formData.lastImage);
      }

      if (formData.lastBirthday != "" && formData.lastBirthday != user.birthday) {
        formDataWithFile.append('birthday', formData.lastBirthday);
      }
      
      const responseFromApi = await fetch('http://localhost:8083/api/users/update/' + id, {
        method: 'POST',
        body: formDataWithFile
      }).then(response => {
        if (response.ok) {
          console.error('Güncelleme BAŞARILI oldu');
          // Kayıt başarılıysa, başka bir sayfaya yönlendirin
          window.location.href = '/users'; // Yönlendirilecek sayfayı belirleyin
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
      <h2>Güncelle</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={user.username}
          onChange={handleInputChange}
        />

        <br />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={user.name}
          onChange={handleInputChange}
        />

        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="E-Posta"
          value={user.email}
          onChange={handleInputChange}
        />

        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Parola"
          value={user.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="birthday"
          placeholder="Doğum Tarihi"
          value={user.birthday}
          onChange={handleInputChange}
        />
      
        <br />
        <br />
        <button type="submit">Güncelle</button>
      </form>
    </div>
  );
};

export default UpdateUser;

