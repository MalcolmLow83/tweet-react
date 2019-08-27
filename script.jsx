class Nav extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-3">Tweets</div>
                <div className="col-5">Tweets & replies</div>
                <div className="col-2">Media</div>
                <div className="col-2">Likes</div>
            </div>
        )
    }
};

class ProfileImg extends React.Component {
    render() {
        return(
            <img id="profileImge" src={this.props.profileImge}/>
        );
    }
};

class Name extends React.Component {
    render() {
        return(
            <p><strong>{this.props.name}</strong></p>
        );
    }
};

class CreatedAt extends React.Component {
    render() {
        return (
            <p>{this.props.createdAt}</p>
        );
    }
};

class Text extends React.Component {
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}

class TweetRow extends React.Component {
    render() {
        let tweetElements = this.props.tweetz.map((tweet, index)=> {
            return (
                <div className="row">
                    <div className="col-2">
                        <ProfileImg profileImge={tweet.user.profile_image_url} key={index + "0"}></ProfileImg>
                    </div>
                    <div className="col-10">
                        <Name name={tweet.user.name} key={index + "1"}></Name>
                        <CreatedAt createdAt={tweet.created_at} key={index + "2"}></CreatedAt>
                        <Text text={tweet.text} key={index + "3"}></Text>
                    </div>
                </div>
            )
        });
        return (
            <div>{tweetElements}</div>
        )
    }
}


ReactDOM.render(
    <div className="container">
        <div className="row-12">
                <Nav/>
                <TweetRow tweetz={tweets} />
        </div>
    </div>,
    document.getElementById('root')
);