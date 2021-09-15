<template>
    <custom-dialog ref="loginDialog" :options="options">
        <template slot="body">
            <el-form ref="forgot" :model="form" size="small" label-width="80px" :rules="loginRules">
                <el-form-item label="邮箱" prop="email">
                    <el-input placeholder="请输入邮箱" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verify">
                    <el-input type="text" placeholder="请输入验证码" v-model="form.verify">
                        <el-button slot="append" @click="handleVerify" :loading="verifySecond > 0">
                            <span v-if="verifySecond > 0">发送中 {{verifySecond}}s</span>
                            <span v-else-if="verifySecond === -1">获取验证码</span>
                            <span v-else>重新获取</span>
                        </el-button>
                    </el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                    <el-input :type="showType|passTypeView" placeholder="请输入密码" v-model="form.pass">
                        <el-button slot="append" @click="handleShowPass">
                            <svg-icon icon-class="eye-open" v-if="showType === 'show'"></svg-icon>
                            <svg-icon icon-class="eye" v-else></svg-icon>
                        </el-button>
                    </el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmation_pass">
                    <el-input type="password" placeholder="请重新输入密码" v-model="form.confirmation_pass"></el-input>
                </el-form-item>
                <p class="info">
                    <span>去 <a @click="handleLogin">登陆</a></span>
                </p>
            </el-form>
        </template>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel" size="small" :loading="loading">取消</el-button>
            <el-button type="primary" @click="handleSubmit" size="small" :loading="loading">重置</el-button>
        </div>
    </custom-dialog>
</template>

<script>
    import CustomDialog from '../dialog'
    import {emailVerify, forgotReset} from "@/apis/user"

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
                    verify: '',
                    pass: '',
                    confirmation_pass: '',
                },
                loginRules: {
                    email: {required: true, type: 'email', message: '请填写正确的邮箱'},
                    verify: {required: true, message: '验证码必填'},
                    pass: {required: true, message: '密码必填'},
                    confirmation_pass: {required: true, message: '确认密码必填'},
                },
                verifySecond: -1,
                timer: {}
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
            handleSubmit() {
                this.loading = true
                this.$refs.forgot.validate((valid) => {
                    if (valid) {
                        if (this.form.pass !== this.form.confirmation_pass) {
                            this.$message.error('两次输入密码不一致')
                            this.loading = false
                            return
                        }
                        forgotReset(this.form).then(() => {
                            this.$message.success('密码重置成功')
                            this.loading = false
                            this.handleLogin()
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
            handleVerify() {
                if (!this.form.email) {
                    this.$message.error('请先填写邮箱')
                    return false
                }
                this.verifySecond = 60
                emailVerify(this.form.email).then(() => {
                    this.$message.success('验证码生成成功')
                    let _t = this
                    this.timer = setInterval(function () {
                        _t.verifySecond--
                        if (_t.verifySecond === 0) {
                            clearInterval(_t.timer)
                        }
                    }, 1000)
                }).catch(() => {
                    this.verifySecond = -1
                })
            },
            handleLogin() {
                this.options.visible = false
                this.$emit('call-login')
            }
        }
    }
</script>