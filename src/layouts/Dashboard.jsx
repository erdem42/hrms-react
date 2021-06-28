import React from "react";

import { Link, Route, Switch } from "react-router-dom";
import Candidate from "../pages/users/Candidate";
import Employer from "../pages/users/Employer";
import Navi from "./Navi";
import { Grid, Menu, Label, Input } from "semantic-ui-react";
import JobPositionList from "../pages/jobPosition/JopPositionList";
import JobAdvertisementList from "../pages/jobAdvertisement/JobAdvertisementList";
import ResumeList from "../pages/resume/ResumeList";
import { useState,useEffect } from "react";
import AddJobAdvertisement from "../pages/jobAdvertisement/AddJobAdvertisement";
import CityList from "../pages/city/CityList";
import JobAdvertisementDisActive from "../pages/jobAdvertisement/JobAdvertisementDisActive";
import CandidateService from "../services/candidateService";
import EmployerService from "../services/employerService";


export default function Dashboard() {
 const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService=new CandidateService()
        candidateService.getCandidate().then(result=>setCandidates(result.data.data))}, [])
        const [employers, setEmployers] = useState([]);

        useEffect(() => {
          let employerService = new EmployerService();
          employerService
            .getEmployer()
            .then((result) => setEmployers(result.data.data));
        }, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu vertical style={{ margin: "5em" }}>
              <Menu.Item
                name="inbox"
                // active={activeItem === 'inbox'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">1</Label>
                <Link to={`/jobads`}>Job ads</Link>
              </Menu.Item>

              <Menu.Item
                name="spam"
                // active={activeItem === 'spam'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">{employers.length}</Label>
                <Link to={`/employers`}>Employers</Link>
              </Menu.Item>

              <Menu.Item
                name="updates"
                // active={activeItem === 'updates'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">{candidates.length}</Label>
                <Link to={`/candidates`}>Candidates</Link>
              </Menu.Item>
              <Menu.Item
                name="inbox"
                // active={activeItem === 'inbox'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">1</Label>
                <Link to={`/jobpositions`}>Job Positions</Link>
              </Menu.Item>
             

            
              <Menu.Item
                name="inbox"
                // active={activeItem === 'inbox'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">1</Label>
                <Link to={`/resumes`}>Resumes</Link>
              </Menu.Item>
              <Menu.Item
                name="inbox"
                // active={activeItem === 'inbox'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">1</Label>
                <Link to={`/cities`}>Cities</Link>
              </Menu.Item>
              <Menu.Item
                name="spam"
                // active={activeItem === 'spam'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">51</Label>
                <Link to={`/addjobadvertisement`}>Add Job Ad</Link>
              </Menu.Item>
              <Menu.Item
                name="spam"
                // active={activeItem === 'spam'}
                // onClick={this.handleItemClick}
              >
                <Label color="teal">51</Label>
                <Link to={`/confirm/jobadvertisements`}>Confirm Job Ad</Link>
              </Menu.Item>
              <Menu.Item>
                <Input icon="search" placeholder="Search mail..." />
              </Menu.Item>
              
              
            </Menu>
          </Grid.Column>

          <Grid.Column width={12}>
            <Route path="/candidates" component={Candidate} />
            <Route path="/employers" component={Employer} />
            <Route path="/jobads" component={JobAdvertisementList} />
            <Route path="/resumes" component={ResumeList} />
            <Route path="/jobpositions" component={JobPositionList} />
            <Route path="/addjobadvertisement" component={AddJobAdvertisement} />
            <Route path="/cities" component={CityList} />
            <Route path="/confirm/jobadvertisements" component={JobAdvertisementDisActive} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
