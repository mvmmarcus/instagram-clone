import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [loadingUsersPosts, setLoadingUsersPosts] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
        );
        const data = await response.json();
        setUsersList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const getUserHandler = (userId) =>
    usersList.find((user) => user.id === userId);

  useEffect(() => {
    usersList.map((user) => {
      const fetchUserPosts = async () => {
        try {
          const response = await fetch(
            `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts/`
          );
          const data = await response.json();
          data.map((item) => {
            setUsersPosts((posts) => [...posts, item]);
            return item;
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoadingUsersPosts(false);
        }
      };
      fetchUserPosts();
      return user;
    });
  }, [usersList]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(
          `https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories/`
        );
        const data = await response.json();
        setUserStories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStories();
  }, []);

  return (
    <div data-testid="feed-route">
      {loadingUsersPosts ? (
        <Loading />
      ) : (
        <>
          <Stories getUserHandler={getUserHandler} stories={userStories} />
          <Posts getUserHandler={getUserHandler} posts={usersPosts} />
        </>
      )}
    </div>
  );
};

export default FeedRoute;
