 import { Container,  Heading, SimpleGrid, Divider } from '@chakra-ui/react';
 import Section from '../components/section';
 import { WorkGridItem } from '../components/grid-item';
 import Layout from '../components/layouts/article';
 import thumbUbec from '../public/images/works/ubec.jpg';
 import thumbWalknote from '../public/images/works/food-app.jpg';
 import thumbWhackmole from '../public/images/works/whack-mole.jpg';
 import thumbAllanturing from '../public/images/works/allanturing.jpg';



  const Works = () => {
      return (
         <Layout>
          <Container>
              <Heading as="h3" fontSize={20} mb={4}>
                    Works
              </Heading>

             <SimpleGrid columns={[1,1,2]} gap={6}>
                  <Section>
                      <WorkGridItem id="allanturing"
                                title="allan turing"
                                thumbnail={thumbAllanturing}>
                            A Company Website
                      </WorkGridItem>  
                  </Section>
                  <section>
                      <WorkGridItem id="foodapp"
                                 title="food app"
                                 thumbnail={thumbWalknote}>
                            A Web App for displaying different varieties of food
                      </WorkGridItem>
                  </section>
                  <section>
                      <WorkGridItem id="molegame"
                                 title="Whack a Mole Game"
                                 thumbnail={thumbWhackmole}>
                            A game where you whack a mole
                      </WorkGridItem>
                  </section>
                  <section>
                      <WorkGridItem id="ubec"
                                 title="ubec"
                                 thumbnail={thumbUbec}>
                            A UBEC Work Management web application
                      </WorkGridItem>
                  </section>
             </SimpleGrid>   
          </Container>
         </Layout>
      )
  }



  export default Works;