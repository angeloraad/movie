import { useEffect, useState } from "react";

const KEY = "b002430c";

function App() {
  const [posters, setPoster] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("");
  const [selectedId, setselectedId] = useState("");

  function handleSearch(e) {
    e.preventDefault();
  }

  const handleClick = function (Id) {
    console.log(posters[Id].Title, "handleclick");

    // Check if posters[Id] is defined before accessing its properties

    console.log(posters[Id].Title);
    setselectedId(posters[Id].Title);
  };
  useEffect(() => {
    const controller = new AbortController();
    async function getMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${search}`,
        { signal: controller.signal }
      );
      const data = await res.json();
      setPoster(data.Search);
      console.log(data.Search, "async");
    }

    getMovie();
  }, [search]);

  return (
    <div>
      <Form search={search} handleSearch={handleSearch} setSearch={setSearch} />

      <div className="container-container">
        <Personfound>
          {posters &&
            posters.map((ele, i) => (
              <Person
                key={i}
                Id={i}
                poster={posters[i]}
                handleClick={handleClick}
              />
            ))}
        </Personfound>
        <Personsdisplay id={selectedId} />
      </div>
    </div>
  );
}

function Form({ search, handleSearch, setSearch }) {
  return (
    <form className="form" onSubmit={handleSearch}>
      <div>
        <span style={{ fontSize: "25px" }}> 🫂 People</span>
      </div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
          placeholder="Search..."
        />
      </div>
      <div>
        <p style={{ fontSize: "25px" }}>Found 0 results</p>
      </div>
    </form>
  );
}

function Personfound({ children }) {
  return <div className="Person-found">{children}</div>;
}

function Person({ poster, handleClick, Id }) {
  return (
    <div className="person" onClick={(e) => handleClick(Id)}>
      <img className="poster-img" src={poster.Poster} alt="movie" />
      <div value={Id}>
        <p style={{ fontWeight: "bold" }}>{poster.Title}</p>
      </div>
    </div>
  );
}

function Personsdisplay({ id }) {
  const [display, setDisplay] = useState(id);

  useEffect(() => {
    async function getId() {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${display}`
      );
      const data = await res.json();
      console.log("Value of display:", display); // Log the value of display
      console.log("Response data:", data);
      setDisplay(data.Poster);
    }
    getId();
  }, [display]);

  return (
    <div className="Person-display">{<img src={display} alt={"movie"} />}</div>
  );
}

export default App;
