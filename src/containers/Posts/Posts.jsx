import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div data-testid="posts" className="container">
      <section className="feed">
        {posts &&
          posts.map((post) => {
            const user = getUserHandler(post.userId);
            return <Post key={post.id} userInfo={user} postInfo={post} />;
          })}
      </section>
    </div>
  );
};

export default Posts;
