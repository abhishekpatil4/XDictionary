import { useState } from 'react'
// import './App.css'

const dict = [

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]


function App() {
  const [defn, setDefn] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSearch = (e) => {
    setSubmitted(true);
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = Object.fromEntries(data);
    const searchedWord = payload.word.trim();
    for (let i = 0; i < dict.length; i++) {
      if (dict[i].word.toLocaleLowerCase() == searchedWord.toLocaleLowerCase()) {
        setDefn(dict[i].meaning);
        break;
      }
    }
  }
  return <div>
    <h1>Dictionary</h1>
    <form onSubmit={handleSearch}>
      <input required type="text" name="word" placeholder='Search for a word...' />
      <button type="submit">Search</button>
    </form>
    <div>
      <h3>Definition:</h3>
      {
        submitted &&
        (
          defn !== "" ? <p>{defn}</p> : <p>Word not found in the dictionary.</p>
        )
      }
    </div>
  </div>
}

export default App
