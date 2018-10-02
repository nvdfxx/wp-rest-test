<template>
  <div id="app">
        
        <div class="menu">
            <div class="menu-wrap">
                <div class="logo">
                    <img src="https://png.icons8.com/color/100/000000/unicorn.png">
                </div>
                <ul>
                    <li><router-link to='/posts'>Posts</router-link></li>
                    <li><router-link to='/photos'>Photos</router-link></li>
                    <li><router-link to='/allnames'>All Names</router-link></li>
                    <li><router-link to='/addpost'>Add Post</router-link></li>
                </ul>
            </div>
        </div>
        
        <div class="main-wrapper">        
            
            <keep-alive>
                <router-view></router-view> 
            </keep-alive>

        </div>

  </div>


</template>

<script>
import  axios from 'axios'

export default {
    name: 'app',
    data () {
        return {
           
        }
    }
}
</script>

<style>

body, html {
  margin: 0;
  padding: 0;
}

.main-wrapper {
    padding-top: 50px;
}

.menu {
    padding: 10px 0;
    background: #b537a4;
}

.menu .menu-wrap {
    max-width: 1170px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu .menu-wrap .logo img {
    width: 75px;
}

.menu .menu-wrap ul {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: flex-end;
}

.menu .menu-wrap ul li {
    margin-right: 20px;
    
}

.menu .menu-wrap ul li a {
    color: #0b0117;
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

textarea {
    width: 190px;
    display: inline-block;
    background: transparent;
    border: 1px solid #b537a4;
    padding: 10px;
    font-size: 14px;
    color: #b537a4;
    transition: .2s;
    outline: none;
}

a.read-it {
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
    text-decoration: none;
}

a.read-it:hover,
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

.posts ul li button.delete {
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.posts ul li a.read-it {
    position: absolute;
    bottom: 20px;
    right: 20px;
}

.main-wrapper {
    max-width: 1170px;
    margin: auto;
}

</style>
