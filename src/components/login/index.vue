<template>
    <custom-dialog ref="loginDialog" :options="options">
        <template slot="body">
            <el-form :model="form">
                <el-form-item label="活动名称" label-width="120">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        </template>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </custom-dialog>
</template>

<script>
    import CustomDialog from '../dialog'

    export default {
        name: "Login",
        components: {
            CustomDialog
        },
        data() {
            return {
                form: {
                    name:''
                },
                options: {
                    title: '登陆/注册',
                    width: 500
                }
            }
        }
    }
</script>

<style scoped>

</style>