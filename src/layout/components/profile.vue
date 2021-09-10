<template>
    <div class="user-info">
        <img :src="avatarSrc"/>
        <el-dropdown @command="handleCommand">
            <div class="el-dropdown-link">
                东皇太一 <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile" icon="el-icon-user">个人资料</el-dropdown-item>
                <el-dropdown-item command="reset-password" icon="el-icon-setting">修改密码</el-dropdown-item>
                <el-dropdown-item command="logout" icon="el-icon-switch-button" divided>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import avatar from '@/assets/avatar.jpg'

    export default {
        name: "HeaderProfile",
        data() {
            return {
                avatarSrc: avatar,
            }
        },
        methods: {
            handleCommand(command) {
                if (command === 'logout') {
                    this.$message.success('退出成功')
                } else {
                    this.routerTo(command)
                }
            },
            routerTo(page) {
                if (this.$route.path === ("/" + page)) {
                    return true
                }
                this.$router.push('/' + page)
            }
        }
    }
</script>

<style scoped>

</style>