import React from 'react'
import "./styles.css";

const HolyGrailLayout = () => {
  return (
    <div className='holy-grail-layout'>
        <header className='header'>Header</header>
        <div className='main'>
            <aside className="left-column">Navigation</aside>
            <main className="center-column">Page Contents</main>
            <aside className="right-column">Ads</aside>
        </div>
        <footer className='footer'>Footer</footer>
    </div>
  )
}

export default HolyGrailLayout