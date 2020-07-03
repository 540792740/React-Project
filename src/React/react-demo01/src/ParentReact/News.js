import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class News extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.state = {
            msg: 'This is New component',
            title:'New Component'
        }
    }
    run = () =>{
        alert('Run')
    }

    getData = () =>{
        alert('Data')
    }

    getChildData = (result) =>{
        alert(result)
        this.setState({
            msg:result
        })
    }

    render() {
        return (
            <div>
                <Header run={this.run}
                        title={this.state.title}
                        news={this}
                />
                <br/><hr/><br/>
                This is News Component --- {this.state.msg}
                <br/><hr/><br/>

                <button onClick={() => this.getFooter()}>Get Footer Component</button>
                <Footer ref={this.myRef}/>

            </div>
        );
    }

    getFooter() {
        // alert(this.myRef.current.state.msg)
        this.myRef.current.run()
    }
}

export default News;
