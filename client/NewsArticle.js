
//LEFT OFF ON BABEL ERROR regenrator runtime _ NEED TO STILL TEST REDUX 

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";
import {connect} from "react-redux"
import {fetchNews} from "./redux/store"
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

class NewsArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      newArticles: [],
    };
  }
  componentDidMount(){
    this.props.getNews(); 
  }

  render() {
    console.log("STATE",this.state)
    return (
      <div className="container">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <div className="pagination">
          <Pagination>{items}</Pagination>
          <br />
        </div>
      </div>
    );
  }
}

const mapState = (state)=>{
return {
    newArticles: state.news 
}

}
const mapDispatch = (dispatch) =>{
    return {
      getNews: () => dispatch(fetchNews()) 

    }
}

export default connect(mapState, mapDispatch)(NewsArticle);
