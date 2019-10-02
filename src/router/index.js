import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import UserEdit from '@/components/UserEdit'
import UserAdd from '@/components/UserAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userslist',
      component: UserList
    },
    {
      path: '/users/edit/:id',
      name: 'usersedit',
      component: UserEdit,
      props: true
    },
    {
      path: '/users/add',
      name: 'usersadd',
      component: UserAdd,
      props: true
    }

  ]
})
