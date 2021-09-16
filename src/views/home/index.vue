<template>
    <el-row :gutter="15">
        <el-col :span="18">
            <el-card class="news-container">
                <div v-if="newList.list.length > 0">
                    <div class="news-list" v-for="item in newList.list">
                        <h3 class="news-title" @click="newDetail(item.id)">{{item.title}}</h3>
                        <p class="news-create_at">
                            <svg-icon icon-class="clock"></svg-icon>&nbsp;&nbsp;{{item.created_at}}
                        </p>
                        <div class="news-content" @click="newDetail(item.id)">{{item.content}}</div>
                    </div>

                    <div class="news-pagination">
                        <el-pagination :page-size="search.search" layout="prev, pager, next, total" :total="newList.total"></el-pagination>
                    </div>
                </div>
                <el-skeleton :rows="6" animated v-else/>
            </el-card>
        </el-col>

        <el-col :span="6">
            <page-right/>
        </el-col>
    </el-row>
</template>

<script>
    import PageRight from '@/views/components/page-right'
    import {getNews} from '@/apis/news'

    export default {
        name: "Home",
        components: {
            PageRight
        },
        data() {
            return {
                newList: {
                    total: 0,
                    list: []
                },
                search: {
                    page: 1,
                    limit: 15
                }
            }
        },
        mounted() {
            this.getNewsList()
        },
        methods: {
            getNewsList() {
                getNews(this.search).then(res => {
                    this.newList = res.data
                })
            },
            newDetail(new_id) {
                this.$router.push('/news/' + new_id)
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
