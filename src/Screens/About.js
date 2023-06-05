import React, { useContext } from 'react'
import Homesection from '../Components/Homesection'
import { AppContext, useProductContext } from '../context/productcontext'

const About = () => {
  const {myName}=useProductContext()
    const data={
        name:"E-commerce Store"
    }
  return  <>
  {myName}
  <Homesection myData={data}/></> 
 
}

export default About