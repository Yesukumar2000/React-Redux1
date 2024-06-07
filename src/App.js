import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  let inputRef = useRef();
  let dispatch = useDispatch();

  let store = useSelector((store) => {
    return store;
  });

  let removeItem = (type, item) => {
    dispatch({ type, data: item });
  };

  return (
    <div className="App">
      <input ref={inputRef} placeholder="Enter name" />
      <button onClick={() => {
        dispatch({ type: "AddtheBook", data: inputRef.current.value });
      }}>Add The Book</button>
      <button onClick={() => {
        dispatch({ type: "AddtheAuthor", data: inputRef.current.value });
      }}>Add the Author</button>
      <hr />
      <h2>Books: {store.books.join(', ')}</h2>
      <ul>
        {store.books.map((book, i) => (
          <li key={i}>
            {book} <button onClick={() => removeItem("RemoveBook", book)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Authors: {store.authors.join(', ')}</h2>
      <ul>
        {store.authors.map((author, i) => (
          <li key={i}>
            {author} <button onClick={() => removeItem("RemoveAuthor", author)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
