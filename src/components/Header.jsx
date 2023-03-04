import React from 'react';
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {

    // useClosure used for handle open,close,toggle.
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        p={'0'}
        w={'10'}
        h={'10'}
        zIndex={'overlay'}
        colorScheme={'purple'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement={'left'} w={'4'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>

               {/* VStack(verical)-> display flex ,iteam-center   */}
            <VStack alignItems={"flex-start"}>

              {/* for  button with thier respective links */}

              <Button  colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Videos'}>Videos</Link>
              </Button>

              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Upload'}>Upload</Link>
              </Button>

 
            </VStack> 
            <HStack 
            pos={"absolute"} 
            bottom={"10"} 
            left={"0"}
            width={"full"}
            justifyContent={"space-evenly"}
            >
        <Button colorScheme={'purple'} onClick={onClose}>
            <Link to={'/LogIn'}>Log In</Link>
        </Button>
        <Button colorScheme={'purple'} variant={'outline'} onClick={onClose}>
            <Link to={"SignUp"}>Sign Up</Link>
        </Button>

            </HStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Header;
