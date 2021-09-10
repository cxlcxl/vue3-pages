<template>
    <div class="search-component">
        <el-input placeholder="输入搜索" v-model="keyword" class="input-with-select" size="small">
            <el-button slot="append" icon="el-icon-search" size="small"></el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                keyword: 'php'
            }
        }
    }
</script>

<style scoped>

</style>