import React from "react";
import { BrowserRouter, Route, Routes , Link} from "react-router-dom";
import { Navbar } from "flowbite-react";
import Board from "./board";
import Scores from "./scores";

const NavBar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tic-Tac-Toe Killer
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          to="/"
        >
          Home
        </Link>
        <Link
          to="/scores"
        >
          Scores
        </Link>
        <Link
          to="/about"
        >
          About
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

const About = () => {
  return (
    <div className="flex justify-center items-center text-5xl">
      Made In CHINA
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Board/>}/>
        <Route path="/scores" element={<Scores/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}