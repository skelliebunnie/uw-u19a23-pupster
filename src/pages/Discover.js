import React, { Component } from 'react';
import API from "../utils/API";
import { FaThumbsUp, FaThumbsDown, FaSpinner } from 'react-icons/fa';

class Discover extends Component {
  state = {
    image_src: "",
    likeYou: 0,
    prevLikedYou: false,
    style: {backgroundImage: ""}
  };

  componentDidMount() {
    this.randomImage();
  }

  randomImage = () => {
    API.getRandomImage()
    .then(res => {
      // console.log(res);
      this.setState({ image_src: res.data.message })
      this.setState({ style: { backgroundImage: `url(${res.data.message})`, backgroundSize: 'cover', backgroundPosition: 'center center' } })
    })
    .catch(err => console.log(err));
  };

  registerLikes = () => {
    let check = Math.floor(Math.random() * 5) + 1;
    // console.log(check);
    if( check >= 4 ) {
      this.setState({ likeYou: this.state.likeYou + 1 });
      this.setState({ prevLikedYou: true });
    } else {
      this.setState({ prevLikedYou: false });
    }
  }

  onThumbsUp = () => {
    this.registerLikes();
    this.randomImage();
  }

  onThumbsDown = () => {
    this.randomImage();
  }

  render() {
    return (
      <div className="container">
        <article className="row justify-content-center">
          <section className="col col-4">
            <h1>Discover</h1>
              {this.state.image_src === "" ?
              <div className="card discover-dog" >
              <FaSpinner className="fa-5x fa-spin" style={{display: "block", margin: "0 auto", height: "400px"}} />
              </div>
              :
              <div className="card discover-dog" style={this.state.style}>
                {/* <img src={this.state.image_src} alt="random dog photo"/> */}
                <div>
                  <button className="btn btn-danger btn-thumb"><FaThumbsDown /></button>
                  <button className="btn btn-success btn-thumb" onClick={this.onThumbsUp}><FaThumbsUp /></button>
                </div>
              </div>

              }
            <h3>You've made friends with {this.state.likeYou} pups!</h3>
            {this.state.prevLikedYou &&
              <div className="alert alert-success">That pup liked you!</div>
            }
          </section>
        </article>
      </div>
    )
  }
}

export default Discover