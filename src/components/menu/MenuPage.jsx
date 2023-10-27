import { useEffect } from "react";
import MealCard from "./MealCard";
import Main from "../Main";
import SectionContainer from "../SectionContainer";
import { Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import '../../assets/styles/menuPage.css'



const mealsFromServer = [
    {
        imageSrc: require("../../assets/images/greek salad.jpg"),
        title: "Greek sald",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        imageSrc: require("../../assets/images/bsd.png"),
        title: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    // {
    //     imageSrc: require("../../assets/images/lemon dessert.jpg"),
    //     title: "Lemon Dessert",
    //     price: "$5.00",
    //     description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    // },
]

const MenuPage =({setActive}) => {
    useEffect(() => {
        setActive('menu')
    }, [])

    const categories = ["Appetizers", "Soups", "Main courses", "Pizza", "Dessert", "Drinks"]

    const [category, setCategory] = useState(categories[0])
    const { meals, loading, error } = useMenuCategory(category)

    useEffect(() => {
        console.log(meals)
    }, [meals])

    return (
        <Main id="menu_page" data-testid="menu_page_component">
            <section className="categories_section">
                <SectionContainer className="container">
                    <div className="categories">
                        {categories.map((item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className={`category ${category == item ? 'active': ''}`}
                                    onClick={() => setCategory(item)}
                                >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </SectionContainer>
            </section>

            <section className="meals_section">
                <SectionContainer className="container">
                    <div className="meals">
                        {loading && <MealCardsSkeleton/>}

                        {!loading && meals && meals.map((meal, index) => {
                            return (
                                <MealCard
                                    key={meal.id}
                                    imageSrc={meal.imageSrc}
                                    title={meal.title}
                                    description={meal.description}
                                    price={meal.price}          
                                />
                            )
                        })}
                    </div>
                </SectionContainer>
            </section>
        </Main>
    )
}

export default MenuPage;



export const useMenuCategory = (category) => {
    const [meals, setMeals] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getMealsFromServer = () => {
        let new_meals = []
        for (let i=0; i < 5; i++) {
            new_meals = new_meals.concat(mealsFromServer)
        }
        return new_meals
    }

    useEffect(() => {
        const getData = () => {
            setLoading(true)
            setTimeout(() => {
                let response = {
                    status:'success',
                    message: 'Your reservation has been booked successfully',
                    data: getMealsFromServer()
                }
                setMeals(response.data)
                setLoading(false)
            }, 1000)
        }

        getData()
    }, [category])

    return { meals, loading, error }
}


const MealCardsSkeleton = () => {
    const count = 10

    return (
        Array.from({length: count}, () => {
            return (
                <Skeleton width={250} height={350} borderRadius={16}/>
            )
        })
    )
}