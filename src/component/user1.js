import React from 'react';
import $ from 'jquery';

class User1 extends React.Component{
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
                    login: "ruociyu",
                    id: 80386889,
                    node_id: "MDQ6VXNlcjgwMzg2ODg5",
                    avatarUrl: "https://avatars.githubusercontent.com/u/80386889?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/ruociyu",
                    githubtUrl: "https://github.com/ruociyu",
                    followers_url: "https://api.github.com/users/ruociyu/followers",
                    following_url: "https://api.github.com/users/ruociyu/following{/other_user}",
                    gists_url: "https://api.github.com/users/ruociyu/gists{/gist_id}",
                    starred_url: "https://api.github.com/users/ruociyu/starred{/owner}{/repo}",
                    subscriptions_url: "https://api.github.com/users/ruociyu/subscriptions",
                    organizations_url: "https://api.github.com/users/ruociyu/orgs",
                    repos_url: "https://api.github.com/users/ruociyu/repos",
                    events_url: "https://api.github.com/users/ruociyu/events{/privacy}",
                    received_events_url: "https://api.github.com/users/ruociyu/received_events",
                    type: "User",
                    site_admin: false,
                    name: "Ruo-Ci Yu",
                    company: null,
                    blog: "",
                    location: "Taiwan",
                    email: null,
                    hireable: null,
                    bio: null,
                    twitter_username: null,
                    public_repos: 5,
                    public_gists: 0,
                    followers: 1,
                    following: 1,
                    created_at: "2021-03-10T08:37:57Z",
                    updated_at: "2021-05-11T09:16:54Z",
                });
            }
        });
    }

    render(){
        return(
            <div>
                <h2>Username: {this.state.name}</h2>
                <h3>Id: {this.state.id}</h3>
                <h4>location: {this.state.location}</h4>
                <img src={this.state.avatarUrl}/>
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

export default User1;