import React from 'react'

function Footer() {
  return (
    <>
      <div className="container-fluid py-3">
        <footer className="text-center text-lg-start text-white" >
          <div className="container p-4 pb-0">
            <section className>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Annapurna Hotel
                  </h6>
                  <p>
                  Compare Hotel Rooms in Kathmandu, Bagmati. View Deals and Reserve Now on Expedia. Get the Most Out of Your Trip with Package Deals. Explore Fun Things to Do on Your Stay. 1 Million Properties. Expedia's Best Prices. 
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-white">Hotel info</a>
                  </p>
                  <p>
                    <a className="text-white">Room features</a>
                  </p>
                  <p>
                    <a className="text-white">Room Rates</a>
                  </p>
                  <p>
                    <a className="text-white">Help</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fas fa-home mr-3" /> Kathmandu , Nepal</p>
                  <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
                  <p><i className="fas fa-phone mr-3" /> +977-98343434</p>
                  <p><i className="fas fa-print mr-3" /> +977-90570334</p>
                </div>
              </div>
            </section>
            <hr className="my-3" />
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2020 Copyright:
                    <a className="text-white" href="https://www.hotelassociationnepal.org.np/hotels/hotel-annapurna">annapurna@gmail.com</a>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
                  <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
