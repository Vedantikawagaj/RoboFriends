import React, { Component } from 'react'
import axios from 'axios';
class PostList extends Component {
    
   constructor(props) {
       super(props)
   
       this.state = {
            userId: '',
            title: '',
            body: ''
       }
   }
   onChangeHandler= (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
   }
   onSubmitHandler = (e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
   }
    render() {
        
        return (
            <div>
               <form onSubmit={this.onSubmitHandler}>
                   <div>
                   <input type="text" name='userId' value={this.state.userId} onChange={this.onChangeHandler}/>
                   </div>
                   <div>
                   <input type="text" name='title' value={this.state.title} onChange={this.onChangeHandler}/>
                   </div>
                   <div>
                   <input type="text" name='body' value={this.state.body} onChange={this.onChangeHandler}/>
                   </div>
                   <button type='submit'>Submit</button>
               </form>

            </div>
        )
    }
}

export default PostList
