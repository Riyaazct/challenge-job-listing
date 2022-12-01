import { useState } from "react";
import "./App.css";
import Header from "./Header";
import JobListings from "./JobListings";
import Footer from "./Footer";
import Filter from "./Filter.js";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <JobListings jobData={data} />
      <Footer />
    </div>
  );
}

export default App;
