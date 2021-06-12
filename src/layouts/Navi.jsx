import React from "react";
import { Button, Dropdown, Menu,Container } from "semantic-ui-react";

export default function Navi() {
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

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
        
      </Menu>
    </div>
  );
}
