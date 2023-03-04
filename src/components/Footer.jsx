import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

import { AiOutlineSend } from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'}>
          <Heading size={'md'} textAlign={"center"}>SUBSCRIBE TO GET UPDATES</Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            {/* For entering email  */}
            <Input
              placeholder="Enter Email Here..."
              type={'email'}
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            ></Input>

            {/* Submitting the email entered */}
            <Button
              p={'0'}
              colorScheme={'purple'}
              color={'white'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        {/* second division in footer  */}
        <VStack
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          w={'full'}
        >
          <Heading alignItems={'center'}>VIDEO HUB</Heading>
          <Text>ALL RIGHT RESERVED</Text>

          {/* third division in footer  */}
        </VStack>

        <VStack w={'full'} >
          <Heading alignItems={'center'}>SOCIAL MEDIA</Heading>
          <HStack>
          <a href="/" >
            <FaFacebookF size={'25'}/>
          </a>
          <a href="/">
            <AiFillGithub size={'25'}/>
          </a>
          <a href="/">
            <AiOutlineInstagram size={'25'}/>
          </a>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}
export default Footer;
