// components/NotificationList.js
import React from 'react';

const NotificationList = ({ notifications, onSelectNotification }) => {
  return (
    <div className="list-group">
        <br />

        {notifications.map((notification, index) => (
            <div className="list-group-item" key={index} onClick={() => onSelectNotification(notification)}>
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <div className="flex-grow-1">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{notification.userName}</h5>
                        <small className="text-muted">{notification.time}</small>
                        </div>
                        <p className="mb-1">{notification.text}</p>
                    </div>
                    <br />
                </div>
            </div>
        ))}

        <br />
    </div>
  );
};

export default NotificationList;
