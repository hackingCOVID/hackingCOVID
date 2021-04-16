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

  toggleHover(){
    console.log('toggle has been hit')
    this.setState({hover: !this.state.hover})
  }

  

 
  render() {
    console.log('THIS', this)
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


    let gettingAccessToThisKeyword = this

    let changeOpacity
      if(this.state.hover){
        changeOpacity = {opacity: 1}
      }else{
        changeOpacity = {opacity: 0}
      }
    
  

    return (
      <div className='map-div'>
      <div style={changeOpacity} className='test'></div>
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
                  this.toggleHover()
                  select(e.target)
                    .attr('fill', '#000')
                    // tooltip
                    // .style("opacity", 1)
                    fetch(`/api/data/states/${d.properties.abbreviation}`)
                       .then(function(response){
                         return response.json()
                       })
                       .then(function(data){
                        console.log('DATA', data)
                        gettingAccessToThisKeyword.setState({stateObj : data})
                       })
                }}
                
                onMouseOut={(e) => {
                  this.toggleHover()
                  //this.setState({stateObj : {}})
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


  