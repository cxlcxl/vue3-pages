<template>
    <el-row :gutter="15">
        <el-col :span="18">
            <el-card class="news-container">
                <div v-if="list.length > 0">
                    <div class="news-list" v-for="item in list">
                        <h3 class="news-title" @click="newDetail(item.id)">{{item.title}}</h3>
                        <p class="news-create_at">
                            <svg-icon icon-class="clock"></svg-icon>&nbsp;&nbsp;{{item.created_at}}
                        </p>
                        <div class="news-content" @click="newDetail(item.id)">{{item.content}}</div>
                    </div>

                    <div class="news-pagination">
                        <el-pagination :page-size="15" layout="prev, pager, next, total" :total="1000"></el-pagination>
                    </div>
                </div>
                <el-skeleton :rows="6" animated v-else/>
            </el-card>
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
        },
        data() {
            return {
                list: [
                    {
                        id: 1,
                        title: "JSON Binding when incorrect type is passed in #2131",
                        created_at: "2021-09-15",
                        content: "I would like to use binding to validate JSON body input to my HTTP handlers, but I get a panic when the incorrect type is passed in. Am I doing something wrong? Should I be type checking my JSON input before calling the Bind function?@qq.com"
                    },
                    {
                        id: 2,
                        title: "JSON Binding when incorrect type is passed in #2131",
                        created_at: "2021-09-15",
                        content: "I would like to use binding to validate JSON body input to my HTTP handlers, but I get a panic when the incorrect type is passed in. Am I doing something wrong? Should I be type checking my JSON input before calling the Bind function?@qq.com"
                    },
                    {
                        id: 3,
                        title: "JSON Binding when incorrect type is passed in #2131",
                        created_at: "2021-09-15",
                        content: "I would like to use binding to validate JSON body input to my HTTP handlers, but I get a panic when the incorrect type is passed in. Am I doing something wrong? Should I be type checking my JSON input before calling the Bind function?@qq.com"
                    },
                    {
                        id: 4,
                        title: "JSON Binding when incorrect type is passed in #2131",
                        created_at: "2021-09-15",
                        content: "I would like to use binding to validate JSON body input to my HTTP handlers, but I get a panic when the incorrect type is passed in. Am I doing something wrong? Should I be type checking my JSON input before calling the Bind function?@qq.com"
                    },
                ]
            }
        },
        methods: {
            newDetail(new_id) {
                this.$message.success(new_id)
            }
        }
    }
</script>

<style lang="scss">
    .news-container {
        .news-list {
            border-bottom: 1px solid #e0e0e0;
            padding: 0 15px 15px;
            margin-top: 15px;

            .news-title {
                cursor: pointer;
                color: #545559;
                margin: 10px 0;

                &:hover {
                    text-decoration: underline;
                }
            }

            .news-create_at {
                font-size: 12px;
                margin: 0 0 5px 0;
                padding: 0;
                color: #989898;
            }

            .news-content {
                cursor: pointer;
                color: #666666;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .news-pagination {
            margin-top: 20px;
        }
    }
</style>
