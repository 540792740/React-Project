import React, {Component} from "react";
import video from  '../assert/newVideo.mp4'

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }
    render() {
        return (
            <div>
                <video ref={this.videoRef} width='300' height='200' controls >
                    <source src={video} type='video/mp4'/>
                </video>
                <div>
                    <button onClick={() => this.playVideo()}>Play</button>
                    <button onClick={() => this.pauseVideo()}>Pause</button>
                </div>
            </div>
        );
    }

    pauseVideo() {
        this.videoRef.current.pause();
    }

    playVideo() {
        this.videoRef.current.play();

    }
}

export default VideoPlayer;
