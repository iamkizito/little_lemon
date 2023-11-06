import { useEffect, useRef } from "react";
import MealCard from "./MealCard";
import Main from "../Main";
import SectionContainer from "../SectionContainer";
import CategoryButton from "./CategoryButton";
import CategoryScrollXButton from "./CategoryScrollXButton";
import { Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { Flex, Box, Grid } from "@chakra-ui/react";
import { colorPallete as cp } from "../../variables";



const MenuPage =({setActive}) => {
    const categoryScrollerRef = useRef(null)

    useEffect(() => {
        setActive('menu')
    }, [])

    const categories = ["Appetizers", "Soups", "Main courses", "Pizza", "Dessert", "Drinks"]

    const [category, setCategory] = useState(categories[0])
    const { meals, loading, error } = useMenuCategory(category)

    return (
        <Main id="menu_page" data-testid="menu_page_component"
            minHeight="800px"
            paddingBottom="100px"
        >
            <Flex as="section" className="categories_section"
                position="relative"
                bg={cp.primary1}
                marginBottom="50px"
                padding="20px"
            >
                <Flex className="scrollwrapper" ref={categoryScrollerRef}
                    flex={1}
                    overflowX={{base:"scroll", md:""}}
                    sx ={{
                        "&::-webkit-scrollbar": {
                            display: 'none',
                        },
                    }}
                >
                    <SectionContainer className="container"
                        flex={1}
                        display="flex"
                        justifyContent="center"          
                    >
                        <Flex className="categories" justify="space-between" gap="10px">
                            {categories.map((item, index) => {
                                return (
                                    <CategoryButton
                                        key={index} 
                                        categoryName={item}
                                        setCategory={setCategory}
                                        activeCategory={category}
                                    />
                                )
                            })}
                        </Flex>
                    </SectionContainer>
                </Flex>
                <CategoryScrollXButton direction="left" elementRef={categoryScrollerRef}/>
                <CategoryScrollXButton elementRef={categoryScrollerRef}/>
            </Flex>

            <Box as="section" className="meals_section">
                <SectionContainer className="container"
                    flex={1}
                    display="flex"
                    justifyContent="center"
                >
                    <Grid className="meals"
                        gridTemplateColumns={{base: "1fr", md:"repeat(3, 1fr)"}}
                        gap="60px"
                    >
                        {loading && <MealCardsSkeleton/>}

                        {!loading && meals && meals.map((meal, index) => {
                            return (
                                <MealCard
                                    key={meal.id}
                                    id={meal.id}
                                    imageSrc={meal.imageSrc}
                                    title={meal.title}
                                    description={meal.description}
                                    price={meal.price}          
                                />
                            )
                        })}
                    </Grid>
                </SectionContainer>
            </Box>
        </Main>
    )
}

export default MenuPage;



const mealsFromServer = [
    {
        id: 1,
        imageSrc: require("../../assets/images/greek salad.jpg"),
        title: "Greek sald",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: 2,
        imageSrc: require("../../assets/images/bsd.png"),
        title: "Bruchetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    // {
    //     id: 3,
    //     imageSrc: require("../../assets/images/lemon dessert.jpg"),
    //     title: "Lemon Dessert",
    //     price: "5.00",
    //     description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    // },
]




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
        <>
        {Array.from({length: count}, (index) => {
            return (
                <Skeleton key={index} width={{base:370, md:250}} height={{base:170, md:350}} borderRadius={16}/>
            )
        })}
        </>
    )
}