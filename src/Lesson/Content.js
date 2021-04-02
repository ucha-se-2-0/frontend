import React from "react"
import { Button } from '../Components'
import { GetIdByUrl } from '../LessonsRelUrl'

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';//wtf is this

// const lesson_id = GetIdByUrl(window.location.pathname);

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = { comments: <></> }
    }

    render() {
        return (
            <div className="content">
                <video id="video" controls />

                <div className="likesAndDislikesWrapper">
                    <div id="likes">
                        <i className="material-icons" onClick={this.likeVideo}>thumb_up</i>
                        <div>0</div>
                    </div>
                    <div id="dislikes">
                        <i className="material-icons" onClick={this.dislikeVideo}>thumb_down</i>
                        <div>0</div>
                    </div>
                </div>

                <div id="compose-comment">
                    <div>
                        <img src="/Images/favicon.ico" />
                        <div className="input-wrapper">
                            <textarea placeholder="Оставете коментар" onInput={event => event.target.parentNode.dataset.myValue = event.target.value}></textarea>
                        </div>
                    </div>
                    <Button name="Публикувай" onClick={this.postComment} />
                </div>

                <div id="comments">{this.state.comments}</div>

            </div>
        );
    }

    componentDidMount() {
        this.loadVideo();
        this.loadComments();
    }


    likeVideo() {
        var request = new XMLHttpRequest();
        request.open("POST", "/");
        request.onload = function () {
            this.loadLikes();
        }
        request.send();
    }

    dislikeVideo() {
        var request = new XMLHttpRequest();
        request.open("POST", "/");
        request.onload = function () {
            this.loadDislikes();
        }
        request.send();
    }

    postComment() {
        var request = new XMLHttpRequest();
        request.open("POST", "/");
        request.onload = function () {
            this.loadDislikes();
        }
        request.send();
    }


    loadVideo() {
        var videoNode = document.getElementById("video");

        var request = new XMLHttpRequest();
        request.open("GET", "/video2.mp4");
        request.responseType = 'arraybuffer';

        request.onload = function () {
            var array = new Array(request.response);
            var blob = new Blob(array, { type: mimeCodec });

            videoNode.src = URL.createObjectURL(blob);
        }

        request.send();
    }

    loadLikes() {
        var request = new XMLHttpRequest();
        request.open("GET", "/like");

        request.onload = function () {
            document.querySelector("#likes>div").innerHTML = request.response;
        }

        request.send();
    }

    loadDislikes() {
        var request = new XMLHttpRequest();
        request.open("GET", "/dislike");

        request.onload = function () {
            document.querySelector("#dislikes>div").innerHTML = request.response;
        }

        request.send();
    }

    loadComments() {
        var request = new XMLHttpRequest();
        request.open("GET", "/videos/comment-threads");

        let comp = this;
        request.onload = function () {
            // let comments = request.response;
            let comments = [
                { content: "weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaather is very beautiful today", comment_id: 0 },
                {
                    content: "1", comment_id: 1, replies: [
                        {
                            content: "1.0", comment_id: 2, parent_id: 1, replies: [
                                { content: "1.1.0", parent_id: 2 },
                                { content: "1.1.1", parent_id: 2 }]
                        },
                        { content: "1.1", parent_id: 1 }]
                }];

            comp.setState({ comments: getCommentsNode(comments) });
        }

        request.send();
    }

}

function getCommentsNode(comments) {
    let commentsNodes = [];
    for (let i = 0; i < comments.length; i++) {
        commentsNodes.push(
            <div className="comment" key={i} id={comments[i].comment_id}>
                <div>
                    <img src="/Images/favicon.ico"></img>
                    <div>
                        <div className="author-name">name</div>
                        <div className="text"> {comments[i].content} </div>
                        <div className = "comment-like-dislike">
                            <i className="material-icons like-comment">thumb_up</i>
                            <i className="material-icons dislike-comment">thumb_down</i>
                        </div>
                    </div>
                </div>
                {comments[i].replies ? getCommentsNode(comments[i].replies) : <></>}
            </div>)

    };
    return commentsNodes;
}

export default Content;