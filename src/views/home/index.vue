<template>
    <el-row :gutter="15">
        <el-col :span="18">
            <el-card>asdfa</el-card>
        </el-col>

        <el-col :span="6">
            <el-card>
                <page-right/>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import PageRight from '@/views/components/page-right'

    export default {
        name: "Home",
        components: {
            PageRight
        }
    }
</script>

<style scoped>

</style>