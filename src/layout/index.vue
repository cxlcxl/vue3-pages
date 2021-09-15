<template>
    <div id="web">
        <div class="app-header">
            <div class="logo"><img src="../assets/logo.png" alt=""></div>
            <header-menu/>
            <profile/>
        </div>
        <transition name="fade-transform" mode="out-in">
            <div class="app-container">
                <breadcrumb/>

                <router-view/>
            </div>
        </transition>
    </div>
</template>

<script>
    import Profile from './components/profile'
    import HeaderMenu from './components/menu'
    import Breadcrumb from './components/breadcrumb'

    export default {
        components: {
            Profile, HeaderMenu, Breadcrumb
        },
        name: "Layout",
        data() {
            return {
                activeIndex: '1'
            };
        }
    }
</script>
