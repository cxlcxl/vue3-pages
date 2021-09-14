<template>
    <custom-dialog ref="loginDialog" :options="options">
        <template slot="body">
            <el-form ref="login" :model="form" size="small" label-width="80px" :rules="loginRules">
                <el-form-item label="登陆名" prop="username">
                    <el-input placeholder="请输入登陆名" v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input :type="showType|passTypeView" placeholder="请输入密码" v-model="form.password">
                        <el-button slot="append" @click="handleShowPass">
                            <i class="el-icon-view" v-if="showType === 'show'"></i>
                            <svg-icon icon-class="eye" v-else></svg-icon>
                        </el-button>
                    </el-input>
                </el-form-item>
                <p class="info">
                    <span><a @click="handleRegister">立即注册</a></span>
                    <span><a @click="forgotPassword">忘记密码?</a></span>
                </p>
            </el-form>
        </template>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel" size="small" :loading="loading">取消</el-button>
            <el-button type="primary" @click="handleLogin" size="small" :loading="loading">登陆</el-button>
        </div>
    </custom-dialog>
</template>

<script>
    import CustomDialog from '../dialog'

    const passOptions = {'show': 'text', 'hide': 'password'}
    export default {
        name: "Login",
        components: {
            CustomDialog
        },
        data() {
            return {
                loading: false,
                showType: 'hide',
                options: {
                    title: '登陆',
                    visible: false,
                    width: '360px',
                    class: 'account-panel'
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
        filters: {
            passTypeView(t) {
                return passOptions[t]
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
                this.loading = true
                this.$refs.login.validate((valid) => {
                    if (valid) {
                        this.$store.dispatch("user/login-register", this.form).then(() => {
                            this.loading = false
                            this.$store.dispatch("user/getInfo")
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        this.loading = false
                        return false
                    }
                })
            },
            handleShowPass() {
                this.showType = this.showType === 'show' ? 'hide' : 'show'
            },
            handleRegister() {
                this.options.visible = false
                this.$emit('call-register')
            },
            forgotPassword() {
                this.options.visible = false
                this.$emit('call-reset-pass')
            }
        }
    }
</script>
