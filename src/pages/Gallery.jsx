import React from 'react'

function Gallery() {
    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <h3 className="gallery">GALLERY</h3>
                        <div className="col-lg-3">
                            <img src="https://themewagon.github.io/keto/images/gallery1.jpg" alt="" className='mb-2' />
                            <img src="https://themewagon.github.io/keto/images/gallery2.jpg" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img src="https://themewagon.github.io/keto/images/gallery3.jpg" alt=""className='mb-2' />
                            <img src="https://themewagon.github.io/keto/images/gallery6.jpg" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img src="https://themewagon.github.io/keto/images/gallery8.jpg" alt=""className='mb-2' />
                            <img src="https://themewagon.github.io/keto/images/gallery7.jpg" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img src="https://themewagon.github.io/keto/images/gallery3.jpg" alt=""className='mb-2' />
                            <img src="https://themewagon.github.io/keto/images/gallery6.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
