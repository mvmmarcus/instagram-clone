import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [story, setStory] = useState({});
  const [user, setUser] = useState({});

  const handleStorieClick = (userId) => {
    stories.map((storie) => {
      if (storie.userId === userId) {
        setStory(storie);
        const user = getUserHandler(storie.userId);
        setUser(user);
      }
      return storie;
    });
    setShowStory(true);
  };

  const handleClose = () => setShowStory(false);

  return (
    <React.Fragment>
      <section data-testid="stories" className="stories">
        <div className="container">
          {stories.map((storie) => {
            const user = getUserHandler(storie.userId);
            return (
              <button
                key={storie.id}
                onClick={() => handleStorieClick(storie.userId)}
                className="user__thumb user__thumb--hasNew"
              >
                <div className="user__thumb__wrapper">
                  {user ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <img
                      src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                      alt="empty"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>
      {showStory && <Story story={story} user={user} handleClose={handleClose} />}
    </React.Fragment>
  );
};

export default Stories;
