import React from 'react'
import "./Homepage.css"

// const mystyle = {
//     color : "orange", 
//     fontSize : "40px",
//     backgroundColor : 'blue',
//     width : '10%'
// }
export default function Homepage({setLoginUser}) {
  return (
    <div className='homepage'>
        <h1>Hello Homepage</h1>
        <div className='button' onClick={()=> setLoginUser({})}>Logout</div>      
    </div>
  )
}
