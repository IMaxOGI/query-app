import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import NavBar from "./components/NavBar";
import Planets from "./components/Planets";
import People from "./components/People";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <NavBar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
