import React, {Component} from 'react';
import Child from "./Child";

export const {Provider, Consumer} = React.createContext('contextName');

class ParentComponent extends Component {
    render() {
        let name = 'Little'
        return (
          <Provider value={name}>
              <div>
                  <p>Parent Value: {name}</p>
                  <Child />
              </div>
          </Provider>
        );
    }
}

export default ParentComponent;
