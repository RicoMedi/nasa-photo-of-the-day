import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";


function App() {
  const [data, setData] = useState();
  useEffect(() =>{
 axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.error(err))
  }, [])
  
  return (
    <section>
      <div className="App">
        {data && <NasaPhoto photo={data}/> }
      </div>
    </section>
  );
}

export default App;


/** 
 * \
 * date: "2023-07-17"
explanation: "What's happening around this star? No one is sure. CW Leonis is the closest carbon star, a star that appears orange because of atmospheric carbon dispersed from interior nuclear fusion. But CW Leonis also appears engulfed in a gaseous carbon-rich nebula. What causes the nebula's complexity is unknown, but its geometry of shells and arcs are surely intriguing. The featured image by the Hubble Space Telescope details this complexity. The low surface gravity of carbon stars enhances their ability to expel carbon and carbon compounds into space. Some of this carbon ends up forming dark dust that is commonly seen in the nebulas of young star-forming regions and the disks of galaxies.  Humans and all Earth-based life are carbon-based, and at least some of our carbon was likely once circulating in the atmospheres of near-death stars like carbon stars."
hdurl:"https://apod.nasa.gov/apod/image/2307/CwLeo_Hubble_960.jpg"
title: "Shells and Arcs around Star CW Leonis"
*/
