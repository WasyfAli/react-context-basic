import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from '../context/UserContext'

class ComponentE extends Component {
    render() {
        return (
            <div>
            Component E {this.context}
            <ComponentF />

            </div>
        )
    }
}

ComponentE.contextType = UserContext
export default ComponentE
