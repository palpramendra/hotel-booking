import React from 'react'
import rooms from '../Data'


function Room() {
  return (
    <>
      <section className="room">
        <div className="container py-5">
            <div className="row g-5">
              <h4 className="our-room">OUR ROOMS</h4>
              {rooms.map((details)=>
              (<div className="col-lg-4"><img className="w-100" src={details.image} alt="" /><div className="bg1"><h2>{details.title}</h2><p>{details.Descriptions}</p></div></div>
              ))} 
            </div>
        </div>
      </section>
    </>
  )
}

export default Room
