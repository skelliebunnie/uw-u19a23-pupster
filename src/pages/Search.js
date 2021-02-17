import React, { Component } from 'react';
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "hound",
    results: [],
    breeds: []
  }

  componentDidMount() {
    this.getBreedList();
  }

  getBreedList = () => {
    API.getBreeds()
    .then(res => {
      // console.log(Object.keys(res.data.message));
      this.setState({ breeds: Object.keys(res.data.message) })
    })
    .catch(err => console.error(err));
  }

  getImage = () => {
    API.searchDogs(this.state.search)
    .then(res => {
      // console.log(res);

      if(typeof res.data.message === "string") {
        this.setState({ results: [res.data.message] });
      } else {
        this.setState({ results: res.data.message });
      }

      // console.log(this.state.results);
    })
    .catch(err => console.error(err));
  }

  submitForm = event => {
    event.preventDefault();
    this.getImage();
  }

  onClick = event => {
    event.preventDefault();
    this.getImage();
  }

  render() {
    return (
      <>
      <h3>Search by Breed!</h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <form>
              <div className="form-group">
                <input list="breeds" name="searchBreeds" className="form-control" data-target="breeds" onChange={(e) => this.setState({search: e.target.value})} />
                <datalist id="breeds" style={{textAlign: "left"}}>
                  {this.state.breeds.map(breed => <option key={this.state.breeds.indexOf(breed)} value={breed} /> )}
                </datalist>
              </div>
              <input type="submit" className="btn btn-success" value="Search" onClick={this.onClick}/>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col mt-3">
            <div className="card-columns">
              {this.state.results.length > 0 &&
                this.state.results.map(image => <div className="card" style={{maxWidth: "300px"}}><img key={this.state.results.indexOf(image)} src={image} alt="random" className="card-img" /></div> )
              }
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Search