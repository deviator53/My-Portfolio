import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="allan turing">
            <Container>
                <Title>
                    Allan Turing <Badge>2022</Badge>
                </Title>
                <P>
                    A company website built with react.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.alanturingcodes.com/' target='_blank'>
                        https://www.alanturingcodes.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/IOS/Android</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ReactJS, ExpressJS, MongoDB, NodeJS</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/allanturing2.jpg" alt="allan turing" />
                <WorkImage src="/images/works/allanturing3.jpg" alt="allan turing" />

            </Container>
        </Layout>
    )
}



export default Work;