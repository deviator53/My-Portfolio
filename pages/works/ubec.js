import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="ubec">
            <Container>
                <Title>
                    UBEC <Badge>2022</Badge>
                </Title>
                <P>
                    A UBEC Management Workflow App.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://uwd.vercel.app/' target='_blank'>
                        https://uwd.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/IOS/Android</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, ReactJS, MaterialUI, ExpressJS, MongoDB</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/ubec.jpg" alt="ubec" />
            </Container>
        </Layout>
    )
}



export default Work;