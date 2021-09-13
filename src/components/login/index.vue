<template>
    <custom-dialog ref="loginDialog" :options="options">
        <template slot="body">
            <el-form ref="login" :model="form" size="small" label-width="80px" :rules="loginRules">
                <el-form-item label="登陆名" prop="username">
                    <el-input placeholder="请输入登陆名" v-model="form.username"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input :type="passType" placeholder="请输入密码" v-model="form.password"/>
                </el-form-item>
                <p class="register">
                    <span><a>立即注册</a></span>
                    <span><a>忘记密码?</a></span>
                </p>
            </el-form>
        </template>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel" size="small">取消</el-button>
            <el-button type="primary" @click="handleLogin" size="small">确定</el-button>
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
                passType: 'password',
                options: {
                    title: '登陆/注册',
                    visible: false,
                    width: '360px',
                    class: ''
                },
                form: {
                    username: '',
                    password: '',
                },
                loginRules: {
                    username: {required: true, message: '登录名必填'},
                    password: {required: true, message: '密码必填'},
                }
            }
        },
        methods: {
            doLogin() {
                this.options.visible = true
            },
            handleCancel() {
                this.$refs.login.resetFields()
                this.options.visible = false
            },
            handleLogin() {
                this.$refs.login.validate((valid) => {
                    if (valid) {
                        this.$store.dispatch("user/login", this.form).then(() => {
                            this.$store.dispatch("user/getInfo")
                        })
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .register {
        font-size: 12px;
        color: #b5b5b5;
        text-align: center;

        span {
            &:not(:first-child) {
                margin-left: 5px;
            }

            a {
                text-decoration: underline;
                cursor: pointer;

                &:hover {
                    color: #409eff;
                }
            }
        }
    }
</style>