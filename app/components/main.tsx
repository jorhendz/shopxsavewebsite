import React from 'react';
import Image from 'next/image';
import bannerImg from '../assets/images/banner-1.jpg';
import jacketImg1 from '../assets/images/products/jacket-3.jpg';
import jacketImg2 from '../assets/images/products/jacket-4.jpg';
import skirtImg1 from '../assets/images/products/clothes-3.jpg';
import skirtImg2 from '../assets/images/products/clothes-4.jpg';
import blogImg from '../assets/images/blog-3.jpg';
import dressFrock from '../assets/images/icons/dress.svg';

const Main = () => {
  return (
    <>
      <main>
        <div className="banner">
          <div className="container">
            <div className="slider-container has-scrollbar">
              <div className="slider-item">
                <Image src={bannerImg} alt="women's latest fashion sale" className="banner-img" />
                <div className="banner-content">
                  <p className="banner-subtitle">Trending item</p>
                  <h2 className="banner-title">Women's latest fashion sale</h2>
                  <p className="banner-text">
                    starting at &#36; <b>20</b>.00
                  </p>
                  <a href="#" className="banner-btn">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>


          <div className="container">

            <div className="category-item-container has-scrollbar">

            <div className="category-item">

<div className="category-img-box">
  <Image src={dressFrock} alt="dress & frock" width="30" />
</div>

<div className="category-content-box">

  <div className="category-content-flex">
    <h3 className="category-item-title">Dress & frock</h3>

    <p className="category-item-amount">(53)</p>
  </div>

  <a href="#" className="category-btn">Show all</a>

</div>

</div>
              <div className="category-item">

                <div className="category-img-box">
                  <Image src={dressFrock} alt="dress & frock" width="30" />
                </div>

                <div className="category-content-box">

                  <div className="category-content-flex">
                    <h3 className="category-item-title">Dress & frock</h3>

                    <p className="category-item-amount">(53)</p>
                  </div>

                  <a href="#" className="category-btn">Show all</a>

                </div>

              </div>
              <div className="category-item">

                <div className="category-img-box">
                  <Image src={dressFrock} alt="dress & frock" width="30" />
                </div>

                <div className="category-content-box">

                  <div className="category-content-flex">
                    <h3 className="category-item-title">Dress & frock</h3>

                    <p className="category-item-amount">(53)</p>
                  </div>

                  <a href="#" className="category-btn">Show all</a>

                </div>

              </div>
              <div className="category-item">

                <div className="category-img-box">
                  <Image src={dressFrock} alt="dress & frock" width="30" />
                </div>

                <div className="category-content-box">

                  <div className="category-content-flex">
                    <h3 className="category-item-title">Dress & frock</h3>

                    <p className="category-item-amount">(53)</p>
                  </div>

                  <a href="#" className="category-btn">Show all</a>

                </div>

              </div>
              <div className="category-item">

                <div className="category-img-box">
                  <Image src={dressFrock} alt="dress & frock" width="30" />
                </div>

                <div className="category-content-box">

                  <div className="category-content-flex">
                    <h3 className="category-item-title">Dress & frock</h3>

                    <p className="category-item-amount">(53)</p>
                  </div>

                  <a href="#" className="category-btn">Show all</a>

                </div>

              </div>


              </div>

            </div>


        <div className="container">
          <h2 className="title">New Products</h2>

          <div className="product-grid">
            <div className="showcase">
              <div className="showcase-banner">
                <Image src={jacketImg1} alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                <Image src={jacketImg2} alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                <p className="showcase-badge">15%</p>
                <div className="showcase-actions">
                  <button className="btn-action">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="eye-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="repeat-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="bag-add-outline"></ion-icon>
                  </button>
                </div>
              </div>

              <div className="showcase-content">
                <a href="#" className="showcase-category">jacket</a>
                <a href="#">
                  <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>
                <div className="price-box">
                  <p className="price">&#36;48.00</p>
                  <del>&#36;75.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <div className="showcase-banner">
                <Image src={skirtImg1} alt="Black Floral Wrap Midi Skirt" width={300} className="product-img default" />
                <Image src={skirtImg2} alt="Black Floral Wrap Midi Skirt" width={300} className="product-img hover" />
                <p className="showcase-badge angle pink">new</p>
                <div className="showcase-actions">
                  <button className="btn-action">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="eye-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="repeat-outline"></ion-icon>
                  </button>
                  <button className="btn-action">
                    <ion-icon name="bag-add-outline"></ion-icon>
                  </button>
                </div>
              </div>

              <div className="showcase-content">
                <a href="#" className="showcase-category">skirt</a>
                <h3>
                  <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                </h3>
                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <div className="price-box">
                  <p className="price">&#36;25.00</p>
                  <del>&#36;35.00</del>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Main;
