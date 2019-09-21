import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Account_information from './views/Account_information.vue'
import Dashboard from './views/Dashboard.vue'
import Team_detail from './views/Team_detail.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/account_information',
            name: 'account_information',
            component: Account_information
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/team_detail',
            name: 'team_detail',
            component: Team_detail
        }
    ]
})