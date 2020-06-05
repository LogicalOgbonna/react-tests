import React from 'react'
import "./header.scss"
function Header() {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="LogoImg" src="" alt="small-logo"></img>
                </div>
            </div>
        </header>
    )
}

export default Header