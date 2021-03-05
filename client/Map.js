import React from 'react';
import geojson from './geojson.json';
import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
  
export default class Map extends React.Component {
  render() {
    const width = 2600;
    const height = width * 0.50;
    const projection = geoMercator().fitExtent(
      [[0, 0], [width * 0.9, height * 0.6]],
      geojson
    );
    const path = geoPath().projection(projection);


    return (
      <div className='map-div'>
      <svg viewBox="275 370 500 1000">
       
        <g className="geojson-layer">
          {
            geojson.features.map(d => (
              <path
                key={d.properties.Name}
                d={path(d)}
                fill="#eee"
                stroke="#0e1724"
                strokeWidth="1"
                strokeOpacity="0.5"
                onMouseEnter={(e) => {
                  select(e.target)
                    .attr('fill', '#000')
                    // .append('circle')
                    //   .attr("id", "circleBasicTooltip")
                    //   .attr("cx", 150)
                    //   .attr("cy", 200)
                    //   .attr("r", 40)
                    //   .attr("fill", "#69b3a2")
                    // .append("div")
                    //   .style("position", "absolute")
                    //   .style("visibility", "hidden")
                    //   .text("I'm a circle!");
                      
                    

                }}
                onMouseOut={(e) => {
                  select(e.target)
                    .attr('fill', '#eee')
                    // .style('visibility', 'hidden')
                }}
              />
            ))
          }
        </g>
      </svg>
      </div>
    )
  }
}





// export class Map extends React.Component {

//     componentDidMount(){
//         // this.props.getMap() 
//     }
//     render() {
//         return (
//          <div>
         
   
//          </div>
//         )
//    }
// } 

// const mapState = (state) => { 
//     return {
//       // map: state.map, 
  
//     };
//   };
  
//   const mapDispatch = dispatch => ({  
//     // getMap: () => dispatch(fetchMapThunk()) 
//   });
  
  
//   export default connect(mapState, mapDispatch)(Map);
  