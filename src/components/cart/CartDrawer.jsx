import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import CartButton from './CartButton';
import Cart from './Cart';
import { useBreakpointValue } from '@chakra-ui/react';


const CartDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
	const placement = useBreakpointValue({ base: 'left', md: 'right' });
  
    return (
      <>
		<CartButton className="drawer-trigger" onClick={onOpen}/>

        <Drawer
			isOpen={isOpen}
			placement={placement}
			onClose={onClose}
			finalFocusRef={btnRef}
			className="drawer"
			size="lg"
			
        >
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Your Cart Items</DrawerHeader>

				<DrawerBody display="block"> 
					<Cart/>
				</DrawerBody>
			</DrawerContent>
        </Drawer>
      </>
    )
}

export default CartDrawer;