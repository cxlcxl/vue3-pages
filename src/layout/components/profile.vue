<template>
    <div class="user-info">
        <div v-if="user_id">
            <img :src="avatar ? avatar : avatarSrc"/>
            <el-dropdown @command="handleCommand">
                <div class="el-dropdown-link">
                    {{name}} <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="profile" icon="el-icon-user">个人资料</el-dropdown-item>
                    <el-dropdown-item command="reset-password" icon="el-icon-setting">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout" icon="el-icon-switch-button" divided>退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div v-else>
            <span class="no-auth" @click="handleLogin">登陆</span>
            <span class="no-auth" @click="handleRegister">注册</span>

            <login-register ref="_login"/>
        </div>
    </div>
</template>

<script>
    import avatar from '@/assets/avatar.jpg'
    import { mapGetters } from 'vuex'
    import LoginRegister from '@/components/login'

    export default {
        name: "HeaderProfile",
        components: {
            LoginRegister
        },
        data() {
            return {
                avatarSrc: avatar,
            }
        },
        computed: {
            ...mapGetters([
                'user_id',
                'name',
                'avatar'
            ]),
        },
        methods: {
            handleCommand(command) {
                if (command === 'logout') {
                    this.logout()
                } else {
                    this.routerTo(command)
                }
            },
            routerTo(page) {
                if (this.$route.path === ("/" + page)) {
                    return true
                }
                this.$router.push('/' + page)
            },
            logout() {
                this.$store.dispatch('user/logout').then(() => {
                    location.reload()
                })
            },
            handleLogin() {
                this.$refs._login.doLogin()
            },
            handleRegister() {
                this.$message.success('注册')
            }
        }
    }
</script>

<style scoped lang="scss">
.no-auth {
    display: inline-block;
    padding: 0 10px;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #409eff;
    }
}
</style>