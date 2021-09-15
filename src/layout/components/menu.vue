<template>
    <el-menu :default-active="activeMenuItem" mode="horizontal" background-color="#090723" text-color="#aeaeae" active-text-color="#fff">
        <template v-for="r in sysRouters">
            <el-submenu v-if="r.children && r.children.length > 1 && !r.hidden" :index="r.path">
                <template slot="title">{{r.meta.title}}</template>
                <el-menu-item v-for="c in r.children" :index="c.path">
                    <router-link :to="r.path | pathFilter(c.path)">{{c.meta.title}}</router-link>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else-if="r.children && r.children.length === 1 && !r.hidden" :index="r.children[0].path">
                <router-link :to="r.path | pathFilter(r.children[0].path)">{{r.children[0].meta.title}}</router-link>
            </el-menu-item>
            <el-menu-item v-else-if="!r.hidden" :index="r.path">
                <router-link :to="r.path">{{r.meta.title}}</router-link>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    import {constantRoutes} from '@/router'

    export default {
        name: "Menu",
        data() {
            return {
                activeMenuItem: ''
            }
        },
        computed: {
            sysRouters() {
                return constantRoutes
            }
        },
        filters: {
            pathFilter(rPath, cPath) {
                if (rPath.substr(rPath.length - 1) !== "/" && cPath.indexOf("/") !== 0) {
                    cPath = "/" + cPath
                }
                return rPath + cPath
            }
        },
        mounted() {
            console.log(this.$route.path)
            this.activeMenuItem = this.$route.path
        }
    }
</script>

<style scoped lang="scss">
.el-menu--horizontal {
    .el-menu-item {
        padding: 0;
        a {
            color: inherit;
            box-sizing: border-box;
            text-decoration: none;
            display: block;
            width: 100%;
            padding: 0 20px;
        }
    }
}
</style>