// src/components/ArticleList.js
import React from 'react';

function TopicList() {
    const topics = ["Gündem", "Spor", "Dünya", "Trendler", "Akademik", "Yazılım"];

    return (
        <div>
            <div>
                <div className="list-group">
                    {
                        topics.map((topic, index) => (
                            <li key={index} className="list-group-item topic-item"> # {topic}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopicList;
