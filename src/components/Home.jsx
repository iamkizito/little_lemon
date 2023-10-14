import { useEffect, useState } from "react";
import { Skeleton, SkeletonCircle, SkeletonText, Stack, Box} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import paths from "../paths";
import { Link } from 'react-router-dom';

import '../assets/styles/home.css';

const hero_props = {
    title: 'Little Lemon',
    location: 'Canada',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam sunt non pariatur voluptatum repellat quos obcaecati?',
    imageSrc: require("../assets/images/restauranfood.jpg")
}

const about_props = {
    ...hero_props,
    imageSrc1: require("../assets/images/restauranfood.jpg"),
    imageSrc2: require("../assets/images/restauranfood.jpg"),
}

const highlights = [
    {
        imageSrc: require("../assets/images/greek salad.jpg"),
        title: "Greek sald",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        imageSrc: require("../assets/images/bsd.png"),
        title: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        imageSrc: require("../assets/images/lemon dessert.jpg"),
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
]

const testimonials = [
    {
        rating: 3,
        imageSrc: require("../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
    {
        rating: 2,
        imageSrc: require("../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
    {
        rating: 5,
        imageSrc: require("../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
    {
        rating: 5,
        imageSrc: require("../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
]



const Home = ({setActive}) => {
    useEffect(() => {
        setActive('home')
    }, [])

    return (
        <>
        <HeroSection data={hero_props}/>
        <HighlightsSection/>
        <TestimonialsSection/>
        <AboutSection data={about_props}/>
        </>
    )
}

export default Home;




const HeroSection = ({data}) => {

    return (
        <section id="hero">
            <div className="wrapper">
                <div className="content">
                    <h1>{data.title}</h1>
                    <p className="location">{data.location}</p>
                    <p className="description">{data.description}</p>
                    <Link to={paths.reservation} role="button" className="button">Reserve a Table</Link>
                </div>
                <div className="image">
                    <img src={data.imageSrc} alt="title image" /> 
                </div>
            </div>
        </section>
    )
}


const HighlightsSection = ({setActive}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const handleButtonClick = () => {
        setActive('menu');
    }

    useEffect(() => {
        const getHighlights = () => {
            setLoading(true)
            setTimeout(() => {
                setData(highlights)
                setLoading(false)
            }, 1000)
        }

        getHighlights()
    }, [])

    return (
        <section id="highlights">
            <div className="wrapper">
                <div className="heading">
                    <h1>Specials</h1>
                    <Link to={paths.menu} role="button" className="button">Online Menu</Link>
                </div>
                <div className="cards">
                    {loading && (
                        <>
                            <Skeleton flex={1} height={300}/>
                            <Skeleton flex={1} height={300}/>
                            <Skeleton flex={1} height={300}/>
                        </>
                    )}
                    {!loading && data && data.map((special, index) => {
                        return (
                            <Card 
                                key={index}
                                imageSrc={special.imageSrc}
                                title={special.title}
                                description={special.description}
                                price={special.price}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


const Card = ({imageSrc, title, description, price}) => {
    return (
        <div className="card">
            <div className="image">
                <img src={imageSrc} alt={`${title} image`} />
            </div>
            <div className="content">            
                <div className="heading">
                    <div className="title">{title}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="description">{description}</div>
                <div className="order">Order a delivery</div>
            </div>
        </div>
    )
}


const TestimonialsSection = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getTestimonials = () => {
            setLoading(true)
            setTimeout(() => {
                setData(testimonials)
                setLoading(false)
            }, 1000)
        }

        getTestimonials()
    }, [])

    return (
        <section id="testimonials">
            <div className="wrapper">
                <h1>Testimonials</h1>
                <div className="testimonials">
                    {loading && (
                        <>
                            <Skeleton flex={1} height={100}/>
                            <Skeleton flex={1} height={100}/>
                            <Skeleton flex={1} height={100}/>
                            <Skeleton flex={1} height={100}/>
                        </>
                    )}
                    {!loading && data && data.map((testimonial, index) => {
                        return (
                            <Testimonial
                                key={index}
                                name={testimonial.name}
                                imageSrc={testimonial.imageSrc}
                                rating={testimonial.rating}
                                review={testimonial.review}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


const Testimonial = ({name, imageSrc, rating, review}) => {
    const maxStar = 5

    return (
        <div className="testimonial">
            <div className="rating">
                {Array.from({length: maxStar}, (_, index) => {
                    let starred = index < rating
                    return (
                        <FontAwesomeIcon key={index} icon={faStar}  className={starred ? 'starred' : ''}/>
                    ) 
                })}
            </div>
            <div className="customer">
                <div className="image">
                    <img src={imageSrc} alt="customer image" />
                </div>
                <div className="name">{name}</div>
            </div>
            <div className="review">{review}</div>
        </div>
    )
}


const AboutSection = ({data}) => {
    return (
        <section id="about">
            <div className="wrapper">
                <div className="content">
                    <div className="title">{data.title}</div>
                    <div className="location">{data.location}</div>
                    <div className="description">{data.description}</div>
                </div>
                <div className="images">
                    <div className="image image1">
                        <img src={data.imageSrc1} alt="owner's image1" />
                    </div>
                    <div className="image image2">
                        <img src={data.imageSrc2} alt="owner's image2" />
                    </div>
                </div>
            </div>
        </section>
    )
}