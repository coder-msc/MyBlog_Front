<template>
    <div >
        <Header></Header>

        <div class="mblog">
            <h2> {{ blog.title }}</h2>
            <el-link v-if="ownBlog" icon="el-icon-edit">
                <router-link :to="{name: 'BlogEdit', params: {blogId: blog.id}}" >
                    编辑
                </router-link>
            </el-link>
            <el-divider/>
            <div class="markdown-body" v-html="blog.content"/>

        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import blogs from '@/api/notes'

    export default {
        name: "detail.vue",
        components: {Header,Footer},
        data() {
            return {
                blog: {
                    id: '',
                    title: '',
                    content: ''
                },
                ownBlog: false
            }
        },
        methods: {
            showBlogDetail(blogId) {
                blogs.showBlogDetail(blogId).then(request => {
                    const blog = request.data.data
                    this.blog.id = blog.id
                    this.blog.title = blog.title
                    var MardownIt = require('markdown-it')
                    var md = new MardownIt()
                    var result = md.render(blog.content)
                    this.blog.content = result
                })
            }
        },
        created() {
            // 进入页面之前就调用方法 查询出博客详细
            const blogId = this.$route.params.blogId
            this.showBlogDetail(blogId)
        }
    }
</script>

<style scoped>

    .mpage {
        margin: 0 auto;
        text-align: center;
    }

</style>
