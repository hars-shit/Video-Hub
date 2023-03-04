import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function Upload() {
  return (
    <Container maxW={'container.xl'} h={'90vh'} p={'16'}>
      <VStack color={'purple.500'}  justifyContent={'center'} py={'28'}>
        {/* upload icon  */}
        <AiOutlineCloudUpload size={'10vmax'} />
      </VStack>
      <form >
        <HStack   justifyContent={'center'}>
          <Input
            required
            type={'file'}
        py={'1'} w={"-moz-max-content"}
       alignItems={"center"}
     
          />
          <Button >Upload</Button>
        </HStack>
      </form>
    </Container>
  );
}
export default Upload;
