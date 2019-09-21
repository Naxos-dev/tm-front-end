<template>
  <div id="app">

      <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <b-container>
  <router-view/>
  </b-container>
      
    <sidebar-menu :menu="menu" />

    
  </div>
</template>

<script>

export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Home',
                        icon: 'User-Secret'
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/team_detail',
                        title: 'Team detail',
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/account_information',
                        title: 'Account information',
                        icon: 'fas fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
            }
        }   
    }

/*
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
*/
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>