import React from 'react'
// import { Link } from 'react-router-dom';

 const Posts = ({posts,loading, isCountry}) => {
    if(loading){
        return <h1>Loading...</h1>;
    }
    if(isCountry){
  return (
      <ul className="list-group mb-4">
          {posts.map(post=>(
              <li key={post.id} className="list-group-item">
                  <a href={post.web_url} target="_blank">
                   {post.headline.main}
                  </a>
                 
              </li>
          ))}

      </ul>
   )
    } else{
 return(
    <ul className="list-group mb-4">
    {posts.map(post=>(
        <li key={post.path} className="list-group-item">
            <a href={post.webUrl} target="_blank">
             {post.title}
            </a> 
        </li>
    ))}

</ul>



 )
    }
    
};
export default Posts; 