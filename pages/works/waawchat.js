import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/Layouts/article';

const Work = () => {
    return (
        <Layout title="waaw chat">
            <Container>
                <Title>
                    waaw chat <Badge>2021</Badge>
                </Title>
                <P>
                    A Social Media App with CRUD(Create, Read, Update and Delete) Functionalities.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://waawchat.herokuapp.com/' target='_blank'>
                            https://waawchat.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/IOS/Android</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Ejs, Bootstrap, ExpressJS, MongoDB</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/waaw-chat.jpg" alt="waaw chat" />
                <WorkImage src="/images/works/waaw-chat2.jpg" alt="waaw chat" />

            </Container>
        </Layout>
    )
}



export default Work;