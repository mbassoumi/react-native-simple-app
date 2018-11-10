import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Container, Button, Text, Content, Header, Footer, Card, CardItem, Input, Item, Icon} from 'native-base';
import {StyleSheet, Image, Alert, AsyncStorage} from 'react-native';
import logo from '../images/logo.png'





/**
 * look here for icons
 * https://oblador.github.io/react-native-vector-icons/
 * (((((( MaterialIcons )))))))
 */


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            logged_in: true
        }
    }

    componentWillMount(){
        // setTimeout(, 2000);
    }
    componentDidMount(){
    }

    handleChangeEmail = (value) => {
        this.setState({
            email: value,
        });
    };

    handleChangePassword = (value) => {
        this.setState({
            password: value,
        });
    };

    handleSubmitLogin = () => {
        // Actions.page_one();
        const email = this.state.email;
        const password = this.state.password;
        if (email === "majd@react.com" && password === "123123"){
            this.props.logged_in();
            Actions.page_one();
        } else {
            Alert.alert(
                'Wrong',
                'Wrong Email or Password',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
            )

            console.log('fuck you');
        }
    };

    setLoggedIn = () => {
        console.log('logged in');

        AsyncStorage.setItem("is_logged_in", 'true');

    };

    render() {
        return (
            <Container style={style.container}>

                <Content padder contentContainerStyle={{ justifyContent: 'center', flex: 1, alignItems:'center' }}>

                    <Image source={logo} style={{height: 100, width: 100}}/>
                    <Card>
                        <CardItem>
                            <Item>
                                <Icon active name='mail'/>
                                <Input placeholder='Email' onChangeText={(value) => {this.handleChangeEmail(value)}}/>
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Icon active name='key'/>
                                <Input placeholder='password' secureTextEntry={true} onChangeText={(value) => {this.handleChangePassword(value)}}/>
                            </Item>
                        </CardItem>
                        <CardItem style={style.signInButtonContainer}>
                            <Button style={style.signInButton} onPress={this.handleSubmitLogin}>
                                <Text>Go</Text>
                                <Icon active name='arrow-forward'/>
                            </Button>
                        </CardItem>
                    </Card>

                </Content>

            </Container>
        )

    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    signInButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    }
});
