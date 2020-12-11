import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
export default function Home() {
  return ( 
	<div style ={{color: 'purple'}}>
		<Link to = "/contact/">Contact</Link>
		<Header headerText="Hello Gatsby!" />
		<p>What a world.</p>
		<img src="https://images.unsplash.com/photo-1607457471980-84e5d89de2fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
	</div>
  )
}
