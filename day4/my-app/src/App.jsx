import logo from "./logo.svg";
import "./App.css";
import Profile, { IsiData, Lagi, Propics } from "./components/profile";

function App() {
  const we = "My GUY";
  function show() {
    alert("wihaou");
  }
  return (
    <div>
      <h1
        style={{ color: "red", fontFamily: "sans-serif", paddingLeft: "10px" }}
      >
        Halo Warga Batam
      </h1>
      <h1 className="judul">Welcome to NDP {we}</h1>
      <button style={{ marginLeft: "100px" }} onClick={show}>
        Ok
      </button>
      <Profile />
      <Propics />
      <Lagi />
    </div>
  );
}

export default App;
