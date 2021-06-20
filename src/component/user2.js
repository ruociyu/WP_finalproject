import React from 'react';
import $ from 'jquery';

class User2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login:'',
            name:'',
            id:'',
            githubtUrl:'',
            public_repos:'',
            location:'',
            avatarUrl:'',
            followers: '',
            following: '',
        }
    }
    componentDidMount(){
        $.get(this.props.source,(result)=>{
            console.log(result);
            const data=result;
            if (data){
                this.setState({
                    login: "ChiaChi-Hsu",
                    id: 80387033,
                    node_id: "MDQ6VXNlcjgwMzg3MDMz",
                    avatar_url: "https://avatars.githubusercontent.com/u/80387033?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/ChiaChi-Hsu",
                    html_url: "https://github.com/ChiaChi-Hsu",
                    followers_url: "https://api.github.com/users/ChiaChi-Hsu/followers",
                    following_url: "https://api.github.com/users/ChiaChi-Hsu/following{/other_user}",
                    gists_url: "https://api.github.com/users/ChiaChi-Hsu/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/ChiaChi-Hsu/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/ChiaChi-Hsu/subscriptions",
                    organizations_url: "https://api.github.com/users/ChiaChi-Hsu/orgs",
                    repos_url: "https://api.github.com/users/ChiaChi-Hsu/repos",
                    events_url: "https://api.github.com/users/ChiaChi-Hsu/events{/privacy}",
                    received_events_url: "https://api.github.com/users/ChiaChi-Hsu/received_events",
                    type: "User",
                    site_admin: false,
                    name: "Chia-Chi HSU",
                    company: null,
                    blog: "https://www.instagram.com/pski926/",
                    location: "Taiwan",
                    email: null,
                    hireable: null,
                    bio: null,
                    twitter_username: null,
                    public_repos: 14,
                    public_gists: 0,
                    followers: 2,
                    following: 4,
                    created_at: "2021-03-10T08:40:45Z",
                    updated_at: "2021-06-18T08:24:24Z",
                });
            }
        });
    }
    render(){
        return(
            <div id="user2">
                <h2>Username: {this.state.name}</h2>
                <h3>Id: {this.state.id}</h3>
                <h4>location: {this.state.location}</h4>
                <img src={this.state.avatar_url} />
                <br></br>
                <a href={this.state.githubtUrl}>GitHub Link</a>
                <br></br>
                <p>GitHub Public Repository: {this.state.public_repos}</p>
                <p>followers: {this.state.followers}</p>
                <p>following: {this.state.following}</p>
            </div>
        );
    }
}
export default User2