import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Login from './components/Login'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import {AsyncStorage, StyleSheet, BackHandler, View, Text} from "react-native"
import {getItemFromAsyncStorage, setItemInAsyncStorage} from './helpers/AsyncStorageHelpers';
import async_storage_keys from './const/constants'

import SplashScreen from 'react-native-splash-screen';


class App extends Component {


    constructor(props){
        super(props);

        this.state = {
            is_logged_in: false,
            ready: false,
        };
    }


    componentWillMount() {

    };

    componentDidMount = async () => {
        const result = await getItemFromAsyncStorage(async_storage_keys.is_logged_in);
        let is_logged_in = false;
        switch (result) {
            case 'true':
                is_logged_in = true;
                break;
            case 'false':
                is_logged_in = false;
                break;
            case null:
            default:
                is_logged_in = false;
                await setItemInAsyncStorage(async_storage_keys.is_logged_in, 'true');
                break;
        }
        this.setState({
            is_logged_in: is_logged_in,
            ready: true,
        });
        SplashScreen.hide();
    };


    onBackPress() {
        if (Actions.currentScene !== '_page_one') {
            Actions.pop();
            return true;
        } else {
            BackHandler.exitApp();
        }
    };

    render() {
        if (this.state.ready) {
            return (
                <Router hideNavBar={true} backAndroidHandler={this.onBackPress}>
                    <Scene key="root" hideNavBar={true}>
                        <Scene key="log_in" component={Login} title="Login" logged_in={this.setLoggedIn}
                               initial={!this.state.is_logged_in}/>
                        <Scene key="tab_container" tabs={true} tabBarStyle={style.tabContainer} hideNavBar={true}
                               initial={this.state.is_logged_in}>
                            <Scene key="page_one" component={PageOne} logout={this.logout} hideNavBar={true}
                                   title="Page One"
                                   initial={this.state.is_logged_in}/>
                            <Scene key="page_two" component={PageTwo} hideNavBar={true} title="Page Two"/>
                            <Scene key="page_three" component={PageThree} hideNavBar={true} title="Page Three"/>
                        </Scene>
                    </Scene>
                </Router>
            )
        } else {
            return null;
        }

    }

}

export default App;

const style = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabContent: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
