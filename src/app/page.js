"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from '../components/article/articles';
import TopicList from '../components/topic/topics';
import Profile from '../components/user/profile';
import ArticleShareStarter from '../components/article/shareArticle';


function MainPage() {
  const [articles, setArticles] = useState([]);
  
  const fetchData = async () => {
    if (((window || {}).localStorage || {}).token == undefined) {
      window.location.href = '/login';
    }

    try {
      const response = await axios.get('http://127.0.0.1:3000/articles/', {
        headers: {
          'Authorization': 'Bearer ' + ((window || {}).localStorage || {}).token || ""
        }
      });
      
      //console.log("DATA : ", response);
      setArticles(response.data);
    } catch (error) {
      //console.error('Article listesi alınırken hata oluştu:', error);

      window.location.href = '/login';
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <ArticleShareStarter />

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
    </div>     
  );
  
}

export default MainPage;

