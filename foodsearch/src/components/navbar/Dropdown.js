import React , {useState}from 'react'
import {MenuItem} from './MenuItem'
import { Link } from "react-router-dom"
import './Dropdown.css'

function Dropdown(){ 
    const [click,setclick] = useState(false)

    const handClick = ()=>setclick(!click)

    return (
    <>
    <ul onClick={handClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItem.map((item,index)=>{
            return(
                <li key={index}>
                    <Link className={item.cName}to={item.path} onClick={()=> setclick(false)}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
    </ul>
    </>
    );

}

export default Dropdown;