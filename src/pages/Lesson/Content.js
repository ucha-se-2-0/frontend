import React from "react"
import { Button, Video } from '../../Components'
import { GetLesson } from '../../Assets'
import { theme, colors } from '../../Style/Colors'

var lesson = GetLesson(window.location.pathname);

class Comment extends React.Component {

    constructor(props) {
        super(props)

        this.state = { repliesCollapsed: true, liked: false, likes: this.props.comment.likes, disliked: false, dislikes: this.props.comment.dislikes }
    }

    render() {
        let replies = []
        if (this.props.comment.replies) {
            let key = 0
            for (let r of this.props.comment.replies) {
                replies.push(<Comment key={key} comment={r} reply />)
                key++
            }

            if (!this.props.reply) {
                replies =
                    <div className="replies">
                        <div className="collapse-replies" style={{ color: theme === "dark" ? colors.text.dark : colors.text.dark }}
                            onClick={() => { this.setState({ repliesCollapsed: !this.state.repliesCollapsed }) }}>
                            {this.state.repliesCollapsed ?
                                <><i className="fas fa-caret-down"></i>Покажи отговорите</> :
                                <><i className="fas fa-caret-up"></i>Скрий отговорите</>}
                        </div>

                        {this.state.repliesCollapsed ? <></> : replies}
                    </div>
            }
        }

        return (
            <div className="comment" >
                <div>
                    <img /*TO DO*/ alt="icon" src="/Images/favicon.ico"></img>
                    <div>
                        <div className="author-name">{this.props.comment.author.username}</div>
                        <div className="text"> {this.props.comment.content} </div>

                        <div className="comment-like-dislike">
                            <div>
                                <i style={{ color: this.state.liked ? "black" : "grey" }} className="material-icons like-comment" onClick={this.Like.bind(this)}>thumb_up</i>
                            </div>
                            <div className="comment-likes">{this.state.likes}</div>

                            <div>
                                <i style={{ color: this.state.disliked ? "black" : "grey" }} className="material-icons dislike-comment" onClick={this.Dislike.bind(this)}>thumb_down</i>
                            </div>
                            <div className="comment-dislikes">{this.state.dislikes}</div>
                        </div>
                    </div>
                </div>

                {replies}
            </div>
        )
    }


    Like() {
        var request = new XMLHttpRequest();
        request.open("POST", "/comments/like");
        request.send({ comment_id: this.props.comment.comment_id })

        let likes = this.state.likes
        if (this.state.liked)
            likes--
        else
            likes++

        let dislikes = this.state.dislikes
        if (this.state.disliked)
            dislikes--

        this.setState({ liked: !this.state.liked, likes: likes, disliked: false, dislikes: dislikes })
    }

    Dislike() {
        var request = new XMLHttpRequest();
        request.open("POST", "/comments/dislike");
        request.send({ comment_id: this.props.comment.comment_id })

        let dislikes = this.state.dislikes
        if (this.state.disliked)
            dislikes--
        else
            dislikes++

        let likes = this.state.likes
        if (this.state.liked)
            likes--

        this.setState({ liked: false, likes: likes, disliked: !this.state.disliked, dislikes: dislikes })
    }
}


class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = { commentsElements: <></>, newCommentValue: "" }
    }

    render() {
        return (
            <div className="content" style={{ backgroundColor: theme === "dark" ? colors.content.dark : colors.content.light }}>
                <Video src={"/julemy.mp4"} />

                <span className="separator" />

                <div className="content-text">
                    Тук може да има урок като текст. Може да има илюстрации и прикачени файлове. Може да има само кратко описание. Никотинаминадениндинуклеотид иесщксоищожвкяс  и88о ево  мищ жвеик меи вякеищ
                </div>

                <span className="separator" />

                <div id="compose-comment">
                    <div>
                        <img alt="icon" src="/Images/favicon.ico" />
                        <div className="textarea-wrapper">
                            <textarea placeholder="Оставете коментар" onInput={e => {
                                this.setState({ newCommentValue: e.target.value })
                                e.target.parentNode.dataset.value = e.target.value
                            }}></textarea>
                            <div style={{ visibility: "hidden" }}>{this.state.newCommentValue}</div>
                        </div>
                    </div>
                    <Button name="Публикувай" onClick={this.PostComment.bind(this, null)} />
                </div>


                <div id="comments">{this.state.commentsElements}</div>

            </div>
        );
    }

    componentDidMount() {
        this.LoadComments();
    }

    PostComment(parent_id) {

        var request = new XMLHttpRequest();
        request.open("POST", "/comments");
        request.onload = () => {
            this.LoadComments()
        }
        request.send({ video_id: lesson.id, parent_id: parent_id, content: this.state.newCommentValue });
    }

    GetCommentsElements(comments) {
        let commentsElements = [];

        for (let c in comments) {
            commentsElements.push(<Comment comment={comments[c]} key={c} />)
        };

        return commentsElements;
    }

    LoadComments() {
        var request = new XMLHttpRequest();
        request.open("GET", "/comments");

        request.onload = () => {
            // let comments = request.response;
            let comments = [
                { content: "syjsdgsgg", comment_id: 0, author: { username: "user123", id: 1 }, likes: 2, dislikes: 1 },
                {
                    content: "1", comment_id: 1, author: { username: "user124", id: 1 }, likes: 5, dislikes: 0, replies: [
                        {
                            content: "1.0", comment_id: 2, author: { username: "user129", id: 1 }, likes: 0, dislikes: 0, parent_id: 1, replies: [
                                { content: "1.1.0", comment_id: 3, author: { username: "user125", id: 1 }, likes: 0, dislikes: 0, parent_id: 2 },
                                { content: "1.1.1", comment_id: 4, author: { username: "user126", id: 1 }, likes: 0, dislikes: 0, parent_id: 2 }]
                        },
                        { content: "1.1", comment_id: 5, author: { username: "user127", id: 1 }, likes: 0, dislikes: 0, parent_id: 1 }]
                },
                { content: "yes", comment_id: 6, author: { username: "user128", id: 1 }, likes: 3, dislikes: 1 },
            ];

            this.setState({ commentsElements: this.GetCommentsElements(comments) });
        }

        request.send({ video_id: lesson.id });
    }
}

export default Content;