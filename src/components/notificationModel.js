// components/NotificationModal.js
import React from 'react';

const NotificationModal = ({ notification, show, onHide }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Notification</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onHide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {notification && (
              <>
                <p><strong>{notification.userName}</strong></p>
                <p>{notification.text}</p>
                <small className="text-muted">{notification.time}</small>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onHide}>Kapat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
