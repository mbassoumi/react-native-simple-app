import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {BackHandler} from 'react-native';
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

import SplashScreen from 'react-native-splash-screen';


export default class PageOne extends Component {

    componentWillMount(){
        SplashScreen.show();
    }
    componentDidMount(){
        SplashScreen.hide();
    }

    render() {
        return (
            <Container>
                <Header>
                    {/*<Left style ={{flex : 1}}>
                        <Button transparent onPress={() => {BackHandler.exitApp()}}>
                            <Icon name='arrow-back'/>
                        </Button>

                    </Left>*/}
                    <Body>
                    <Title>
                        Page One
                    </Title>

                    </Body>
                    <Right style ={{flex : 1}}>
                    <Button transparent onPress={() => {this.props.logout()}}>
                        <Text>Log out</Text>
                    </Button>
                </Right>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>
                                This is Page One
                            </Text>
                        </CardItem>
                    </Card>
                </Content>

                {/*<Footer>
                    <FooterTab>
                        <Button active >
                            <Text>Page One</Text>
                        </Button>
                        <Button onPress={() => {Actions.page_two()}}>
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
