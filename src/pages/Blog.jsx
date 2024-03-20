import React from 'react'

function Blog() {
  return (
    <>
      <section className="block-bg">
        <div className="container">
            <div className="row">
                <h3 className="blog">BLOG</h3>
                <p className='py-3 fw-bold content'>Wel come to our annapurna hotel with best feature and facilities.</p>
                <div className="col-lg-4"><img className='w-100' src="https://themewagon.github.io/keto/images/blog1.jpg" alt="" />
                <div className='bg2'>
                <h2>Swiming Pool</h2><p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p></div></div>
                <div className="col-lg-4"><img className='w-100' src="https://themewagon.github.io/keto/images/blog2.jpg" alt="" />
                <div className='bg2'>
                <h2>Waiting Room</h2><p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p></div></div>
                <div className="col-lg-4"><img className='w-100' src="https://themewagon.github.io/keto/images/blog3.jpg" alt="" />
                <div className='bg2'>
                <h2>Bed Room</h2><p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p></div></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blog
