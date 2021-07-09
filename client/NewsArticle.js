// //LEFT OFF ON BABEL ERROR regenrator runtime _ NEED TO STILL TEST REDUX
// // GO OVER WHAT THE STORE EVEN DOES
// import React from "react";
// // import PaginationItem from "react-bootstrap/lib/PaginationItem";
// // import PaginationItem from "react-bootstrap/lib/PaginationItem";
// import ListGroup from "react-bootstrap/ListGroup";
// import Pagination from "react-bootstrap/Pagination";
// import { connect } from "react-redux";
// import { fetchNews } from "./redux/store";

// let active = 1; // maybe this can be our onclick return
// let items = [];


 
// console.log("items", items)

// class NewsArticle extends React.Component {
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     // console.log("CDM, 28")
//     this.props.getNews();
//   }

//    clickHandler(event){ // we want active to be our event 
//     console.log("clicked event", event)
//      console.log("classNmae", document.getElementsByTagName("li"))
//     // //  document.getElementById("1").setAttribute('active', true)
//     //  console.log("queryselector", document.querySelector("#1")); 

//     //  active = Number("innertext", document.getElementById("1").innerText)
//    }

//   // problems:
//   render() {
//     // console.log("NEWSSSS", this.props)
//     // need to find a way to display articles dynamically given the array length of 10, we also want to divide the number of total articles by number of artciles we want per page
//     return (
//       <div className="container">
//         <ListGroup>
//           <ListGroup.Item>
//             {this.props.newsArticles
//               ? this.props.newsArticles.docs[0].news_desk
//               : console.log("...Loading...")}
//           </ListGroup.Item>
//           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//           <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//           <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//         </ListGroup>
//         <div className="pagination">
//           <Pagination>
//             <Pagination.Item id="1" onClick={this.clickHandler}>1</Pagination.Item>
//             <Pagination.Item id="2" onClick={this.clickHandler}>2</Pagination.Item>
//             <Pagination.Item id="3" onClick={this.clickHandler}>3</Pagination.Item>
//           </Pagination>
//           <br />
//         </div>
//       </div>
//     );
//   }
// }

// const mapState = (state) => {
//   // this is the entire redux store state
//   // console.log("state", state.store.newsArticles.response)
//   return {
//     newsArticles: state.store.newsArticles.response, // returns a plain object that is the data the component needs , this also become a prop for component
//   };
// };
// const mapDispatch = (dispatch) => {
//   // we enter this
//   // console.log("mapdispt, 60")

//   return {
//     getNews: () => dispatch(fetchNews()), // this is setting data to the prop from our fetch news call
//   };
// };

// export default connect(mapState, mapDispatch)(NewsArticle);
