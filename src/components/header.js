import React from 'react'

export default function Header() {
    const getYear = () =>{
        const newDate = new Date();
        return newDate.getFullYear();
    }
    const user = {
        name: 'Ayush',
        lastname: 'Bajracharya',
        age: 26
    }
    return (
        <div>
           The date is {getYear()}
           <div>name is  {user.name}</div>
           <div>lastname is  {user.lastname}</div>
           <div>age is  {user.age}</div>
           
        </div>
    )
}
