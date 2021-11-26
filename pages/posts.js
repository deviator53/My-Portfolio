import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import thumbProductiveApp from '../public/images/contents/productive-app.png';

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="Best Productive App" thumbnail={thumbProductiveApp}
                              href="https://www.operanewsapp.com/ng/en/share/detail?news_id=a372d74accc18e2521cf6cdb7714aa25&news_entry_id=s34eaa17e210503en_ng&open_type=tanscoded&request_id=bd116f2357d6c93e493530f2b4c9445e5adbce1c&from=publisher"
                               />


                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)




export default Posts;