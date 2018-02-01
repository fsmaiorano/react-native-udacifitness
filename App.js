import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/addEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {

  state = {
    value: 0
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
