<template>
  <div>
    <h1>Add user</h1>
    <div>
        <label for="email">Name</label>
        <input type="text"
           id="name"
           class="form-control"
           v-model="userData.firstname">
    </div>
    <div>
        <label for="email">Last name</label>
        <input type="text"
           id="lastname"
           class="form-control"
           v-model="userData.lastname">
    </div>
    <div>
        <label for="email">E-mail</label>
        <input type="text"
           id="email"
           class="form-control"
           v-model="userData.email">
    </div>
    <button class="button button-new" v-on:click="saveUser()">Save</button>
  </div>
</template>

<script>
  import axios from 'axios'
  import Constants from './../constants'

  export default {

    name: 'UsersAdd',
    methods: {
      saveUser: function () {
        axios.post(Constants.API_URL + '/users/', this.userData)
          .then(response => {
            if (response.status === 201) {
              this.$router.push({ path: '/' })
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    data () {
      return {
        userData: {
          firstname: '',
          lastname: '',
          email: ''
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button {
    margin: 10px 70px;
    padding: 8px;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  .button-new {
    background-color: #00802b;
  }
  .button-new:hover{
    background-color: #009933;
  }
  label {
    font-weight: bold;
    display: inline-block;
    width: 80px;
    text-align: left;
  }
  input[type=text] {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
</style>
