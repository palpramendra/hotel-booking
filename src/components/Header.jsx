import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Room from '../pages/Room'
import Gallery from '../pages/Gallery'

function Header() {
    const [scrolltopdata, setscrolltopdata] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('scrolled');
            }
        });
    }, [])
    return (
        <>
            <header className='scrolltopdata'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#"><Link to="/"><img className="logo" src="https://content.jdmagicbox.com/comp/tindivanam/n7/9999p4146.4146.170731095415.t6n7/catalogue/annapoorna-hotel-mailam-tindivanam-caterers-tnncec95ph.jpg" alt="" /></Link></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/rooms">OUR ROOM</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">GALLERY</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Room />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </>
    )
}

export default Header
