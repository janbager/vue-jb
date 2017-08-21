<template>
    <div id="app">
        <header>
            <b-navbar toggleable type="light" variant="info" toggle-breakpoint="md">

                <b-nav-toggle target="nav_collapse"></b-nav-toggle>
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-collapse is-nav id="nav_collapse">

                    <b-nav is-nav-bar>
                        <b-nav-item to="home">Home</b-nav-item>
                        <b-nav-item to="employee">Employee</b-nav-item>
                    </b-nav>

                    <!-- Right alignd nav items -->
                    <b-nav is-nav-bar class="ml-auto">

                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item to="#">EN</b-dropdown-item>
                            <b-dropdown-item to="#">ES</b-dropdown-item>
                            <b-dropdown-item to="#">RU</b-dropdown-item>
                            <b-dropdown-item to="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using button-content slot -->
                            <template slot="button-content">
                                <em>User</em>
                            </template>
                            <b-dropdown-item to="#">Profile</b-dropdown-item>
                            <b-dropdown-item to="#">Signout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-nav>

                </b-collapse>
            </b-navbar>
        </header>
        <div class="app-body">
            <router-view></router-view>
        </div>
        <footer></footer>
    </div>
</template>

<script>
  export default {
    name: 'base-layout',
  };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>
