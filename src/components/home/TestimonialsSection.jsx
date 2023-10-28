import { useEffect, useState } from "react";
import { Skeleton } from '@chakra-ui/react';
import TestimonialCard from "./TestimonialCard";
import SectionContainer from "../SectionContainer";



const testimonials_data_sample = [
    {
        rating: 3,
        imageSrc: require("../../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
    {
        rating: 2,
        imageSrc: require("../../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
    {
        rating: 5,
        imageSrc: require("../../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
    {
        rating: 5,
        imageSrc: require("../../assets/images/restauranfood.jpg"),
        name: 'Little Lemon',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in laborum ratione quam',
    },
]


const TestimonialsSection = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getTestimonials = () => {
            setLoading(true)
            setTimeout(() => {
                setData(testimonials_data_sample)
                setLoading(false)
            }, 1000)
        }

        getTestimonials()
    }, [])

    return (
        <section id="testimonials" data-testid="testimonials_component">
            <SectionContainer className="wrapper">
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
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                imageSrc={testimonial.imageSrc}
                                rating={testimonial.rating}
                                review={testimonial.review}
                            />
                        )
                    })}
                </div>
            </SectionContainer>
        </section>
    )
}


export default TestimonialsSection;