import React, {Component} from 'react';

const HocComponentTest =  function WrappedComponent() {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                title:'hoc-componet',
                name:'My HOC'
            }
        }
        render() {
            const newProps = {...this.state}
            return <WrappedComponent {...this.props} {...this.newProps}/>
        }
    };
}

export default HocComponentTest;
