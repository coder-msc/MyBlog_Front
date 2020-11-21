import request from '@/utils/request'

export default{

    // 编辑博客
    editBlog(ruleForm) {
        return request({
            url: '/blogservice/blogs/blog/edit',
            method: 'post',
            data: ruleForm
        })
    },

    // 获取图片地址
    uploadAddpicture(formdata) {
        return request({
            url: '/blogservice/blogs/bolg/url',
            method: 'post',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    },

    // 所有博客列表
    showAllBlogs(currentPage) {
        return request({
            url: '/blogservice/blogs/blogs',
            method: 'get'
        })
    },
    // 查看博客详情
    showBlogDetail(blogId) {
        return request({
            url: `/blogservice/blogs/blog/${blogId}`,
            method: 'get'
        })
    }
}
