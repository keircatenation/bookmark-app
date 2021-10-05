import React, {useState} from 'react'

export default function Profile(props) {
    const [user, setUser] = useState({
        name: "Keiran"
    })

    return (
        <div>hello {user.name}!</div>
    )

}