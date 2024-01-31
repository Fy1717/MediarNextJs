import React, { useState } from "react";
import ShareArticleModal from "../customModal/shareArticleModal"; // ChatModal bileşeninizin yolunu doğru bir şekilde belirtin.
import useStore from "../../store/store";

const ArticleShareStarter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { user } = useStore.getState();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="post-starter"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          marginBottom: "5px",
        }}
      >
        {user.image.indexOf("http") === 0 ? (
          <img
            src={user.image}
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              borderRadius: "50%",
            }}
          />
        ) : (
          <img
            src={`data:image/jpeg;base64,${user.image}`}
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              borderRadius: "50%",
            }}
          />
        )}

        <input
          type="text"
          placeholder="Share an article.."
          onClick={openModal}
          style={{
            border: "none",
            flex: "1",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        />
      </div>

      <ShareArticleModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default ArticleShareStarter;
