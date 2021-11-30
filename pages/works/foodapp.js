import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="food app">
            <Container>
                <Title>
                    food app <Badge>2020</Badge>
                </Title>
                <P>
                    This is a website that shows various collection of foods in different cultures.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://deviator53.github.io/FoodWebsite/' target='_blank'>
                        https://deviator53.github.io/FoodWebsite/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/IOS/Android</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Html, Css, Javascript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/food-app.jpg" alt="food app" />
                <WorkImage src="/images/works/food-app2.jpg" alt="food app" />

            </Container>
        </Layout>
    )
}



export default Work;