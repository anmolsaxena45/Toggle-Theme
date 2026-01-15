import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div>
        <h1 style={{color:theme==='dark'?'white':'black'}} >Current Theme : {theme}</h1> 
        <button onClick={()=> setTheme(theme==='light'?'dark':'light')}>Change Theme</button>
    </div>
  ) 
}

export default ChildC
