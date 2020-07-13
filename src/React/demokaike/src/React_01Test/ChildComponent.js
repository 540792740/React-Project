import React, {Component} from 'react';
import PropType from 'prop-types';

class ChildComponent extends Component {
    // static propTypes={
    //     text:PropType.number.isRequired
    // }
    // static defaultProps = {
    //     text:'abc'
    // }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {age, name, header,footer, text} = this.props;
        // let {children} = this.props

        return (
            <React.Fragment>
                {text}
                <div style={{backgroundColor:'red'}}>
                    {header}
                </div>
                {/*{age} {name} {this.props.children}*/}

                <div style={{backgroundColor:'blue'}}>
                    {footer}
                </div>
                <h3>Children Map</h3>
                {/*{React.Children.map(children, (child)=>child)}*/}
                {/*{React.Children.forEach(children, (child)=>child)}*/}
                {React.Children.count(this.props.children)}
                <hr/>
            </React.Fragment>
        );
    }
}

export default ChildComponent;
