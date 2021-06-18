import React from 'react'
import { Button } from 'semantic-ui-react'



export default function SignedOut(props) {
    return (
        <div>
            <Button primary onClick={props.signIn}>Sign in</Button>
            <Button primary>Sign up</Button>
        </div>
    )
}
