import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Главная</h1>;
}

function About() {
  return <h1>О нас</h1>;
}

function Contact() {
  return <h1>Контакты</h1>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Главная</Link> |{" "}
        <Link to="/about">О нас</Link> |{" "}
        <Link to="/contact">Контакты</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;