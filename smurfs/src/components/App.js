import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { fetchAPI, postAPI } from "./actions/index";
import styled from 'styled-components';
import './App.css';
function App(props) {
  const [form, setForm] = useState({
    name: '',
    age: 0,
    height: ''
  })

  const handleOnChange= e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitHandle = e =>{
    e.preventDefault();
    props.postAPI(form)
    setForm()
  }
  useEffect(() => {
    props.fetchAPI();
  }, [])
    return (
      <>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
      <Form onSubmit={submitHandle}>
      <label>Name</label>
          <input 
          name="name"
          type="text"
          onChange={handleOnChange}
          />
          <label>Age</label>
          <input 
          name="age"
          type="number"
          onChange={handleOnChange}
          />
          <label>Height</label>
          <input 
          name="height"
          type="text"
          onChange={handleOnChange}
          />
        <button>Submit</button>
      </Form>
      <CardBox>
        {props.ApiError && (
          <div> There was an error loading the information!</div>
        )}
        {props.isApiLoading ? (<div>Loading the information!</div>) : (
          props.ApiCharacters.map((x) => {
            return <Card key={x.id}>
              Name:{x.name}<br/>
              Age:{x.age} <br />
              Height: {x.height}
            </Card>
          })
        )}
      </CardBox>
      </>
    )
  }


function mapStateToProps(state) {
  return {
    isApiLoading: state.apiReducer.isLoading,
    ApiCharacters: state.apiReducer.api,
    ApiError: state.apiReducer.error
  };
}

const mapDispatchToProps = {
  fetchAPI,
  postAPI
};

const CardBox = styled.div`
width: 80%;
height: 100%;
margin: 0 auto;
border: 1px #F8F8F8 solid;
box-shadow: 7px 7px 7px 5px #888888;
display: flex;
flex-flow: row wrap;
margin-top: 2%;
margin-bottom: 5%;
justify-content: space-between;
padding: 2%;
`;

const Card = styled.div`
width: 33%;
height: auto;
margin: 1%;
display: flex;
flex-flow: column nowrap;
`;

const Form = styled.form`
display: flex;
flex-flow: column nowrap;
width: 50%;
margin: 0 auto;

`;

export default connect(mapStateToProps, mapDispatchToProps)(App);
