import React from "react";
import Employer from "../pages/users/Employer";
import { Route,Switch } from "react-router-dom"
import Candidate from "../pages/users/Candidate";

export default function Dashboard() {
  

  return (
    <div>

<Candidate/>
<Employer/>


    </div>
  );
}
