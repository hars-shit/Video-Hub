import { Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {AiFillApple} from 'react-icons/ai'
import { Link } from "react-router-dom";

function Login(){
    return(
   <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
    <form>
      
      {/* login form data  */}
        <VStack alignItems={'stretch'}  w={['full','96']} m={'auto'} my={'16'}>
            <Heading>Log in</Heading>
            <Text  >Stay updated on your professional world</Text>
            
              {/* this stack is  for receiving input for user*/}
            <VStack spacing={'4'}>
            <Input m={'8'}  required placeholder="Email or Phone" type={'email'} focusBorderColor={'purple.500'} />
            <Input required placeholder="Password" type={'password'} focusBorderColor={'purple.500'}/>
            <Button alignSelf={'flex-end'} variant={'link'}>
                <Link to={'/forgetPassword'}>Forget password?</Link>
            </Button>
            <Button backgroundColor={'purple.900'} color={'white'} border={'20px solid none'}  w={"full"}>Log in</Button>
            <Text  >or</Text>
            <Button  color={'GrayText'} border={'20px solid none'}  w={"full"}><AiFillApple size={'25'} /> Log in with Apple</Button>
        </VStack>
        </VStack>
    </form>

   </Container>
    );
}
export default Login;
