import React from 'react';
import Image from 'next/image'; // Import Next.js Image component for optimized images

const Main = () => {
  return (
    <>
      <main>
        <div className="banner">
          <div className="container">
            <div className="slider-container has-scrollbar">
              <div className="slider-item">
                <Image
                  src="/assets/images/banner-1.jpg" // Static files should be in the 'public' directory
                  alt="women's latest fashion sale"
                  width={1200} // Define width and height for Image optimization
                  height={600}
                  className="banner-img"
                />
                <div className="banner-content">
                  <p className="banner-subtitle">Trending item</p>
                  <h2 className="banner-title">Women's latest fashion sale</h2>
                  <p className="banner-text">
                    starting at &dollar; <b>20</b>.00
                  </p>
                  <a href="#" className="banner-btn">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="sidebar has-scrollbar" data-mobile-menu>
            <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>
              </div>
            </div>
          </div>

          <h2 className="title">New Products</h2>
          <div className="product-grid">
            <div className="showcase">
              <div className="showcase-banner">
                <Image
                  src="/assets/images/products/jacket-3.jpg"
                  alt="Mens Winter Leathers Jackets"
                  width={300}
                  height={400}
                  className="product-img default"
                />
                <Image
                  src="/assets/images/products/jacket-4.jpg"
                  alt="Mens Winter Leathers Jackets"
                  width={300}
                  height={400}
                  className="product-img hover"
                />
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
                  <p className="price">$48.00</p>
                  <del>$75.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <div className="showcase-banner">
                <Image
                  src="/assets/images/products/clothes-3.jpg"
                  alt="Black Floral Wrap Midi Skirt"
                  className="product-img default"
                  width={300}
                  height={400}
                />
                <Image
                  src="/assets/images/products/clothes-4.jpg"
                  alt="Black Floral Wrap Midi Skirt"
                  className="product-img hover"
                  width={300}
                  height={400}
                />
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
                  <p className="price">$25.00</p>
                  <del>$35.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="container">
            <div className="blog-container has-scrollbar">
              <div className="blog-card">
                <a href="#">
                  <Image
                    src="/assets/images/blog-3.jpg"
                    alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                    className="blog-banner"
                    width={300}
                    height={200}
                  />
                </a>
                <div className="blog-content">
                  <a href="#" className="blog-category">Shoes</a>
                  <h3>
                    <a href="#" className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                  </h3>
                  <p className="blog-meta">
                    By <cite>Mr Selsa</cite> / <time dateTime="2022-02-10">Feb 10, 2022</time>
                  </p>
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
