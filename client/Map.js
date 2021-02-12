import React from 'react';
import geojson from './geojson.json';
import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3-selection';


export default class Map extends React.Component {
  render() {
    const width = 500;
    const height = width * 0.5;
    const projection = geoMercator().fitExtent(
      [[0, 0], [width * 0.9, height * 0.9]],
      geojson
    );
    const path = geoPath().projection(projection);

    return (
      <svg width={width} height={height}>
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
                }}
                onMouseOut={(e) => {
                  select(e.target)
                    .attr('fill', '#eee')
                }}
              />
            ))
          }
        </g>
      </svg>
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
  