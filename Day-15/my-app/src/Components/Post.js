import React from 'react';

const Post = (props) => {
  const { category } = props.match.params;
  return (
    <div>
      <p>This is a Post Page - {category} </p>
    </div>
  );
};

export default Post;