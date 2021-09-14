<template>
    <el-dialog :title="options.title"
               :visible.sync="options.visible"
               :width="options.width ? options.width : '500px'"
               :fullscreen="options.fullscreen"
               :custom-class="options.class ? options.class : 'dialog-component'"
               append-to-body :close-on-click-modal="false" :close-on-press-escape="false" v-dialog_drag>
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
                        width: "500px",
                        fullscreen: false,
                        class: "dialog-component",
                        visible: false
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .dialog-component {
        .el-dialog__body {
            padding: 15px 20px 30px;

            .dialog-footer {
                text-align: center;
            }
        }
    }
</style>