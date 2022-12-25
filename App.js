import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import AdsRouter from './src/AdsRouter';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Provider store={store}>
          <AdsRouter />
        </Provider>
      </View>
    );
  }
}

export default App;
