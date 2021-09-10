<template>
    <el-dialog :title="options.title"
               :visible.sync="visible"
               :width="options.width"
               :fullscreen="options.fullscreen"
               :custom-class="options.class"
               append-to-body :close-on-click-modal="false">
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </el-dialog>
</template>

<script>
    export default {
        name: "Dialog",
        props: {
            options: {
                type: Object,
                default: () => {
                    return {
                        title: "",
                        width: 500,
                        fullscreen: false,
                        class: "",
                    }
                }
            }
        },
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            handleOpen() {
                this.visible = true
            },
            handleClose() {
                this.visible = false
            }
        }
    }
</script>

<style scoped>

</style>