
export class Home extends React.Component {
    componentDidMount(){
        // this.props.() 
    }

    render() {
        return (
         <div>
           <h1> </h1>
           {/* // mapping over news array being passed in  */}
           {/* {this.props.home.map((____) => {
             return ("no frontend stuff yet")
           })} */}
   
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


export default connect(mapState, mapDispatch)(Home);
