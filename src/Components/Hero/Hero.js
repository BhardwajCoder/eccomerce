import React from 'react'
import './Hero.css'
function Hero() {
  return (
 <>
 <div className='container '>
<div id="carouselExampleAutoplaying" class="carousel slide"  data-bs-ride="carousel" data-pause="false">
  <div class="carousel-inner">
    <div class="carousel-item active"  data-bs-interval="1000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-26042024-MainBannerDailyChanging-Z1-P6-Netplay-DNMX-Under399.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-26042024-TopBrandBanner-Z3-P5-cosrx-aqualogica-upto35.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-26042024-TopBrandBanner-Z3-P2-levis-uspa-min50.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 ">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://t3.ftcdn.net/jpg/02/24/64/56/360_F_224645618_dtpq1bEjnN67g3gampm39hg698AUC9tf.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Make your online shopping easy with AJIO</h1>
        <p class="lead"><strong >AJIO</strong> is the best destination for online shopping you can buy anything for your kids and home with latest fashion design for both men and women check hurry  .</p>
       
      </div>
    </div>
  </div>

 </div>
 </>
  )
}

export default Hero
