import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseReducerCounter from "./components/UseReducerCounter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/counter" element={<Counter />}></Route>
          <Route
            path="/usereducercounter"
            element={<UseReducerCounter />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
