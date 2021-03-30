import { Button } from '../Components'
import React from "react"

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';//wtf is this

class Content extends React.Component {

    render() {
        return (
            <div className="content">
                <video>
                    <source id="videoSource" type="video/mp4"></source>
                </video>
                <Button onClick={() => {
                    console.log(document.getElementById("videoSource").src);
                    fetch(document.getElementById("videoSource").src).then(blob => {blob.text().then(res=>{console.log(res)})})
                }} name="press this button to break dev tools :)" />
            </div>
        );
    }

    componentDidMount() {
        var videoNode = document.getElementById("videoSource");

        videoNode.src = this.videoUrl;

        var request = new XMLHttpRequest();
        request.open("GET", "/video1.mp4");
        request.responseType = 'arraybuffer';

        request.onload = function () {
            var array = new Array(request.response);
            var blob = new Blob(array, {type: mimeCodec});
            console.log(blob)
            videoNode.src = URL.createObjectURL(blob);
        }

        request.send();


    }
}

export default Content;