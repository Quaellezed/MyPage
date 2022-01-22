import React from "react"

export default function Main() {
    return (
        <main>
        <img src="https://docs.defikingdoms.com/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MfUam-1n-JpNfAIQQey%2Fuploads%2Fw15EYm7DIfH1ncNTbgq8%2FCute%20Henry.gif?alt=media&token=36b71eb1-1129-4d7c-9817-f8d9eb6a5ea6" className="main--picture"/>
            <h1 className="main--title"> Quaellezed </h1>
            <h2 className="main--title2"> Blockchain & crypto enthusiast </h2>
            <button onClick={gotoeMail}className="main--button"><i className="main--buttonicon"> </i> Email </button>
        </main>
    )
    function gotoeMail(){
        location.href='mailto:Quaellezed@hotmail.com'
    }
}