import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navLinks } from './Header';
import DrawerNavLink from './DrawerNavLink';
import { useRef } from 'react';
import { Button } from '@chakra-ui/react';
import { colorPallete as cp } from "../variables";


const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button ref={btnRef} bg={cp.primary1} color="white" onClick={onOpen}>
          <FontAwesomeIcon icon={faBars}/>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
  
            <DrawerBody display="block"> 
                {navLinks.map((navLink, index) => {
                    return (                          
                        <DrawerNavLink key={index} to={navLink.url} close={onClose} data-testid={`${navLink.name}_nav`}> 
                            {navLink.name[0].toUpperCase() + navLink.name.slice(1).toLowerCase()}
                        </DrawerNavLink>
                    )              
                })}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default DrawerNav;