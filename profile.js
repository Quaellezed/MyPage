import React from "react"
import Main from "./Components/main"
import About from "./Components/about"
import Interests from "./Components/interests"
import Footer from "./Components/footer"

export default function Profile() {
    return (
        <div>
            <Main />
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}