"use client";

import "../../styles/global.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useHydrateStore } from "../../store/store";
import useStore from "../../store/store";
import socketClient from "../../app/socketClient";
import LogoutModal from "../customModal/logoutModal";

const Navbar = () => {
  const hasNotifications = useStore((state) => state.notifications.length > 0);
  const resetNotifications = useStore((state) => state.resetNotifications);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [logoutDropdownOpen, setLogoutDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleLogoutDropdown = () => {
    setLogoutDropdownOpen(!logoutDropdownOpen);
  };

  const handleNotificationsClick = () => {
    console.log("XXXXXXXXX");
    resetNotifications();
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  useHydrateStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = ((window || {}).localStorage || {}).getItem("token") || "";
    const user = ((window || {}).localStorage || {}).getItem("user") || "";
    const pathname = ((window || {}).location || {}).pathname || "";
    setIsClient(true);

    setIsAuthenticated(
      (token !== null || user !== null) && pathname !== "/login"
    );
  }, []);

  const addNotification = useStore((state) => state.addNotification);
  useEffect(() => {
    const currentUserIdStr = JSON.stringify(
      (JSON.parse(((window || {}).localStorage || {}).user || "{}") || {}).id ||
        0
    );
    const newSocket = socketClient(currentUserIdStr);

    const handleNewNotification = (notification) => {
      addNotification(notification);
    };

    newSocket.on("new_notification", handleNewNotification);

    return () => newSocket.off("new_notification", handleNewNotification);
  }, [addNotification]);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link
            className="navbar-brand text-light"
            href="/"
            style={{ marginLeft: "20%" }}
          >
            MEDIAR
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto" style={{ width: "100%" }}>
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search.."
                    aria-label="Search"
                  />
                </form>
              </li>

              <li className="nav-item active">
                <Link
                  className="nav-link text-light"
                  href="/"
                  style={{ marginLeft: "100px" }}
                >
                  <i className="fas fa-home"></i> Main Page
                </Link>
              </li>

              <li className="nav-item" onClick={handleNotificationsClick}>
                <Link className="nav-link text-light" href="/notifications">
                  <i className="fas fa-bell"></i> Notifications
                  {hasNotifications && (
                    <span className="notification-dot"></span>
                  )}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" href="/messages">
                  <i className="fas fa-envelope" style={{ color: 'white' }}></i> Messages
                </Link>
              </li>

              <li className="nav-item">
                {isClient ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      marginLeft: "100%",
                    }}
                  >
                    <li
                      className={`nav-item dropdown ${
                        logoutDropdownOpen ? "show" : ""
                      }`}
                    >
                      <a
                        className="nav-link dropdown-toggle text-light"
                        id="navbarDropdownProfile"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={logoutDropdownOpen}
                        onClick={toggleLogoutDropdown}
                      >
                        {JSON.parse(window.localStorage.getItem("user") || "{}")
                          .username || ""}
                      </a>
                      <div
                        className={`dropdown-menu ${
                          logoutDropdownOpen ? "show" : ""
                        }`}
                        aria-labelledby="navbarDropdownProfile"
                      >
                        <Link href="/profile" legacyBehavior>
                          <a
                            className="dropdown-item"
                            id="navbarDropdownProfile"
                            role="button"
                            onClick={toggleLogoutDropdown}
                          >
                            Profile
                          </a>
                        </Link>
                        <Link href="/favorites" legacyBehavior>
                          <a
                            className="dropdown-item"
                            id="navbarDropdownProfile"
                            role="button"
                            onClick={toggleLogoutDropdown}
                          >
                            Favorites
                          </a>
                        </Link>
                        <a
                          className="dropdown-item"
                          onClick={handleLogoutClick}
                        >
                          Logout
                        </a>

                        <LogoutModal
                          isOpen={showLogoutModal}
                          onConfirm={confirmLogout}
                          onCancel={cancelLogout}
                        />
                      </div>
                    </li>
                  </div>
                ) : (
                  <div>
                    <a className="dropdown-item" onClick={handleLogoutClick}>
                      Login
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
