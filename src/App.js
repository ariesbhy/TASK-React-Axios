import { useState } from "react";
import { getAllPets } from "./API/pets";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { Await } from "react-router";

function App() {
  return (
    <div className="font-mono">
      <botton onClick={getAllPets}> Get All Pets</botton>

      <Navbar />
      <Home />
      <PetList />
      <PetDetail />
    </div>
  );
}

export default App;
