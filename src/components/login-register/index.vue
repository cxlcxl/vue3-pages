<template>
    <div>
        <register-page ref="_register" @call-login="login"/>
        <login-page ref="_login" @call-register="register" @call-reset-pass="resetPass"/>
        <reset-password ref="_forgot" @call-login="login"/>
    </div>
</template>

<script>
    import LoginPage from './login'
    import RegisterPage from './register'
    import ResetPassword from './forgot-password'

    export default {
        name: "LoginRegister",
        components: {
            ResetPassword, LoginPage, RegisterPage
        },
        methods: {
            register() {
                this.$refs._register.doRegister()
            },
            login() {
                this.$refs._login.doLogin()
            },
            resetPass() {
                this.$refs._forgot.doResetPass()
            }
        }
    }
</script>

<style lang="scss">
    .account-panel {
        .el-dialog__body {
            padding: 15px 20px 30px;

            .dialog-footer {
                text-align: center;
            }
        }

        .info {
            font-size: 12px;
            color: #a4a4a4;
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
    }
</style>