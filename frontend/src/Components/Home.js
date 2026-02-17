import React from 'react'
import { useState, useEffect } from 'react';
import "./Home.css";
import { Trending_Gifts, itemsf, Gift_Categories, International_City_Names } from "./Data";
import Footer from './Footer';
import Header from './Header';
import Mobile_Navbar_bottom from './Mobile_Navbar_bottom';
import { Link } from 'react-router-dom';
import BestSeller from './BestSellers';


function Home() {
    const [current, setCurrent] = useState(0);
    const [activetab, setActivetab] = useState('cakes')
    const images = [
        '/images/1743999334095.avif',
        '/images/1745928065984.webp',
        "/images/1745219509909.avif",
        "/images/1740983560968.avif"


    ];
    const items = [
        {
            image: "/images/cake1.avif",
            title: "Photo Cakes",
            description: "For special occasions",
            rating: "4.5",
            ActualPrice: "999",
            DPrice: "599",
        },
        {
            image: "/images/cake2.avif",
            title: "Roses",
            description: "Love in every petal",
            rating: "5",
            ActualPrice: "999",
            DPrice: "599",
        },
        {
            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake3.avif",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",

        },
        {
            title: "Water Bottles",
            description: "Your Daily Dose of Hydration",
            image: "/images/kid-cake.avif",
            ActualPrice: "999",
            DPrice: "599",
            rating: "5",
        },
        {
            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake5.webp",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },
        {
            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake6.webp",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },
        {
            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake7.jpeg",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },
        {
            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake8.avif",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },


    ];

    const length = images.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // cleanup on unmount
    }, [current]);

    const [bestSellersStartIndex, setBestSellersStartIndex] = useState(0);
    const [trendingStartIndex, setTrendingStartIndex] = useState(0);
    const visibleCount = 4;
    // const totalItems = items.length;
    const currentItems = activetab === 'cakes' ? items : itemsf;
    const totalItems = currentItems.length;
    const isMobile = window.innerWidth <= 768;
    const visibleItems = isMobile ? currentItems : currentItems.slice(bestSellersStartIndex, bestSellersStartIndex + visibleCount);
    // console.log("abc", visibleItems)
    const Trending_Items = Trending_Gifts;
    const trending_visible_Items = isMobile ? Trending_Items : Trending_Items.slice(trendingStartIndex, trendingStartIndex + visibleCount);


    const handleBestSellersNext = () => {
        if (bestSellersStartIndex + visibleCount < totalItems) {
            setBestSellersStartIndex((prev) => prev + 1);
        }
    };

    const handleBestSellersPrev = () => {
        if (bestSellersStartIndex > 0) {
            setBestSellersStartIndex((prev) => prev - 1);
        }
    };


    const handleTrendingNext = () => {
        if (trendingStartIndex + visibleCount < Trending_Items.length) {
            setTrendingStartIndex((prev) => prev + 1);
        }
    };

    const handleTrendingPrev = () => {
        if (trendingStartIndex > 0) {
            setTrendingStartIndex((prev) => prev - 1);
        }
    };

    useEffect(() => {
        setBestSellersStartIndex(0);
    }, [activetab]);

    return (
        <div>
            <Header></Header>
            <div className='main'>
                {/* <div className="slider">
                    <button className="left-arrow" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="right-arrow" onClick={nextSlide}>
                        &#10095;
                    </button>
                    {images.map((img, index) => (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && <img src={img} alt={`slide ${index}`} className="image" />}
                        </div>
                    ))}
                </div> */}
                <div></div>
                <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
                    {/* Dots - Only show on mobile */}
                    <div className="carousel-indicators d-md-none">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#homeCarousel"
                                data-bs-slide-to={index}
                                className={index === current ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    {/* Slides */}
                    <div className="carousel-inner">
                        {images.map((img, index) => (
                            <div className={`carousel-item ${index === current ? 'active' : ''}`} key={index}>
                                <img src={img} className="d-block w-100" alt={`slide-${index}`} />
                            </div>
                        ))}
                    </div>

                    {/* Arrows - Only show on desktop */}
                    <button className="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev" >
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "black" }}></span>
                        <span className="visually-hidden" >Previous</span>
                    </button>
                    <button className="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "black" }}></span>
                        <span className="visually-hidden" >Next</span>
                    </button>
                </div>

                <div className=''>
                    <div className='s1'>
                        <div className='ss1'>
                            <div>
                                <img src='/images/homepage-icon-desktop.avif' alt='mother-collection' className='image-radius'></img>
                                <div className='wrapped-f1'>Mother's Day</div>
                            </div>
                        </div>
                        <div className='ss1'>
                            <div>
                                <a href='./cakes_collection' style={{ textDecoration: "none" }}> <img src='/images/cake.webp' alt='mother-collection' className='image-radius'></img>
                                    <div className='wrapped-f1'>Cakes</div>
                                </a>
                            </div>
                        </div>
                        <div className='ss1'>
                            <div>
                                <img src='/images/flowers.avif' alt='mother-collection' className='image-radius'></img>
                                <div className='wrapped-f1'>Flowers</div>
                            </div>
                        </div>
                        <div className='ss1'>
                            <div>
                                <img src='/images/combos.webp' alt='mother-collection' className='image-radius'></img>
                                <div className='wrapped-f1'>Combos</div>
                            </div>
                        </div>
                        <div className='ss1'>
                            <div>
                                <img src='/images/plants.avif' alt='mother-collection' className='image-radius'></img>
                                <div className='wrapped-f1'>Plants</div>
                            </div>
                        </div>
                        <div className='ss1'>
                            <div>
                                <img src='/images/chocolates.webp' alt='mother-collection' className='image-radius'></img>
                                <div className='wrapped-f1'>Choclates</div>
                            </div>
                        </div>
                        <div className='ss1'>
                            <div>
                                <img src='/images/gifts.avif' alt='mother-collection' className='image-radius'></img>
                                <div className='wrapped-f1'>Gifts</div>
                            </div>
                        </div>
                        <div className='ss1'>
                            <div>
                                <img src='/images/personalised.avif' alt='mother-collection' className='image-radius'></img>
                                <div className='wrapped-f1'>Personalised</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='MH-section' style={{ alignItems: "center" }}>
                    <div className='Must-have'>Must Have</div>
                </div>
                <div className="grid-container">
                    {/* {items.map((item, index) => (
                    <div className="grid-item" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))} */}
                    <div className='grid-item'>
                        <img src="/images/kid-cake.avif"></img>
                    </div>
                    <div className='grid-item'>
                        <img src="/images/frame.avif"></img>
                    </div>
                    <div className='grid-item'>
                        <img src="/images/flowers.avif"></img>
                    </div>
                    <div className='grid-item'>
                        <img src="/images/plant.avif"></img>
                    </div>
                    <div className='grid-item'>
                        <img src="/images/bottle.avif"></img>
                    </div>
                    <div className='grid-item'>
                        <img src="/images/frame.avif"></img>
                    </div>
                    <div className='grid-item'>
                        <img src="/images/chocolates.avif"></img>
                    </div>
                    <div className='grid-item'>
                        <img src="/images/accessories-d.avif"></img>
                    </div>
                </div>
                <div className='discount-advertisement'>
                    <div className='advertisement'>
                        <img src="/images/mobik.avif"></img>
                    </div>
                </div>
                <div className='MH-section' style={{ alignItems: "center" }}>
                    <div className='Cakes'>Cakes</div>
                </div>
                <div className='col-14'>
                    <div className='dcfeo' >
                        Dreamy cakes for every occasion
                    </div>
                    <a>
                        <div className='view-all'>
                            VIEW ALL
                        </div>
                    </a>
                </div>
                <div className='cake-container Dreamy-cakes'>
                    {items.map((item, index) => (
                        <div className="grid-items" key={index}>
                            <div className='cake-image-wrapper'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                        </div>))}
                </div>
                {/* <div className='fc-section'>
                    <div className='row1'>
                        <h1 className='bestseller'>BestSellers</h1>
                        <div className="tab-container">
                            <div className={`col ${activetab === 'cakes' ? 'active' : ''}`}
                                onClick={() => setActivetab('cakes')}>
                                Cakes
                            </div>
                            <div className={`col ${activetab === 'flowers' ? 'active' : ''}`}
                                onClick={() => setActivetab('flowers')}>
                                Flowers
                            </div>
                        </div>
                        <button className="view-all-btn">VIEW ALL</button>
                    </div>
                    <div className='botomline'></div>

                    <div className='best-seller-carousel'>
                        {bestSellersStartIndex > 0 && (
                            <button className="left-arrows" onClick={handleBestSellersPrev}>
                                &#10094;
                            </button>
                        )}
                        {activetab === 'cakes' && (
                            <div className='cake-container'>
                                {visibleItems.map((item, index) => (
                                    <div className="grid-items" key={index}>

                                        <div className='cake-image-wrapper'>
                                            <Link to={`/product/${item.id}`}>
                                                <img src={item.image} alt={item.title} />
                                            </Link>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <div className='PR'>
                                            <p className='APrice'>&#8377;{item.ActualPrice}</p>

                                            <span className="rating">
                                                {item.rating} <span className="star">{'\u2606'}</span>
                                            </span>


                                        </div>
                                    </div>))}
                            </div>
                        )}
                        {activetab === 'flowers' && (
                            <div className='flower-container'>
                                {visibleItems.map((item, index) => (
                                    <div className="grid-items" key={index}>
                                        <div className='flower-image-wrapper'>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>))}
                            </div>
                        )}
                        {bestSellersStartIndex + visibleCount < totalItems && (
                            <button className="right-arrows" onClick={handleBestSellersNext}>
                                &#10095;
                            </button>

                        )}
                    </div>
                </div> */}
                <BestSeller />
                <div className='Trending_Gifts_Container'>
                    <div className='TG_titlesection'>
                        <div className='TGtitle' >
                            Trending Gifts
                        </div>
                        <a>
                            <div className='view-all'>
                                VIEW ALL
                            </div>
                        </a>
                    </div>
                    <div className='best-seller-carousel'>
                        {trendingStartIndex > 0 && (
                            <button className="left-arrows" onClick={handleTrendingPrev}>
                                &#10094;
                            </button>
                        )}
                        <div className="TrendingG-Card">
                            {trending_visible_Items.map((item, index) => (
                                <div className="grid-items" key={index}>
                                    <div className="image-wrapper">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                        {trendingStartIndex + visibleCount < Trending_Items.length && (
                            <button className="right-arrows" onClick={handleTrendingNext}>
                                &#10095;
                            </button>
                        )}
                    </div>
                </div>
                <div className='gift-respect-to-gender'>
                    <div className='gift-for-him'>
                        <img src='/images/giftforhim.avif'></img>
                    </div>
                    <div className='gift-for-her'>
                        <img src='/images/giftsforher.avif'></img>
                    </div>
                </div>
                <div className='More-info-about-deliveryrelated'>
                    <div className='PTSSI'>
                        <div className='slotsltimg-left'>
                            <img src='/images/preferred-time-slot-selection.avif'></img>

                        </div>
                        <div className='PSLHeading'>
                            Preferred Time
                            <span>Slot Selection</span>
                        </div>
                    </div>
                    <div className='PTSSI'>
                        <div className='slotsltimg-left'>
                            <img src='/images/delivery-in-cities.avif'></img>

                        </div>
                        <div className='PSLHeading'>
                            Delivery in 700+
                            <span>Cities</span>
                        </div>
                    </div>
                    <div className='PTSSI'>
                        <div className='slotsltimg-left'>
                            <img src='/images/twenty-million-people-trust-us.avif'></img>

                        </div>
                        <div className='PSLHeading'>
                            20 Million People
                            <span>Trust Us</span>
                        </div>
                    </div>
                    <div className='PTSSI'>
                        <div className='slotsltimg-left'>
                            <img src='/images/pincodes-serviced-till-date.avif'></img>

                        </div>
                        <div className='PSLHeading'>
                            18000+ Pincodes
                            <span>Serviced Till Date</span>
                        </div>
                    </div>
                </div>
                <div className='MH-section' style={{ alignItems: "center" }}>
                    <div className='GC'>Gift Categories</div>
                </div>
                <div className='gift_Categories'>
                    <div className='gift_categories_section'>
                        {Gift_Categories.map((item, index) => (
                            <div className='grid-items' key={index}>
                                <img src={item.images}></img>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='MH-section' style={{ alignItems: "center" }}>
                    <div className='IGD'>International Gifts Delivery</div>
                </div>
                <div className='ICN'>
                    {International_City_Names.map((item, index) => (
                        <div className='gridICN'>
                            <img src={item.image}></img>
                            <div>
                                <h3>{item.title}</h3>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='service_Experience_Banner'>
                    <img src='/images/International_City_Names_Image/service-and-experience-banner-desktop-images.avif'></img>
                </div>
                <Footer></Footer>

            </div>
            <Mobile_Navbar_bottom></Mobile_Navbar_bottom>

        </div>
    )
}

export default Home