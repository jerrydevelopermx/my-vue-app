<template>
  <div>
    <h1>Edit user</h1>
    <div class="form-group">
        <label for="email">Name</label>
        <input type="text"
           id="name"
           class="form-control"
           v-model="userData.firstname">
    </div>
    <div class="form-group">
        <label for="email">Last name</label>
        <input type="text"
           id="lastname"
           class="form-control"
           v-model="userData.lastname">
    </div>
    <div class="form-group">
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

    name: 'UsersEdit',
    props: ['id'],
    methods: {
      saveUser: function () {
        axios.put(Constants.API_URL + '/users/' + this.id, this.userData)
          .then(response => {
            if (response.status === 200) {
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
        }
      }
    },
    created () {
      axios.get(Constants.API_URL + '/users/' + this.id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.userData = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
}
</script>
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
