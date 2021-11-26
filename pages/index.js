import { Container, Link, SimpleGrid, Button, Box, Heading, Image, useColorModeValue, List, ListItem, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection , BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item';
import {
    IoLogoFacebook,
    IoLogoGithub, 
    IoLogoLinkedin,
    IoMail
} from 'react-icons/io5';

const Page = () =>{
    return(
      <Layout>
        <Container>
           <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
               Hello, I&apos;m a MERN Stack developer based in Nigeria!!
           </Box>

           <Box display={{md:'flex'}}>
               <Box flexGrow={1}>
                   <Heading as="h2" variant="page-title">
                        David Bradford
                   </Heading>
                   <p align="center">Developer( Designer, Writer, Sportsman )</p>
               </Box>
               <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                   <Image 
                         borderColor="whiteAlpha.800"
                         borderWidth={2}
                         borderStyle="solid"
                         width = "150px"
                         height = "150px"
                         display="inline-block"
                         borderRadius="full"
                         src="/images/david.jpg"
                         alt="profile Image"
                          />
               </Box>

           </Box>
           <Section delay={0.1}>
              <Heading mb={3} as="h3" variant="section-title">
                  Intro
              </Heading>
              <Paragraph>
                  David is a freelancer and a MERN Stack developer based in
                  Abuja, Nigeria with a passion for building/developing software and
                  web solutions. He has a knack for all things launching products, from
                  planning and designing all the way to solving real-life problems with code.
                  When not online, he loves watching football.   

              </Paragraph>
              <Box align="center" my={4}>
                <NextLink href="/works">
                   <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                       My Portfolio
                   </Button>
                </NextLink>
              </Box>
           </Section>

            <Section delay={0.2}>
                <Heading mb={3} as="h3" variant="section-title">
                    Bio
                </Heading>

                <BioSection>
                   <BioYear>2021 to present</BioYear>
                   Software Developer at WAAW Foundation
                </BioSection>

                <BioSection>
                   <BioYear>2021</BioYear>
                   Completed Masters Degree Program in Information Technology at National Open University of Nigeria
                </BioSection>

                <BioSection>
                   <BioYear>2018 to present</BioYear>
                   Work as a Freelance Developer
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" mb={3} variant="section-title">
                I ♥
                </Heading>
                <Paragraph>
                Sports, Music, Chess, IT Innovation, Web Development
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" mb={3} variant="section-title">
                    On the Web
                </Heading>
                <List>
                    <ListItem>
                      <Link href="https://github.com/deviator53" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@deviator53</Button>
                      </Link>
                      
                    </ListItem>

                    <ListItem>
                      <Link href="https://www.linkedin.com/in/david-bradford-651769160/" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>David Bradford</Button>
                      </Link>
                      
                    </ListItem>
                    
                    <ListItem>
                      <Link href="https://www.facebook.com/david.bradford.96/" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook}/>}>David Bradford</Button>
                      </Link>
                      
                    </ListItem>
                    
                    <ListItem>
                      <Link href="mailto: bradforddavid082@gmail.com" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail}/>}>bradforddavid082@gmail.com</Button>
                      </Link>
                      
                    </ListItem>
                </List>

                <SimpleGrid columns={[1,2,2]} gap={6}>

                </SimpleGrid>
            </Section>
        </Container>
      </Layout>
    )
}
export default Page;