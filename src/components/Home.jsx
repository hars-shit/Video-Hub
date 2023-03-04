import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

// /home/harshit/Desktop/React/two/src/assets/1.jpg

const Home = () => {
  const headingOptions = {
    // styling
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    p: '4',
    size: '4xl',
  };
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {/* Carousel attached within the images */}

        <Box w={'full'} h={'100vh'}>
          <Image src={img1} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img2} />
          <Heading
            bgColor={'whiteAlpha.900'}
            color={'black'}
            {...headingOptions}
          >
            Future is Gaming
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img3} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Gaming on Console
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img4} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Night Life is Cool
          </Heading>
        </Box>
      </Carousel>
     
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['40', '400']}  />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} alignItems={'center'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit,
            culpa fugit velit libero cumque eaque eos maxime illo vitae ex,
            omnis, praesentium et vel consequuntur deserunt ea vero est! Sit cum
            incidunt culpa consequatur tenetur doloremque aliquam nemo. Ab
            deserunt laudantium quos, commodi corrupti voluptatibus aperiam,
            impedit repudiandae in reiciendis repellat cum assumenda quia!
            Commodi, molestiae. Blanditiis recusandae distinctio itaque quos
            numquam facere dicta perferendis, fuga eveniet? Ducimus sed facilis
            sapiente. Eum, dolor assumenda consequuntur nesciunt quos expedita
            illo sint, architecto qui porro dolorum iusto neque! Perspiciatis
            qui iste deserunt voluptatibus quasi totam excepturi aut quaerat,
            eveniet necessitatibus maxime assumenda natus sequi vel minus
            suscipit nemo eaque nesciunt rerum. Placeat quam animi ipsum facilis
            nihil nulla quo at cum dolores exercitationem inventore vitae vero
            architecto repellendus, veritatis, molestias quos perferendis
            tempora? Pariatur accusantium quos ipsa nihil quisquam
            recusandae eum voluptates quis, totam expedita qui debitis adipisci
            facilis est nulla!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
