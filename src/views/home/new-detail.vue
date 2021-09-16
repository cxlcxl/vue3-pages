<template>
    <el-row :gutter="15">
        <el-col :span="18">
            <el-card class="news-container">
                详情
            </el-card>
        </el-col>

        <el-col :span="6">
            <page-right/>
        </el-col>
    </el-row>
</template>

<script>
    import PageRight from '@/views/components/page-right'
    import {newDetail} from '@/apis/news'

    export default {
        name: "NewDetail",
        components: {
            PageRight
        },
        data() {
            return {
                params: {
                    id: 0
                },
                newInfo: {}
            }
        },
        mounted() {
            this.initPage()
        },
        methods: {
            initPage() {
                this.params = this.$route.params
                newDetail(this.params.id).then(res => {
                    this.newInfo = res.data
                })
            }
        }
    }
</script>

<style scoped>

</style>