import React from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="http://res.cloudinary.com/duh2axhid/image/upload/v1622909478/dh4nkkryugxwdwsjoajb.jpg"/>
                
                <Dropdown pointing="top left">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış yap"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
