<template>
    <custom-dialog ref="loginDialog" :options="options">
        <template slot="body">
            <el-form ref="forgot" :model="form" size="small" label-width="80px" :rules="loginRules">
                <el-form-item label="邮箱" prop="email">
                    <el-input placeholder="请输入邮箱" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="capture">
                    <el-input type="text" placeholder="请输入验证码" v-model="form.capture">
                        <el-button slot="append" @click="handleShowPass">
                            <svg-icon icon-class="eye-open" v-if="showType === 'show'"></svg-icon>
                            <svg-icon icon-class="eye" v-else></svg-icon>
                        </el-button>
                    </el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="password">
                    <el-input :type="showType|passTypeView" placeholder="请输入密码" v-model="form.password">
                        <el-button slot="append" @click="handleShowPass">
                            <svg-icon icon-class="eye-open" v-if="showType === 'show'"></svg-icon>
                            <svg-icon icon-class="eye" v-else></svg-icon>
                        </el-button>
                    </el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmation_password">
                    <el-input type="password" placeholder="请重新输入密码" v-model="form.confirmation_password"></el-input>
                </el-form-item>
                <p class="info">
                    <span>去 <a @click="handleLogin">登陆</a></span>
                </p>
            </el-form>
        </template>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel" size="small" :loading="loading">取消</el-button>
            <el-button type="primary" @click="handleRegister" size="small" :loading="loading">重置</el-button>
        </div>
    </custom-dialog>
</template>

<script>
    import CustomDialog from '../dialog'

    const passOptions = {'show': 'text', 'hide': 'password'}
    export default {
        name: "ResetPassword",
        components: {
            CustomDialog
        },
        data() {
            return {
                loading: false,
                showType: 'hide',
                options: {
                    title: '重置密码',
                    visible: false,
                    width: '360px',
                    class: 'account-panel'
                },
                form: {
                    email: '',
                    capture: '',
                    password: '',
                    confirmation_password: '',
                },
                loginRules: {
                    email: {required: true, message: '邮箱必填'},
                    capture: {required: true, message: '验证码必填'},
                    password: {required: true, message: '密码必填'},
                    confirmation_password: {confirmation_password: true, message: '确认密码必填'},
                }
            }
        },
        filters: {
            passTypeView(t) {
                return passOptions[t]
            }
        },
        methods: {
            doResetPass() {
                this.options.visible = true
            },
            handleCancel() {
                this.$refs.forgot.resetFields()
                this.options.visible = false
            },
            handleRegister() {
                this.loading = true
                this.$refs.forgot.validate((valid) => {
                    if (valid) {

                    } else {
                        this.loading = false
                        return false
                    }
                })
            },
            handleShowPass() {
                this.showType = this.showType === 'show' ? 'hide' : 'show'
            },
            handleLogin() {
                this.options.visible = false
                this.$emit('call-login')
            }
        }
    }
</script>