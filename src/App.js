import React from 'react'
import { Provider } from 'react-redux'
import HomePage from './pages/home'
import store from './stores'

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store} key={Math.random()}>
                <HomePage/>
            </Provider >
        )
    }
}
