<template>
  <div id="app">
        <div class="main-wrapper">
            <div>
                <button @click="allNames()" >All names</button>
                <ul>
                    <li v-for="name in names">
                        {{ name }}
                     </li>
                </ul>
            </div>
            <div class="photos">
                <div :class="{active: loading}" class="onloading">Загрузка...</div>
                <input type="number" min="0" v-model.number="photocount">
                <button @click="getPhotos(photocount)">Photos</button>
                <div>
                    <img :src="photos.url" alt="">
                    <p>{{ photos.title }}</p>
                </div>
            
            </div>
            <div class="posts">
                <input type="number" v-model.number="postscount">
                <button @click="getPosts(postscount)">posts</button>
                <ul>
                    <li :key="key" v-for="(post,key,index) in posts">
                        <div class="post-id">Post ID: {{ post.id }}</div>
                        <div class="post-title">Title: {{ post.title }}</div>
                        <div class="post-body">{{ post.body }}</div>
                        <button @click="delPost(index)">delete this post</button>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import  axios from 'axios';

export default {
    name: 'app',
    data () {
        return {
            postscount: 0,
            photocount: 0,
            info: null,
            error: null,
            names: [],
            photos: [],
            posts: [],
            loading: false,
        }
    },
    mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.info = response.data))
      .catch(error =>(console.log(error)))
    },
    
    computed: {

        jsonParcer: function() {
            console.log(JSON.stringify(this.info,null,4));
            return JSON.stringify(this.info,null,4);
        }

    },
    methods: {

        allNames: function() {
            this.names = [];
            for (var i = 0; i < this.info.length; i++) {
                this.names.push(this.info[i].name) 
            }
        },
        getPhotos: function(count) {
            this.loading = true;
            console.log(this.loading);
            axios.get('https://jsonplaceholder.typicode.com/photos/' + count )
                .then(response => (this.photos = response.data))
                .catch(error =>(console.log(error)))
                .finally(this.loading = false);
            console.log(this.loading)
        },
        getPosts: function(count) {
            this.posts = [];
            for(var i = 1; i <= count; i++) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + i )
                .then(response => (this.posts.push(response.data)))
                .catch(error =>(console.log(error)))
                .finally(this.loading = false);
                console.log(this.posts)
            }
        },
        delPost: function(index) {
            this.posts.splice(index, 1)
        }

    }

}
</script>

<style>

body, html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background: #0b0117;
  color: #b537a4;
}

button {
    display: inline-block;
    background: transparent;
    border: 1px solid #b537a4;
    padding: 10px;
    font-size: 14px;
    text-transform: uppercase;
    color: #b537a4;
    cursor: pointer;
    margin-top: 20px;
    transition: .2s;
    outline: none;
}

button:hover {
    background: #b537a4;
    color: #0b0117;
}

input {
    background: transparent;
    border: 1px solid #b537a4;
    padding: 10px;
    color: #b537a4;
    outline: none;
}

.posts ul {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    list-style-type: none;
}

.posts ul li {
    width: 300px;
    padding: 30px 30px 90px;
    border: 1px solid #b537a4;
    margin-bottom: 20px;
    position: relative;
}

.posts ul li:not(:nth-child(3n)) {
    margin-right: 20px;
}

.posts ul li .post-title {
    margin: 20px 0;

}

.posts ul li button {
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.main-wrapper {
    max-width: 1170px;
    margin: auto;
}

</style>
