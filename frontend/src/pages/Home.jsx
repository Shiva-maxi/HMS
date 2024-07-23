import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'
const Home = () => {
  return (
    <div>
      <Hero title={"Welcome to Shivcare Medical Institute || Your trusted Healthcare Provider"} imageUrl={"./hero.png"}/>
      <Biography imageUrl={"/about.png"}/>
      <Department/>
      <MessageForm/>
    </div>
  )
}

export default Home
