import { Button } from '../Components'
import React from "react"

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';//wtf is this
const pngCodec = 'image/png';

class Content extends React.Component {
    render() {
        console.log("render");
        return (
            <div className="content">
                <video id = "video" controls>
                </video>
            </div>
        );
    }

    componentDidMount() {
        var videoNode = document.getElementById("video");

        var request = new XMLHttpRequest();
        request.open("GET", "/video2.mp4");
        request.responseType = 'arraybuffer';

        request.onload = function () {
            var array = new Array(request.response);
            var blob = new Blob(array, { type: mimeCodec });
            console.log(blob)

            videoNode.src = URL.createObjectURL(blob);
        }

        request.send();
    }
}

export default Content;