import React from 'react';
import './style.css';
import $ from 'jquery';
import bootstrap from 'bootstrap'

class Aboutus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login:'',
            name:'',
            id:'',
            githubtUrl:'',
            public_repos:'',
            location:'',
            avatar_url:'',
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
                    id: "⑧⓪③⑧⑥⑧⑧⑨",
                    node_id: "MDQ6VXNlcjgwMzg2ODg5",
                    avatar_url: "https://avatars.githubusercontent.com/u/80386889?v=4",
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
                    name: "ʀʊօ-ƈɨ ʏʊ",
                    company: null,
                    blog: "",
                    location: "𝕋𝕒𝕚𝕨𝕒𝕟",
                    email: null,
                    hireable: null,
                    bio: null,
                    twitter_username: null,
                    public_repos: "𝟏𝟎",
                    public_gists: 0,
                    followers: "𝟏",
                    following: "𝟏",
                    created_at: "2021-03-10T08:37:57Z",
                    updated_at: "2021-05-29T09:35:49Z",
                });
            }
        });
    }


    render(){
        return(
            
            <div class="Container">
                <div class="Aboutus-background img-fluid">
                <div class="Aboutus-header">
                    
                    <div class="display-1 text-warning fw-bold uccc text-center">ᑗᑤᑤᑤ</div>
                </div>
                <div class=" text-white">
                <br></br>
                <br></br>
                <div class="row justify-content-center align-items-center text-center">
                    <div id="user1" class="col-5">
                        <h4 class="fw-light ">𝒰𝓈𝑒𝓇𝒩𝒶𝓂𝑒: <u class="h2 ">{this.state.name}</u></h4>
                        <h4 class="fw-light"> 𝐼𝒟: <u class="fw-bold">{this.state.id}</u></h4>
                        <h4 class="fw-light">𝐿𝑜𝒸𝒶𝓉𝒾𝑜𝓃: <u class="fw-bold">{this.state.location}</u></h4>
                        <br></br>
                        <figure>
                            <img src={this.state.avatar_url} class="figure-img img-fluid rounded-circle" />
                        </figure>
                        <br></br>
                        <a href={this.state.githubtUrl} class="link-warning h5"><b>gιтнυв ℓιηк</b></a>
                        <br></br>
                        <br></br>
                        <p class="h5">𝒢𝒾𝓉𝐻𝓊𝒷 𝒫𝓊𝒷𝓁𝒾𝒸 𝑅𝑒𝓅𝑜𝓈𝒾𝓉𝑜𝓇𝓎: {this.state.public_repos}</p>
                        <p class="h5">𝐹𝑜𝓁𝓁𝑜𝓌𝑒𝓇𝓈: {this.state.followers}</p>
                        <p class="h5">𝐹𝑜𝓁𝓁𝑜𝓌𝒾𝓃𝑔: {this.state.following}</p>
                        <br></br>
                        <br></br>
                    </div>
                    <div id="user2" class="col-5">
                        <UserProfile />
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
        );
    }

}

class UserProfile extends Aboutus{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $.get(this.props.source,(result)=>{
            console.log(result);
            const data=result;
            if (data){
                this.setState({
                    login: "ChiaChi-Hsu",
                    id: "⑧⓪③⑧⑦⓪③③",
                    node_id: "MDQ6VXNlcjgwMzg3MDMz",
                    avatar_url: "https://avatars.githubusercontent.com/u/80387033?v=4",
                    gravatar_id: "",
                    url: "https://api.github.com/users/ChiaChi-Hsu",
                    githubtUrl: "https://github.com/ChiaChi-Hsu",
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
                    name: "ƈɦɨǟ-ƈɦɨ ɦֆʊ",
                    company: null,
                    blog: "https://www.instagram.com/pski926/",
                    location: "𝕋𝕒𝕚𝕨𝕒𝕟",
                    email: null,
                    hireable: null,
                    bio: null,
                    twitter_username: null,
                    public_repos: "𝟏𝟰",
                    public_gists: 0,
                    followers: "𝟮",
                    following: "𝟰",
                    created_at: "2021-03-10T08:40:45Z",
                    updated_at: "2021-06-18T08:24:24Z",
                });
            }
        });
    }
    render(){
        return(
            <div id="user2" >
                <h4 class="fw-light">𝒰𝓈𝑒𝓇𝒩𝒶𝓂𝑒: <u class="h2">{this.state.name}</u></h4>
                <h4 class="fw-light">𝐼𝒟: <u class="fw-bold">{this.state.id}</u></h4>
                <h4 class="fw-light">𝐿𝑜𝒸𝒶𝓉𝒾𝑜𝓃: <u>{this.state.location}</u></h4>
                <br></br>
                <figure>
                    <img src={this.state.avatar_url} class="figure-img img-fluid rounded-circle"/>
                </figure>
                <br></br>
                <a href={this.state.githubtUrl} class="link-warning h5"><b>gιтнυв ℓιηк</b></a>
                <br></br>
                <br></br>
                <p class="h5">𝒢𝒾𝓉𝐻𝓊𝒷 𝒫𝓊𝒷𝓁𝒾𝒸 𝑅𝑒𝓅𝑜𝓈𝒾𝓉𝑜𝓇𝓎: {this.state.public_repos}</p>
                <p class="h5">𝐹𝑜𝓁𝓁𝑜𝓌𝑒𝓇𝓈: {this.state.followers}</p>
                <p class="h5">𝐹𝑜𝓁𝓁𝑜𝓌𝒾𝓃𝑔: {this.state.following}</p>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Aboutus;