import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import Card from './components/Card';


class App extends Component {
  state = {
    pictures: [
        {
            src: './images/bear.jpg',
            isClicked: 'false',
            id: 'bear'
        },
        {
          src: './images/brienne.jpeg',
          isClicked: 'false',
          id: 'brienne'
        },
        {
          src: './images/hound.jpeg',
          isClicked: 'false',
          id: 'hound'
        },
        {
          src: './images/jaime.jpg',
          isClicked: 'false',
          id: 'jaime'
        },
        {
          src: './images/johnsnow.jpg',
          isClicked: 'false',
          id: 'john'
        },
        {
          src: './images/knightking.jpg',
          isClicked: 'false',
          id: 'night'
        },
        {
          src: './images/mysande.jpg',
          isClicked: 'false',
          id: 'mysande'
        },
        {
          src: './images/ned.jpg',
          isClicked: 'false',
          id: 'ned'
        },
        {
          src: './images/olenna.jpg',
          isClicked: 'false',
          id: 'olenna'
        },
        {
          src: './images/sansa.jpg',
          isClicked: 'false',
          id: 'sansa'
        },
        {
          src: './images/themountain.jpeg',
          isClicked: 'false',
          id: 'mountain'
        },
        {
          src: './images/Throne-Game-Dragon-200x200.jpg',
          isClicked: 'false',
          id: 'danny'
        },
        {
          src: './images/tyrion.jpeg',
          isClicked: 'false',
          id: 'tyrion'
        },
        {
          src: './images/varyes.jpg',
          isClicked: 'false',
          id: 'varyes'
        },
        {
          src: './images/catelyn.jpeg',
          isClicked: 'false',
          id: 'catelyn'
        },
        {
          src: './images/sam.jpeg',
          isClicked: 'false',
          id: 'sam'
        },
        {
          src: './images/petyr.jpeg',
          isClicked: 'false',
          id: 'petyr'
        },
        {
          src: './images/Throne-Game-Dragon-200x200.jpg',
          isClicked: 'false',
          id: 'olenna'
        }
        
    
    ],
    score: 0,
    highScore: 0
}
  handleClick = () => {
    console.log("clicked")
  }
  render(){
    console.log(this.state.pictures);
    return (
    <div>
      <NavBar />
      <Jumbotron />
      <Container>
        <Row>
          <Col size={"lg-12"}>
            {this.state.pictures.map((picture, index) => {
              return (
               <Card 
               index={index} 
               src={picture.src}
               id={picture.id}
               handleClick = {this.handleClick}
               />
              );
            })}
          </Col> 
        </Row>
      </Container>
      </div>
    )}

}

export default App;
