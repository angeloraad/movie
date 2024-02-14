function Person() {
  const [poster, setPoster] = useState("");

  useState(function () {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b002430c&s=interstellar")
      .then((res) => res.json())
      .then((data) => setPoster(data.Search[0]));
  }, []);

  return (
    <div className="person">
      <img className="imagePoster" src={poster.Poster} alt="movie" />
      <div>
        <p style={{ fontWeight: "bold" }}>{poster.Title}</p>
      </div>
    </div>
  );
}



const [poster, setPoster] = useState("");

useEffect(() => {
  async function fetchMovies() {
    const res = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=b002430c&s=interstellar"
    );
    const data = await res.json();
    setPoster(data.Search);
    console.log(data.Search);
  }

  fetchMovies();
}, []);

console.log(poster);

return (



  // this here is the one with the weird render thingy to ask reddit 



  import { useEffect, useState } from "react";

function App() {
  const [posters, setPoster] = useState([]);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=b002430c&s=interstellar"
      );
      const data = await res.json();
      setPoster(data.Search);
      console.log(data.Search);
    }

    getMovie();
  }, []);

  const what = "i love sex";

  return (
    <div>
      <Form />

      <div className="container-container">
        <Personfound>{{ posters, what }}</Personfound>
        <Persondisplay />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="form">
      <div>
        <span style={{ fontSize: "25px" }}> 🫂 People</span>
      </div>
      <div>
        <input className="search-bar" placeholder="Search..." />
      </div>
      <div>
        <p style={{ fontSize: "25px" }}>Found 0 results</p>
      </div>
    </div>
  );
}

function Personfound({ children }) {
  const posters = children.posters;

  return (
    <div className="Person-found">
      {posters.map((ele, i) => (
        <Person key={i} poster={posters[i].Poster} />
      ))}
    </div>
  );
}

function Person({ poster }) {
  
  
  return (
    <div className="person">
      <img src={poster} alt="movie" />
      <div>
        <p style={{ fontWeight: "bold" }}>Angelo Raad</p>
      </div>
    </div>
  );
}

function Persondisplay() {
  return <div className="Person-display">Persondisplay</div>;
}

export default App;
