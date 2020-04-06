import React from 'react'
import PropTypes from 'prop-types'
import ElementDetail from './ElementDetail'
import { details } from '../../API'

class ElementDetailContainer extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        element: {}
    }

    componentDidMount() {
        console.log('props', this.props)
        const { id } = this.props.match.params                
        details(id, (element) => this.setState({ element }))
    }

    render() {        
        return(
            <ElementDetail {...this.state} onBack={this.handleOnBack}/>
        )
    }
}
export default ElementDetailContainer