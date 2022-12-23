import useFetch from "./useFetch";
import "./App.css";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </>
  );
}

export default App;
