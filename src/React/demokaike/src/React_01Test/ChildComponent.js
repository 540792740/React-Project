import React, {Component} from 'react';
import PropType from 'prop-types';

class ChildComponent extends Component {
    static propTypes={
        text:PropType.number.isRequired
    }
    // static defaultProps = {
    //     text:'abc'
    // }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {age, name, header,footer, text} = this.props;
        return (
            <div>
                {text}
                <div style={{backgroundColor:'red'}}>
                    {header}
                </div>
                {age} {name} {this.props.children}

                <div style={{backgroundColor:'blue'}}>
                    {footer}
                </div>
            </div>
        );
    }
}

export default ChildComponent;
