import React from "react";
import { Pagination } from "react-bootstrap";
import NewsArticle from "./NewsArticle";
import Practice from "./Practice";


export class Home extends React.Component {
    componentDidMount(){
        // this.props.() 
    }

    render() {
        return (
         <div>
           <h1> Homepage! </h1>
           {/* // mapping over news array being passed in  */}
           {/* {this.props.home.map((____) => {
             return ("no frontend stuff yet")
           })} */}
           <Practice/>
          
          
         </div>
        )
   }

}  

const mapState = (state) => { 
  return {
    // home: state.home, 

  };
};

const mapDispatch = dispatch => ({  
  // getHome: () => dispatch(fetchHomeThunk()) 
});

// ned thnk to mmake api request 
export default Home;
// export default connect(mapState, mapDispatch)(Home);