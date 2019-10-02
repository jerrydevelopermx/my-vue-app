<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="main-div">
      <button class="button button-new" v-on:click="addUser()">Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>E-mail</th>
            <th class="actions-th">Actions</th>
            </tr>
        </thead>
        <tbody>
          <UserItem
          				v-for="user in users"
          				:key="user.userId"
          				:user="user"
          			/>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import UserItem from './UserItem.vue'
  import axios from 'axios'
  import Constants from './../constants'

export default {
    name: 'hello',
    components: {
      UserItem
    },
    data () {
      return {
        users: [],
        errors: [],
        msg: 'Welcome to our Contact Manager'
      }
    },
    methods: {
      addUser: function () {
        this.$router.push({ path: '/users/add/' })
      }
    },

    created () {
      axios.get(Constants.API_URL + '/users')
        .then(response => {
          // JSON responses are automatically parsed.
          this.users = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
}
</script>
<style>
  .main-div {
    text-align: left;
  }
  actions-th {
    width: 100px !impotant;
  }
  table {
    margin:  0 auto;
    width: 90%
  }

  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    padding-left: 5px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #35495E;
    color: white;
  }
  td {
    text-align: left;
  }
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
</style>
