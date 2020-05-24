import React from 'react';

function HocComponent(WrappendComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                title:'hoc-componnet',
                name:'My HOC'
            }
        }
        render() {
            const newProps ={...this.state}
            return (
                <div>
                    {...this.newProps}
                </div>
            );
        }
    };
}

export default HocComponent;

class HocComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'hoc-componnet',
            name:'My HOC'
        }
    }
    render() {
        const newProps ={...this.state}
        return (
            <div>
                {...this.newProps}
            </div>
        );
    }
}

export default HocComponent;
