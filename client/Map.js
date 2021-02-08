export class Map extends React.Component {
    componentDidMount(){
        // this.props.getMap() 
    }
    render() {
        return (
         <div>
         
   
         </div>
        )
   }
} 

const mapState = (state) => { 
    return {
      // map: state.map, 
  
    };
  };
  
  const mapDispatch = dispatch => ({  
    // getMap: () => dispatch(fetchMapThunk()) 
  });
  
  
  export default connect(mapState, mapDispatch)(Map);
  