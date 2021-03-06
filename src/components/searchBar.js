import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import '../css/App.css';
import '../css/home.css';
import SearchIcon from '../img/search.svg';
import { updateQuery, selectUnique } from '../actions/index';
import { useDispatch } from 'react-redux';

function HomeSearch() {
  const searchQuery = useSelector(state => state.search.query);
  const searchUnique = useSelector(state => state.search.unique);
  const dispatch = useDispatch();

  return(
    <Form
    action="/search">
      <InputText
      autoComplete="off"
      value={ searchQuery }
      type="text"
      name="q"
      onChange={ e => dispatch(updateQuery(e.target.value)) }
      />
      <select
      name='unique'
      value={ searchUnique }
      onChange={ e => dispatch(selectUnique(e.target.value)) }
      >
        <option value='cards'>Cards</option>
        <option value='art'>Artworks</option>
        <option value='prints'>All Printings</option>
      </select>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
`;

const InputText = styled.input`
  width: 100%;
  max-width: 720px;
  height: 50px;
  font-size: 32px;
  font-family: Open Sans, sans-serif;
  color: white;
  padding: 5px 20px 5px 48px;
  display: block;
  background: url(${SearchIcon});
  background-color: rgba(255,255,255,0.3);
  background-repeat: no-repeat;
  background-position: 10px center;
  border-color: rgba(255,255,255,0.3);
  border-width: 3px;
  border-style: solid;
  margin: 2% auto 5%;
  outline: none;
  transition: all 500ms linear 0s;

  &:focus {
    border-color: white;
  }

  @media (max-width: 767px) {
    width: unset;
    font-size: 16px;
		height: 25px;
  }
`;

function SearchBar() {
  const searchQuery = useSelector(state => state.query);
  const searchUnique = useSelector(state => state.unique);
  const dispatch = useDispatch();

  return(
    <Form2
    onSubmit={ e => e.preventDefault() }
    action="/search">
      <InputText2
      autoComplete="off"
      value={ searchQuery }
      type="text"
      name="q"
      placeholder="Search for a card"
      onChange={ e => dispatch(updateQuery(e.target.value)) }
      />
      <select
      name='unique'
      value={ searchUnique }
      onChange={ e => dispatch(selectUnique(e.target.value)) }
      >
        <option value='cards'>Cards</option>
        <option value='art'>Artworks</option>
        <option value='prints'>All Printings</option>
      </select>
    </Form2>
  );
}

const Form2 = styled.form`
  width: 100%;
  margin: 15px 0;
`;

const InputText2 = styled.input`
  width: 100%;
  max-width: 640px;
  height: 20px;
  font-size: 16px;
  display: block;
  background-color: transparent;
  outline: none;
  font-family: Open Sans, sans-serif;
  border: none;
  border-bottom: 3px solid #b3b3b3;
  transition: 0.35s ease;

  &:focus {
    border-bottom: 3px solid #00c474;
  }

  @media (max-width: 767px) {
    font-size: 16px;
		height: 25px;
  }
`;

export { HomeSearch, SearchBar };