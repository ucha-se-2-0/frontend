import React from "react"
import { Button } from '../Components'
import { GetIdByUrl } from '../LessonsRelUrl'

const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';//wtf is this

var lesson_id;
if (window.location.pathname.indexOf("/lessons/") !== -1)
    lesson_id = GetIdByUrl(window.location.pathname);

var liked = [];
var disliked = [];

var video_liked = false;/*TO DO*/
var video_disliked = false;/*TO DO*/

class Comment extends React.Component {
    render() {
        let replies = <></>;
        if (this.props.comment.replies) {
            if (!this.props.is_reply) {
                replies =
                    <div>
                        <div className="collapse-replies" onClick={event => {
                            event.target.style.display = "none";
                            event.target.parentNode.querySelector(".show-replies").style.display = "block";
                            event.target.parentNode.querySelector(".replies").style.display = "none";
                        }}>
                            <i className="fas fa-caret-up"></i>
                            Скрий отговорите
                        </div>

                        <div className="show-replies" onClick={event => {
                            event.target.style.display = "none";
                            event.target.parentNode.querySelector(".collapse-replies").style.display = "block";
                            event.target.parentNode.querySelector(".replies").style.display = "block";
                        }}>
                            <i className="fas fa-caret-down"></i>
                            Покажи отговорите
                        </div>

                        <div className="replies">
                            {_getCommentsNode(this.props.comment.replies, true)}
                        </div>
                    </div>
            }
            else {
                replies = _getCommentsNode(this.props.comment.replies, true);
            }
        }

        return (
            <div className="comment" id={this.props.comment.comment_id}>
                <div>
                    <img /*TO DO*/ src="/Images/favicon.ico"></img>
                    <div>
                        <div /*TO DO*/ className="author-name">name</div>
                        <div className="text"> {this.props.comment.content} </div>
                        <div className="comment-like-dislike">
                            <i /*TO DO*/ color="grey" className="material-icons like-comment" onClick={
                                event => {
                                    this.likeComment(event.target.parentNode);
                                }}>thumb_up</i>
                            <div className="comment-likes">{this.props.comment.likes}</div>
                            <i /*TO DO*/ color="grey" className="material-icons dislike-comment" onClick={
                                event => {
                                    this.dislikeComment(event.target.parentNode);
                                }}>thumb_down</i>
                            <div className="comment-dislikes">{this.props.comment.dislikes}</div>
                        </div>
                    </div>
                </div>


                {replies}
            </div>
        )
    }


    likeComment(likes_and_dislikes) {
        let comment_id = this.props.comment.comment_id;
        let likes = likes_and_dislikes.getElementsByClassName("comment-likes")[0]
        var request = new XMLHttpRequest();
        request.open("POST", "/comments/like");
        request.onload = function () {
        }
        request.send({ comment_id: comment_id, user_id: sessionStorage.getItem('userID') });

        let was_liked = false;
        for (let i = 0; i < liked.length; i++) {
            if (liked[i] === comment_id) {
                was_liked = true;
                liked.splice(i, 1);
                break;
            }
        }
        if (was_liked) {
            likes.innerHTML = Number(likes.innerHTML) - 1;
            likes_and_dislikes.getElementsByClassName("like-comment")[0].setAttribute("color", "grey");
        }
        else {
            for (let i = 0; i < disliked.length; i++) {
                if (disliked[i] === comment_id) {
                    likes_and_dislikes.getElementsByClassName("dislike-comment")[0].setAttribute("color", "grey");
                    let commentsDislikes = likes_and_dislikes.getElementsByClassName("comment-dislikes")[0];
                    commentsDislikes.innerHTML = commentsDislikes.innerHTML - 1;
                    disliked.splice(i, 1);
                    break;
                }
            }
            likes_and_dislikes.getElementsByClassName("like-comment")[0].setAttribute("color", "black");
            likes.innerHTML = Number(likes.innerHTML) + 1;
            liked.push(comment_id);
        }
    }

    dislikeComment(likes_and_dislikes) {
        let comment_id = this.props.comment.comment_id;
        let dislikes = likes_and_dislikes.getElementsByClassName("comment-dislikes")[0]
        var request = new XMLHttpRequest();
        request.open("POST", "/comments/dislike");
        request.onload = function () {
        }
        request.send({ comment_id: comment_id, user_id: sessionStorage.getItem('userID') });

        let was_disliked = false;
        for (let i = 0; i < disliked.length; i++) {
            if (disliked[i] === comment_id) {
                was_disliked = true;
                disliked.splice(i, 1);
                break;
            }
        }
        if (was_disliked) {
            dislikes.innerHTML = Number(dislikes.innerHTML) - 1;
            likes_and_dislikes.getElementsByClassName("dislike-comment")[0].setAttribute("color", "grey");
        }
        else {
            for (let i = 0; i < liked.length; i++) {
                if (liked[i] === comment_id) {
                    likes_and_dislikes.getElementsByClassName("like-comment")[0].setAttribute("color", "grey");
                    let commentsLikes = likes_and_dislikes.getElementsByClassName("comment-likes")[0];
                    commentsLikes.innerHTML = commentsLikes.innerHTML - 1;
                    liked.splice(i, 1);
                    break;
                }
            }
            likes_and_dislikes.getElementsByClassName("dislike-comment")[0].setAttribute("color", "black");
            dislikes.innerHTML = Number(dislikes.innerHTML) + 1;
            disliked.push(comment_id);
        }
    }
}

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
                        <i className="material-icons" onClick={this.likeVideo.bind(this)}>thumb_up</i>
                        <div>{/*TO DO*/}0</div>
                    </div>
                    <div id="dislikes">
                        <i className="material-icons" onClick={this.dislikeVideo.bind(this)}>thumb_down</i>
                        <div>{/*TO DO*/}0</div>
                    </div>
                </div>

                <div id="compose-comment">
                    <div>
                        <img src="/Images/favicon.ico" />
                        <div className="input-wrapper">
                            <textarea placeholder="Оставете коментар" onInput={event => event.target.parentNode.dataset.myValue = event.target.value}></textarea>
                        </div>
                    </div>
                    <Button name="Публикувай" onClick={event => { this.postComment(document.querySelector("textarea").value) }} />
                </div>

                <div id="comments">{this.state.comments}</div>

            </div>
        );
    }

    componentDidMount() {
        this.loadVideo();
        this.loadComments();

        this.likes = document.getElementById("likes").childNodes[1];
        this.dislikes = document.getElementById("dislikes").childNodes[1];
    }


    likeVideo() {
        var request = new XMLHttpRequest();
        request.open("POST", "/");
        let content = this;
        request.onload = function () {
            content.loadLikes();
        }
        request.send({ video_id: lesson_id });

        if (video_liked) {
            this.likes.innerHTML = Number(this.likes.innerHTML) - 1;
        }
        else {
            this.likes.innerHTML = Number(this.likes.innerHTML) + 1;
            if (video_disliked) {
                this.dislikes.innerHTML = Number(this.dislikes.innerHTML) - 1;
                video_disliked = false;
            }
        }
        video_liked = !video_liked;
    }

    dislikeVideo() {
        var request = new XMLHttpRequest();
        request.open("POST", "/");
        let content = this;
        request.onload = function () {
            content.loadDislikes();
        }
        request.send();

        if (video_disliked) {
            this.dislikes.innerHTML = Number(this.dislikes.innerHTML) - 1;
        }
        else {
            this.dislikes.innerHTML = Number(this.dislikes.innerHTML) + 1;
            if (video_liked) {
                this.likes.innerHTML = Number(this.likes.innerHTML) - 1;
                video_liked = false;
            }
        }
        video_disliked = !video_disliked;
    }

    postComment(content) {
        var request = new XMLHttpRequest();
        request.open("POST", "/");
        request.onload = function () {
        }
        request.send({ video_id: lesson_id, content: content });
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
            // document.querySelector("#likes>div").innerHTML = request.response;
        }

        request.send();
    }

    loadDislikes() {
        var request = new XMLHttpRequest();
        request.open("GET", "/dislike");

        request.onload = function () {
            // document.querySelector("#dislikes>div").innerHTML = request.response;
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
                { content: "weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaather is very beautiful today", comment_id: 0, likes: 2, dislikes: 1 },
                {
                    content: "1", comment_id: 1, likes: 5, replies: [
                        {
                            content: "1.0", comment_id: 2, parent_id: 1, replies: [
                                { content: "1.1.0", comment_id: 3, parent_id: 2 },
                                { content: "1.1.1", comment_id: 4, parent_id: 2 }]
                        },
                        { content: "1.1", comment_id: 5, parent_id: 1 }]
                },
                { content: "yes", comment_id: 6, likes: 3, dislikes: 1 },
            ];

            comp.setState({ comments: getCommentsNode(comments) });
        }

        request.send();
    }

}

let getCommentsNode = comments => _getCommentsNode(comments, false);

function _getCommentsNode(comments, is_reply) {
    if (!is_reply) {
        let c1i = 0, c2i = 0;
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].likes >= comments[c1i].likes) {
                c1i = i;
            }
            else if (comments[i].likes >= comments[c2i].likes) {
                c2i = i;
            }
        }

        let c1 = comments.splice(c1i, 1);
        let c2 = comments.splice(c1i < c2i ? c2i - 1 : c2i, 1);
        comments.unshift(c2[0]);
        comments.unshift(c1[0]);
    }

    let commentsNodes = [];
    for (let i = 0; i < comments.length; i++) {
        commentsNodes.push(
            <Comment key={i} comment={comments[i]} is_reply={is_reply} />
        )
    };
    return commentsNodes;
}

export default Content;