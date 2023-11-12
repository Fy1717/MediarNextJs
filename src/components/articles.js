// src/components/ArticleList.js
import React from 'react';

function ArticleList({ articles }) {
  return (
    <div>
      {articles.map(article => (
        <div key={article.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{article.authorName}</h5>
            <hr />
            <p className="card-text">{article.content}</p>
            <p className="card-text">
              <small className="text-muted">Puan: {article.point}</small>
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <ul className="list-group list-group-flush">
                {article.likedUsers.length > 1 ? (
                  `${article.likedUsers[0].name} ve ${article.point} kişi daha beğendi`
                ) : article.likedUsers.length === 1 ? (
                  `${article.likedUsers[0].name} beğendi`
                ) : (
                  ""
                )}
              </ul>
              <small>{new Date(article.createdAt).toLocaleDateString()}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
