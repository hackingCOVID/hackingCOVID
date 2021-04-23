import React from 'react';
import geojson from './geojson.json';
import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import * as d3 from 'd3'
//const fetch = require('node-fetch')
  
export default class Map extends React.Component {
  constructor(){
    super()
    this.state = {
      stateObj : {},
      hover: false
    } 
  }

  render() {
    console.log('staterender', this.state)
    const width = 2600;
    const height = width * 0.50;
    const projection = geoMercator().fitExtent(
      [[0, 0], [width * 0.9, height * 0.6]],
      geojson
    );
    const path = geoPath().projection(projection);

    // const tooltip = d3
    //     .select('body')
    //     .append('div')
    //     .attr('class', 'tooltip')


    let gettingAccessToThisKeyword = this; 

    let changeOpacity
      if(this.state.hover){
        changeOpacity = {opacity: 1}
      }else{
        changeOpacity = {opacity: 0}
      }
    
  
    return (
      <div className='map-div'>
      <div style={changeOpacity} className='test'>
      <h3>statename:{this.state.stateObj.state}</h3>
      <h3>total:{this.state.stateObj.total}</h3>
      <h3>hospitalized:{this.state.stateObj.hospitalized}</h3>


      
      </div>
      <svg viewBox="275 370 500 400">
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
                    // tooltip
                    // .style("opacity", 1)
                    fetch(`/api/data/states/${d.properties.abbreviation}`)
                       .then(function(response){
                         return response.json()
                       })
                       .then(function(data){
                        gettingAccessToThisKeyword.setState({stateObj : data, hover: !gettingAccessToThisKeyword.state.hover})
                       })
                
                }}
                
                onMouseOut={(e) => {
                  this.setState({hover: !this.state.hover})
                  select(e.target)
                    .attr('fill', '#eee')
                    // tooltip
                    // .style("opacity", 0);
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


  