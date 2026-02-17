import React from "react";
import {
    Link
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Trending_Gifts, itemsf, Gift_Categories, International_City_Names } from "./Data";

function BestSeller() {
    const [activetab, setActivetab] = useState('cakes')
    const [current, setCurrent] = useState(0);

    const items = [
        {
            id: "120",
            image: "/images/cake1.avif",
            title: "Photo Cakes",
            description: "For special occasions",
            rating: "4.5",
            ActualPrice: "999",
            DPrice: "599",
        },
        {
            id: "121",

            image: "/images/cake2.avif",
            title: "Roses",
            description: "Love in every petal",
            rating: "5",
            ActualPrice: "999",
            DPrice: "599",
        },
        {
            id: "122",

            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake3.avif",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",

        },
        {
            id: "123",

            title: "Water Bottles",
            description: "Your Daily Dose of Hydration",
            image: "/images/kid-cake.avif",
            ActualPrice: "999",
            DPrice: "599",
            rating: "5",
        },
        {
            id: "124",

            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake5.webp",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },
        {
            id: "125",

            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake6.webp",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },
        {
            id: "126",

            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake7.jpeg",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },
        {
            id: "127",

            title: "Best Seller Plants",
            description: "Experience Pure Serenity",
            image: "/images/cake8.avif",
            ActualPrice: "999",
            DPrice: "599",
            rating: "3.9",
        },


    ];
    const images = [
        '/images/1743999334095.avif',
        '/images/1745928065984.webp',
        "/images/1745219509909.avif",
        "/images/1740983560968.avif"


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
    // const Trending_Items = Trending_Gifts;
    // const trending_visible_Items = isMobile ? Trending_Items : Trending_Items.slice(trendingStartIndex, trendingStartIndex + visibleCount);


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


    // const handleTrendingNext = () => {
    //     if (trendingStartIndex + visibleCount < Trending_Items.length) {
    //         setTrendingStartIndex((prev) => prev + 1);
    //     }
    // };

    // const handleTrendingPrev = () => {
    //     if (trendingStartIndex > 0) {
    //         setTrendingStartIndex((prev) => prev - 1);
    //     }
    // };

    useEffect(() => {
        setBestSellersStartIndex(0);
    }, [activetab]);

    return (
        <div className='fc-section'>
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
        </div>
    )
}
export default BestSeller;