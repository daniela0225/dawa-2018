import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Blog.css';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

import axios from '../../axios-blog';

export default class Blog extends Component {
	state = {
		posts: null
	}
	componentDidMount(){
		// Aqui obtendremos nuestros posts
	}
	onPostClickHandler = (postId) => {
		// Aqui cambiaremos de post
	}
	render(){
		let content = (<div>Cargando...</div>);
		if(this.state.posts!=null){
			content = this.state.posts.map(item => {
				return (<Post
					key={item.id}
					postId={item.id}
					title={item.title}
					userId={item.userId}
					clicked={this.onPostClickHandler} />);
			});
		}
		return(<div className={classes.Blog}>
			{content}
			<br />
			<hr />
			<Route path="/posts/:id" component={FullPost} />
		</div>);
	}
	render(){
		let content = (<Spinner />);
		if(this.state.errorMessage) content = (<span>{this.state.errorMessage}</span>);
		if(this.state.loaded){
			content = (<div>
				<h2>{this.state.title}</h2>
				<h4>Escrito por {this.state.userId}</h4>
				<p>{this.state.body}</p>
			</div>);
		}
		return (content);
	}
}
