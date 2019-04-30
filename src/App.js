import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import Card from './components/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class App extends Component {
  state = {
    pictures: [
      {
          src: './images/bear.jpg',
          isClicked: false,
          id: 'bear'
      },
      {
        src: './images/brienne.jpeg',
        isClicked: false,
        id: 'brienne'
      },
      {
        src: './images/hound.jpeg',
        isClicked: false,
        id: 'hound'
      },
      {
        src: './images/jaime.jpg',
        isClicked: false,
        id: 'jaime'
      },
      {
        src: './images/johnsnow.jpg',
        isClicked: false,
        id: 'john'
      },
      {
        src: './images/knightking.jpg',
        isClicked: false,
        id: 'night'
      },
      {
        src: './images/mysande.jpg',
        isClicked: false,
        id: 'mysande'
      },
      {
        src: './images/ned.jpg',
        isClicked: false,
        id: 'ned'
      },
      {
        src: './images/olenna.jpg',
        isClicked: false,
        id: 'olenna'
      },
      {
        src: './images/sansa.jpg',
        isClicked: false,
        id: 'sansa'
      },
      {
        src: './images/Throne-Game-Dragon-200x200.jpg',
        isClicked: false,
        id: 'danny'
      },
      {
        src: './images/tyrion.jpeg',
        isClicked: false,
        id: 'tyrion'
      },
      {
        src: './images/varyes.jpg',
        isClicked: false,
        id: 'varyes'
      },
      {
        src: './images/catelyn.jpeg',
        isClicked: false,
        id: 'catelyn'
      },
      {
        src: './images/sam.jpeg',
        isClicked: false,
        id: 'sam'
      },
      {
        src: './images/petyr.jpeg',
        isClicked: false,
        id: 'petyr'
      },
  ],
    score: 0,
    highScore: 0,
    mistakeMade: false,
    show: true
}
   componentDidMount () {
    this.shufflePictures();
  }
  handleClick = (id, index) => {
    console.log("clicked", id);
    if(this.state.pictures[index].isClicked === false ){
        this.setState(prevState => ({
          score: prevState.score += 1,
          mistakeMade: false,
          isClicked: prevState.pictures[index].isClicked += 1
        }));
        this.shufflePictures();
    } else {
      if(this.state.score > this.state.highScore) {
        this.setState(prevState => ({
          score: 0,
          highScore: this.state.score,
          mistakeMade: true,
          pictures: prevState.pictures.map(picture => picture.isClicked = false)
        }));
      } else {
        this.setState(prevState => ({
          score: 0,
          pictures: prevState.pictures.map(picture => picture.isClicked = false),
          mistakeMade: true
        }));
      } 
          this.shufflePictures();
        }
      }
    
  shufflePictures = () => {
    const newPictures = this.state.pictures.map(picture => {
      return picture;
    })
    newPictures.sort(()=> Math.random() - 0.5)
    console.log("Finshed Shuffle",newPictures)
    this.setState({
      pictures: newPictures
    });
  }
  handleClose = () =>  {
    this.setState({ 
      show: false 
    });
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  render(){
    console.log(this.state.pictures);
    console.log(this.state.score)
    return (
    <div>
      <NavBar 
        score={this.state.score} 
        mistakeMade={this.state.mistakeMade} 
        highScore={this.state.highScore}
      />
      <Container fluid={true}>
        <Row>
          <Col size={"md-12"}>
            {this.state.pictures.map((picture, index) => {
              return (
               <Card
               shake= {this.state.mistakeMade} 
               key={index}
               index={index} 
               src={picture.src}
               id={picture.id}
               handleClick = {this.handleClick}
               />
              );
            })}
          </Col> 
        </Row>
        <Row>
          <Col size={"md-12"}>
            <Button variant="primary" onClick={this.handleShow}>
            View Instructions
          </Button>
          </Col>
        </Row>
      </Container>
      <Modal 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.state.show} onHide={this.handleClose}
      >
          <Modal.Header closeButton>
            <Modal.Title>Welcome to GOT Match</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container fluid={true}>
          <img src="https://media.giphy.com/media/1S9ci1Gu84b96/giphy.gif" alt="got-gif" style={{maxHeight: "100%", maxWidth: "100%"}}/>
          To win, click each character without any repeats! Winter is coming...
          </Container>
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Dismiss
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}

}

export default App;
