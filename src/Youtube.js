import React, { Component } from 'react'

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID = 'UCXgGY0wkg0zynnHvSEVmE3A'
const result = 10;

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelID=UCXgGY0wkg0zynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`

 export default class extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      resultyt: []
    };
    // this.clicked = this.clicked.bind(this)
  }
  clicked(){
    fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
        // console.log(responseJson)
          const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
          this.setState({resultyt});
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
  render(){
    // console.log(finalURL);
    console.log(this.state.resultyt)
  
    return(
      <div>
        <button onClick={(i)=>this.clicked(i)}>Get youtube videos</button>
        {
          this.state.resultyt.map((link, i) => {
            console.log(link);
            var frame = <div key={i} className="youtube"><iframe title="example" width="560" height="315" src={link} frameBorder="0" allowFullScreen /></div>
            return frame
          })
        }
        {this.frame}
      </div>
    )
  }
}