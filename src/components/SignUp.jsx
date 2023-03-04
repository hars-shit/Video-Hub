import { Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from 'react-icons/fa';
function SignUp(){
    return(
<Container maxW={'container.xl'} h={'100vh'} p={'16'} >
    <form >
      { /* login form data  */}
        <VStack alignItems={'stretch'}  w={['full','96']} m={'auto'} my={'16'} >
            <Heading color={'white'}>Sign Up</Heading>
            <Text color={'white'}>Make the most of your professional life</Text>

            {/* for input and text */}
            <VStack spacing={'4'} py={"8"}>
            <Text color={'white'} alignSelf={'flex-start'}>First name</Text>
            <Input />
            <Text color={'white'} alignSelf={'flex-start'}>Last name</Text>
            <Input />
            <Text color={'white'} alignSelf={'flex-start'}>Email</Text>
            <Input />
            <Text color={'white'} alignSelf={'flex-start'}>Password(6 or more characters)</Text>
            <Input />
            <Button colorScheme={'purple'} w={"full"}>Join now</Button>
            <Text color={'white'}>or</Text>
            <Button w={'full'}>< FaFacebookF/> Continue with Facebook</Button>
            </VStack>
        </VStack>
    </form>

</Container>
    );
}
export default SignUp;