import React from "react";
import axios from "axios";
import Posts from './Posts'
import Pagination from "./Pagination";
// import PaginationItem from "react-bootstrap/lib/PaginationItem";
// import PaginationItem from "react-bootstrap/lib/PaginationItem";
// import ListGroup from "react-bootstrap/ListGroup";
// import Pagination from "react-bootstrap/Pagination";
// import { connect } from "react-redux";


class Practice extends React.Component{
        constructor(){
            super()
        this.state = {
            posts: [], 
            currentPage: 1,
            postsPerPage:5,
            loading: false, 
        }
        }

    componentDidMount(){ // use effect runs when the Comppnent mounts (if using hooks)
      const fetchPosts = async() =>{
          this.setState({loading:true})
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({posts: res.data})
        this.setState({loading:false})

      }
      fetchPosts()

    }

render(){
       
 const indexOfLastPost = this.state.currentPage * this.state.postsPerPage; 
 const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage; 
 const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost)

 const paginate = pageNumber => this.setState({currentPage:pageNumber})
return(
<div className="containter mt-5"> 
<h1 className="text-primary mb-3"> News Articles </h1> 
<Posts posts={currentPosts} loading={this.state.loading}/>
<Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.posts.length} paginate={paginate}/>
</div>
)}
}

export default Practice; 