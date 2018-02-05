import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/addEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/history'

export default class App extends React.Component {

  state = {
    value: 0
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }}></View>
          <History />
        </View>
      </Provider>
    );
  }
}
