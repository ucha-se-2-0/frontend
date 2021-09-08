import React from "react"
import { Button, Video, Textarea, Link, Section } from '../../Components'
import { GetLesson } from '../../Assets'
import { GetAPIUrl } from "../../Utilities";


class Comment extends React.Component {

    constructor(props) {
        super(props)
        this.lesson = GetLesson(window.location.pathname);

        this.state = {
            repliesCollapsed: true,
            liked: false,
            likes: this.props.comment.likes,
            disliked: false,
            dislikes: this.props.comment.dislikes,
            writingReply: false,
            replyText: ""
        }
    }

    componentDidMount() {
        document.addEventListener("click", () => {
            this.StopReply();
        })
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
                    <Section className="replies" title={<div className="collapse-replies"
                        onClick={() => { this.setState({ repliesCollapsed: !this.state.repliesCollapsed }) }}>
                        {(this.state.repliesCollapsed ? "Покажи" : "Скрий") + " отговорите"}
                    </div>}>

                        {replies}
                    </Section>
            }
        }

        return (
            <>
                <div className="comment" onClick={e => { e.stopPropagation() }}>
                    <img /*TO DO*/ alt="icon" src="/Images/LogoCyan.png"></img>
                    <div>
                        <div className="author-name">{this.props.comment.author.username}</div>
                        <div className="text"> {this.props.comment.content} </div>
                    </div>

                    <div className="comment-actions">
                        <div className={"reply" + (this.state.writingReply ? " active" : "")}>
                            <Button typing back onHover typingSpeed={5} onClick={this.WriteReply.bind(this)} content = "Напиши отговор" className="write-reply-button "/>
                            <Textarea onInput={this.OnReplyInput.bind(this)} placeholder="Оставете коментар" />
                            <div className = "reply-actions">
                                <Button primary onClick={this.Reply.bind(this)}>Публикувай</Button>
                                <Button secondary onClick={this.StopReply.bind(this)}>Отмяна</Button>
                            </div>
                        </div>

                        <div className="comment-like-dislike">
                            <i className={"material-icons like-comment" + (this.state.liked ? " active" : "")} onClick={this.Like.bind(this)}>thumb_up</i>
                            {this.state.likes}

                            <i className={"material-icons dislike-comment" + (this.state.disliked ? " active" : "")} onClick={this.Dislike.bind(this)}>thumb_down</i>
                            {this.state.dislikes}
                        </div>
                    </div>

                    {this.props.reply ? null : replies}
                </div>

                {this.props.reply ? replies : null}
            </>
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

    WriteReply() {
        this.setState({ writingReply: true });
    }

    OnReplyInput(e) {
        this.setState({ replyText: e.target.value });
    }

    Reply() {
        this.StopReply();
    }

    StopReply() {
        this.setState({ writingReply: false });
    }
}


class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = { commentsElements: <></>, newCommentValue: "" }
    }

    render() {
        return (
            <div className="content">
                <Video src={"/julemy.mp4"} />

                <div className="actions">
                    <Button content="Mind map" secondary onClick={() => { }} />
                    <Link content="Тест" primary link={window.location.pathname.replace("lessons", "tests")} />
                </div>

                <span className="separator" />

                <div className="content-text">
                    Тук може да има урок като текст. Може да има илюстрации и прикачени файлове. Може да има само кратко описание. Никотинаминадениндинуклеотид иесщксоищожвкяс  и88о ево  мищ жвеик меи вякеищ
                </div>

                <span className="separator" />

                <div id="compose-comment">
                    <div>
                        <img alt="icon" src="/Images/LogoCyan.png" />
                        <Textarea placeholder="Оставете коментар" />
                    </div>
                    <Button content="Публикувай" onClick={this.PostComment.bind(this, null)} secondary />
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
        request.send({ video_id: this.lesson.id, parent_id: parent_id, content: this.state.newCommentValue });
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
        request.open("GET", GetAPIUrl("/comments"));

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

        request.send({ video_id: this.props.lesson.id });
    }
}

export default Content;