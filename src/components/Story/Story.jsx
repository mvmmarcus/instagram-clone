import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";

import "./Story.scss";

const Story = ({ story, user, handleClose }) => {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(() => {
    if (metadata?.duration !== null && currentTime !== null) {
      const elapsedTime = (currentTime / metadata.duration) * 100;

      return `${elapsedTime.toFixed(2)}%`;
    }

    return "0%";
  }, [metadata, currentTime]);

  return (
    <section data-testid="story" className="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link className="user__thumb" to={`/users/${user.name}`}>
              <img src={user.avatar} alt={user.name} />
            </Link>
            <Link className="user__name" to={`/users/${user.name}`}>
              {user.name}
            </Link>
          </div>
          <button onClick={() => handleClose()} className="story__close">
            <i className="fas fa-times"></i>
          </button>
        </header>
        <div className="story__progress">
          <div
            style={{ width: updateProgress() }}
            className="story__progress__elapsed"
          ></div>
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          <video
            autoPlay
            className="video-player"
            loop
            playsInline
            onTimeUpdate={({ target }) => setCurrentTime(target.currentTime)}
            onLoadedMetadata={({ target }) => {
              setMetadata({
                duration: target.duration,
              });
            }}
            src={story.videoUrl}
          ></video>
        </section>
      </div>
    </section>
  );
};

export default Story;
