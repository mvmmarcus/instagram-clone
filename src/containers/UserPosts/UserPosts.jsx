import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => (
  <div data-testid="user-posts" className="container">
    <section className={"user-posts"}>
      {posts.length > 0 ? (posts.map((post) => (
        <Post key={post.id} postInfo={post} />
      ))) : (
        <div className="no-posts">
          <span className="no-posts__content">Nã há publicações deste usuário</span>
          <span className="no-posts__emoji" role="img" aria-label="Emoji Triste" >&#128549;</span>
        </div>
      )}
    </section>
  </div>
);

export default UserPosts;
