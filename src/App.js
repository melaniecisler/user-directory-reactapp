import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <h1>Employee User Directory</h1>
      <p>
        Begin Search: Enter a first name below to filter results.
      </p>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
    </div>
  );
}

export default App;
//test