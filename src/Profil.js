import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'

const Profil = (props) => {
    console.log(props);
  return (
    <div>
        User Info : {props.name}.{props.surname},{props.age}
        <Email />
        <Name />
        <Address />
        <PersonalInfo />
    </div>
  )
}

export default Profil