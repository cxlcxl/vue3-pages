<template>
    <div class="user-info">
        <img :src="avatarSrc"/>
        <el-dropdown>
            <div class="el-dropdown-link">
                东皇太一 <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user">个人资料</el-dropdown-item>
                <el-dropdown-item icon="el-icon-setting">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button" divided>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import avatar from '@/assets/avatar.jpg'

    export default {
        name: "Profile",
        data() {
            return {
                avatarSrc: avatar,
            }
        }
    }
</script>

<style scoped>

</style>