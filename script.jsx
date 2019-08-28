console.log("~~~~~~~~")

class EngageStats extends React.Component {
    render (){
        return(
            <div>
                <img className = "small-icon" src="https://image.flaticon.com/icons/svg/25/25328.svg"/>{this.props.tweet.retweet_count}
                <img className = "small-icon ml-4" src = "https://image.flaticon.com/icons/svg/535/535285.svg"/>{this.props.tweet.favorite_count}
            </div>

        );
    }
}

class TweetInfo extends React.Component {
    render (){

        var postDate = new Date(this.props.tweet.created_at);
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = postDate.getDate() + " " + months[postDate.getMonth()];

        return(
            <div className = "border py-2 my-3 col-lg-8 col-sm-10 mx-auto row">
                <div className = "col-2 p-0 d-flex align-items-center justify-content-center">
                    <img className = "rounded-circle profile-pic" src = {this.props.tweet.user.profile_image_url}/>
                </div>
                <div className = "col-10 py-1">
                    <p className = "mb-0">
                        <span className ="font-weight-bold">{this.props.tweet.user.name}  </span>
                        <small>@{this.props.tweet.user.screen_name}  •  {date}</small>
                    </p>
                    <p className = "mt-1">{this.props.tweet.text}</p>
                    <EngageStats tweet = {this.props.tweet}/>
                </div>
            </div>
        )
    }
}

class List extends React.Component {
    render (){
        let individualTweet = tweets.map(tweet => {
            return (
                <TweetInfo tweet={tweet}/>
            )
        })

        return (
            <div className = "container">
            <h1>tweedr</h1>
                {individualTweet}
            </div>
        )
    }
}


ReactDOM.render(
    <List />,
    document.getElementById('root')
);