import React from 'react'
import propTypes from "prop-types"
// import './UserCard.css'
import {Card} from "react-bootstrap"

// const UserCard = ({name, age}) => {
const UserCard = (props) => {
    return (
        <div>
            {/* <h1>{`Hello ${name}`}</h1>
            <h3>{age}</h3> */}
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.user.email}</Card.Subtitle>
                <Card.Text>
                {props.user.phone}
                </Card.Text>
                <Card.Link href="#" onClick={()=>props.user.function(props.user.name)}>Card Link</Card.Link>
           
            </Card.Body>
            </Card>
        </div>
    )
}

// UserCard.defaultProps={
//     name:"Foulen",
//     age:"000"
// }

// UserCard.propTypes={
//     name: propTypes.string,
//     age: propTypes.number
// }

export default UserCard
