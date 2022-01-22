import React from "react"

export default function Footer() {
    return (
        <footer>
        <h1 onClick={gotoLink}className="footer--git"><i className="footer--icon-git"/></h1>
        <h2 onClick={gotoLink1}className="footer--twi"><i className="footer--icon-twi"/></h2>
        <h3 onClick={gotoLink2}className="footer--lin"><i className="footer--icon-lin"/></h3>
        </footer>
    )
function gotoLink(){
    window.open("https://github.com/Quaellezed");
}
function gotoLink1(){
    window.open("https://twitter.com/Jus2Yaoi");
}
function gotoLink2(){
    window.open("https://www.linkedin.com/");
}
}
