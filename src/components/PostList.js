import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchPostsAndUsers} from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component {

    componentDidMount(){
        this.props.fetchPostsAndUsers()
    }
    
    renderPosts(){
        return this.props.posts.map((post) =>{
            return(
                <div key={post.id} className="ui item">
                    <i className="ui large middle aligned icon user" />
                    <div className="ui content">
                        <div className="ui description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render() {

        return (
            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);
