"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from '../components/articles';
import TopicList from '../components/topics';
import Profile from '../components/profile';

function MainPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (window.localStorage.token == undefined) {
        window.location.href = '/login';
      }

      try {
        const response = await axios.get('http://127.0.0.1:3000/articles/', {
          headers: {
            'Authorization': 'Bearer ' + window.localStorage.token
          }
        });
        
        //console.log("DATA : ", response);
        setArticles(response.data);
      } catch (error) {
        //console.error('Article listesi alınırken hata oluştu:', error);

        window.location.href = '/login';
      }
    };

    fetchData();
  }, []);

  return (
      <div className="container">
        <br />
        <br />

        <div className="row"> 
          <div className="col-md-2 card">
            <br/>
            <h5>Topics</h5>
            <hr />
            <TopicList />
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-6">
              {
                <ArticleList articles={articles}/>
              }
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-2 card">
            <br/>
            <h5>Profile</h5>
            <hr />
            <Profile />
          </div>
        </div>

        <br />
        <br />
      </div>      
  );
  
}

export default MainPage;

