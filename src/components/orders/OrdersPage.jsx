import { useEffect, useState } from "react";
import Order from "./Order";
import Main from "../Main";
import SectionContainer from "../SectionContainer";
import { Box, Flex, Button, Skeleton } from "@chakra-ui/react";



const OrdersPage = ({setActive}) => {
    useEffect(() => {
        setActive('orders')
    }, [])

    const categories = ["All", "Completed", "Pending", "Cancelled"]
    const [category, setCategory] = useState(categories[0])
    const {orders, loading, error } = useOrdersCategory(category)
 
    const primaryColor1 = "#495E57";
    const primaryColor2 = "#F4CE14";

    return (
        <Main id="orders_page" data-testid="orders_page_component" minHeight="900px">

            <Box as='section' className="categories_section" marginBottom="30px">
                <SectionContainer className="container">
                    <Flex className="categories">
                        {categories.map((item, index) => {
                            return (
                                <Box 
                                    flex={1}
                                    textAlign="center"
                                    padding="5px"
                                    key={index} 
                                    backgroundColor = {category === item ? primaryColor2: ''}
                                    onClick={() => setCategory(item)}
                                >
                                    {item}
                                </Box>
                            )
                        })}
                    </Flex>
                </SectionContainer>
            </Box>

            <Box as="section" className="meals_section">
                <SectionContainer className="container">
                    <Flex className="meals" direction="column" gap="20px">
                        {loading && <OrdersSkeleton/>}

                        {!loading && orders && orders.map((order, index) => {
                            return (
                                <Order
                                    key={order.id}
                                    id={order.id}
                                    date={order.date}
                                    time={order.time}
                                    imageSrc={order.imageSrc}
                                    title={order.title}
                                    price={order.price}          
                                    status={order.status}          
                                />
                            )
                        })}

                        {!loading && orders && orders.length === 0 && 
                            <Flex justify="center" marginTop="100px"> 
                                No orders found
                            </Flex>
                        }
                    </Flex>
                </SectionContainer>
            </Box>

        </Main>
    )
}

export default OrdersPage;



const InitialOrdersFromServer = [
    {
        id: 1,
        date: '2023-10-18',
        time: '04:00',
        imageSrc: require("../../assets/images/greek salad.jpg"),
        title: "Greek sald",
        price: "12.99",
        status: "completed"
    },
    {
        id: 2,
        date: '2023-10-24',
        time: '18:00',
        imageSrc: require("../../assets/images/bsd.png"),
        title: "Bruchetta",
        price: "5.99",
        status: "pending"
    },
]


const useOrdersCategory = (category) => {
    const [orders, setOrders] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = () => {
            setLoading(true)
            setTimeout(() => {
                setOrders(InitialOrdersFromServer)
                setLoading(false)
            }, 1000)
        }

        getData()
    }, [category])

    return {orders, loading, error}
}



const OrdersSkeleton = () => {
    const count = 5

    return (
        Array.from({length: count}, () => {
            return (
                <Skeleton marginBottom="20px" width="100%" height={100} borderRadius={16}/>
            )
        })
    )
}