import React from 'react'

function About() {
  return (
    <>
      <section className='py-4'> 
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                <h4 className="our-room">About</h4>
                <p className='about'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
                <button className='btn'>Read More</button>
                </div>
                <div className="col-lg-7">
                    <img className='w-100' src="https://themewagon.github.io/keto/images/about.png" alt="" />
                </div>
                
            </div>
        </div>
      </section>
    </>
  )
}

export default About
