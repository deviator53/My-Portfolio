 import { Container,  Heading, SimpleGrid, Divider } from '@chakra-ui/react';
 import Section from '../components/section';
 import { WorkGridItem } from '../components/grid-item';
 import Layout from '../components/layouts/article';
 import thumbInkdrop from '../public/images/works/waaw-chat.jpg';
 import thumbWalknote from '../public/images/works/food-app.jpg';
 import thumbWhackmole from '../public/images/works/whack-mole.jpg';
 import thumbEcommerce from '../public/images/works/brumis-ecommerce.jpg';


  const Works = () => {
      return (
         <Layout>
          <Container>
              <Heading as="h3" fontSize={20} mb={4}>
                    Works
              </Heading>

             <SimpleGrid columns={[1,1,2]} gap={6}>
                  <Section>
                      <WorkGridItem id="waawchat"
                                title="waaw chat"
                                thumbnail={thumbInkdrop}>
                            A Social Media App
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
                      <WorkGridItem id="ecommerce"
                                 title="E-commerce web application"
                                 thumbnail={thumbEcommerce}>
                            A E-commerce web application
                      </WorkGridItem>
                  </section>
             </SimpleGrid>   
          </Container>
         </Layout>
      )
  }



  export default Works;