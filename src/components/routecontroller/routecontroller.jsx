import React from 'react'
import style from './routecontroller.module.css'
import { Navigate } from 'react-router-dom'

export default  function RouteController(props) {

 if(!localStorage.getItem('token')) {
 return props.children
 }else{
  return <Navigate to={'/'}/>
 }
 
}

