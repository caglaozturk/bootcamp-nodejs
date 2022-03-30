<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item" v-on:click="setActive('home')" :class="{ active: isActive('home') }">
            <router-link class="nav-link" to="/">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>                
            </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Pages
        </div>

        <!-- Nav Item - Tables -->
        <li class="nav-item" v-on:click="setActive('users')" :class="{ active: isActive('users') }">
            <router-link class="nav-link" to="/users">
                <i class="fas fa-fw fa-users"></i>
                <span>Users</span>                
            </router-link>
        </li>

        <!-- Nav Item - Charts -->
        <li class="nav-item" v-on:click="setActive('todos')" :class="{ active: isActive('todos') }">
            <router-link class="nav-link" to="/todos">
                <i class="fas fa-fw fa-tasks"></i>
                <span>Todos</span>                
            </router-link>
        </li>
        
        <!-- Nav Item - Tables -->
        <li class="nav-item" v-on:click="setActive('albums')" :class="{ active: isActive('albums') }">
            <router-link class="nav-link" to="/albums">
                <i class="fas fa-fw fa-music"></i>
                <span>Albums</span>                
            </router-link>
        </li>

        <!-- Nav Item - Tables -->
        <li class="nav-item" v-on:click="setActive('posts')" :class="{ active: isActive('posts') }">
            <router-link class="nav-link" to="/posts">
                <i class="fas fa-fw fa-sticky-note"></i>
                <span>Posts</span>                
            </router-link>
        </li>

        <!-- Nav Item - Tables -->
        <li class="nav-item" v-on:click="setActive('comments')" :class="{ active: isActive('comments') }">
            <router-link class="nav-link" to="/comments">
                <i class="fas fa-fw fa-comment"></i>
                <span>Comments</span>                
            </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

    </ul>
    <!-- End of Sidebar -->
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return { activeItem: 'home' }
    },
    methods: {
        isActive: function (menuItem) {
            return this.activeItem === menuItem
        },
        setActive: function (menuItem) {
            this.activeItem = menuItem // no need for Vue.set()
        }
    }
}
</script>
