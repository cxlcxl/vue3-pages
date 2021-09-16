<template>
    <el-card>
        <profile-card/>
        <search/>
        <topic/>
        <my-news/>
    </el-card>
</template>

<script>
    import ProfileCard from './profile-card'
    import Search from './search'
    import Topic from './topic'
    import MyNews from './my-news'

    export default {
        name: "PageRight",
        components: {
            Search, ProfileCard, Topic, MyNews
        }
    }
</script>

<style scoped>

</style>