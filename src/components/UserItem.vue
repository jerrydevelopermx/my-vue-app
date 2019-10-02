<template>
  <tr>
    <td>{{ user.firstname }}</td>
    <td>{{ user.lastname }}</td>
    <td>{{ user.email }}</td>
    <td>
      <button class="button button-edit" v-on:click="editUser(user.userId)">Edit</button>
      <button class="button button-delete" v-on:click="deleteUser(user.userId)">Delete</button>
    </td>
  </tr>


</template>

<script>
import axios from 'axios'
import Constants from './../constants'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    editUser: function (userId) {
      this.$router.push({ path: '/users/edit/' + userId })
    },
    deleteUser: function (userId) {
      axios.delete(Constants.API_URL + '/users/' + userId)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
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

  .button-edit {
    background-color: #cc7a00;
  }
  .button-edit:hover {
    background-color: #ff9900;
  }

  .button-delete {
    background-color: #cc0000;
  }
  .button-delete:hover {
    background-color: #ff1a1a;
  }
</style>
