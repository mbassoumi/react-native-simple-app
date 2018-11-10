import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
    Container,
    Header,
    Footer,
    Content,
    Text,
    Title,
    Left,
    Right,
    Body,
    Button,
    Icon,
    FooterTab,
    Card,
    CardItem
} from 'native-base';

export default class PageTwo extends Component {

    render() {
        return (
            <Container>
                <Header>
                    {/*<Left>
                        <Button transparent onPress={() => {Actions.pop()}}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>*/}
                    <Body>
                    <Title>
                        Page Two
                    </Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>
                                This is Page Two
                            </Text>
                        </CardItem>
                    </Card>
                </Content>

                {/*<Footer>
                    <FooterTab>
                        <Button onPress={() => {Actions.page_one()}}>
                            <Text>Page One</Text>
                        </Button>
                        <Button active>
                            <Text>Page Two</Text>
                        </Button>
                        <Button  onPress={() => {Actions.page_three()}}>
                            <Text>Page Three</Text>
                        </Button>
                    </FooterTab>
                </Footer>*/}
            </Container>
        )
    }


}
