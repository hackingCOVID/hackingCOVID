import React from "react";
import { Pagination } from "react-bootstrap";
import StateMenu from "./StateMenu";
import NewsArticle from "./NewsArticle";
import Practice from "./Practice";

export class Home extends React.Component {
  componentDidMount() {
    // this.props.()
  }

  render() {
    return (
      <div>
        <h1 className="text-primary mb-3"> US NEWS ARTICLES </h1>
        {/* <StateMenu /> */}
        <Practice />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    // home: state.home,
  };
};

const mapDispatch = (dispatch) => ({
  // getHome: () => dispatch(fetchHomeThunk())
});

// ned thnk to mmake api request
export default Home;
// export default connect(mapState, mapDispatch)(Home);
