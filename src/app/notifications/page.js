// pages/notifications.js
"use client"

import React, { useState, useEffect } from 'react';
import NotificationList from '../../components/notificationList';
import NotificationModal from '../../components/notificationModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketClient from '../socketClient';


const NotificationsPage = () => {
  const currentUserIdStr = JSON.stringify(JSON.parse(window.localStorage.user)["id"]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketClient(currentUserIdStr);
    setSocket(newSocket);

    newSocket.on('new_follower', (data) => {
      console.log('New follower:', data);
      // Burada yeni takipçi olayını işleyebilirsiniz
    });
  }, []);

  const [notifications] = useState([
    {
        userName: 'Ali Ekber Güvercin',
        time: '13mn',
        text: 'Bir gönderiyi yeniden yayınladı: "Yıllık enflasyonun % 61\'lere ulaşması ile hak..."',
    },
    {
        userName: 'Hande Sınav',
        time: '15mn',
        text: 'Bugün sizlerle önemli bir gelişmeyi paylaşmak istiyorum."',
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setModalOpen(true);
  };

  return (
    <div className="container my-4">
      <NotificationList notifications={notifications} onSelectNotification={handleNotificationClick} />
      <NotificationModal
        notification={selectedNotification}
        show={isModalOpen}
        onHide={() => setModalOpen(false)}
      />
    </div>
  );
};

export default NotificationsPage;
