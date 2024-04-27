import React from 'react'
import './Hero.css'
function Hero() {
  return (
 <>
 <div className='container'>
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
 <section>
 <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-pause="false">
  <div class="carousel-inner">
    <div class="carousel-item active"data-bs-interval="1000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"data-bs-interval="2000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-au.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"data-bs-interval="3000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-bankoffers-Z1-5instant-prepaid.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
 </section>
 </div>
 </>
  )
}

export default Hero
