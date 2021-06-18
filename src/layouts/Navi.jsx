import React from "react";
import { Button, Dropdown, Menu,Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useState } from "react";

export default function Navi() {

  const [state, setState] = useState(false)

  function handleSignIn(){
    setState(true)
  }
  function handleSignOut(){
    setState(false)
  }


  return (
    <div>
       
      <Menu size="small" color="violet" inverted> 
      <Container>
            <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>İş ilanları</Dropdown.Item>
              <Dropdown.Item>Cvler</Dropdown.Item>
              <Dropdown.Item>İş pozisyonları</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>{
            state? <SignedIn signOut={handleSignOut}></SignedIn>: <SignedOut signIn={handleSignIn}></SignedOut >
            }
           
           
            
          </Menu.Item>
        </Menu.Menu>
        </Container>
        
      </Menu>
    </div>
  );
}
