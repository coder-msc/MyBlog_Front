<template>


    <div >
        <Header></Header>

        <!-- 讲师列表 开始 -->
        <section class="container">
            <header class="comm-title all-teacher-title">

                <header class="comm-title">
                    <h2 class="fl tac">
                        <span class="c-333">全部笔记</span>
                    </h2>
                </header>
                <!--<section class="c-tab-title">
                  <a id="subjectAll" title="全部" href="#">全部</a>
                  &lt;!&ndash; <c:forEach var="subject" items="${subjectList }">
                                    <a id="${subject.subjectId}" title="${subject.subjectName }" href="javascript:void(0)" onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>
                  </c:forEach>&ndash;&gt;
                </section>-->
                <section class="c-sort-box">
                    <section class="c-s-dl">
                        <dl>
                            <dt>
                                <span class="c-999 fsize14">类别</span>
                            </dt>
                            <dd class="c-s-dl-li">
                                <ul class="clearfix">
                                    <li>
                                        <a title="全部" href="#">全部</a>
                                    </li>
                                    <li v-for="(item, index) in subjectNestedList" :key="index" :class="{active:oneIndex==index}">
                                        <a :title="item.title" href="#" @click="searchOne(item.id,index)">{{ item.title }}</a>
                                    </li>
                                    <li>
                                        <a title="全部" href="#">全部</a>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <span class="c-999 fsize14"/>
                            </dt>
                            <dd class="c-s-dl-li">
                                <ul class="clearfix">
                                    <li v-for="(item, index) in subSubjectList" :key="index" :class="{active:twoIndex==index}">
                                        <a :title="item.title" href="#" @click="searchTwo(item.id,index)">{{ item.title }}</a>
                                    </li>

                                </ul>
                            </dd>
                        </dl>
                        <div class="clear"/>
                    </section>


                    <div class="js-wrap">
                        <section class="fr">
              <span class="c-ccc">
                <i class="c-master f-fM">1</i>/
                <i class="c-666 f-fM">1</i>
              </span>
                        </section>
                        <section class="fl">
                            <ol class="js-tap clearfix">
                                <li :class="{'current bg-orange':buyCountSort!=''}">
                                    <a title="销量" href="javascript:void(0);" @click="searchBuyCount()">销量
                                        <span :class="{hide:buyCountSort==''}">↓</span>
                                    </a>
                                </li>
                                <li :class="{'current bg-orange':gmtCreateSort!=''}">
                                    <a title="最新" href="javascript:void(0);" @click="searchGmtCreate()">最新
                                        <span :class="{hide:gmtCreateSort==''}">↓</span>
                                    </a>
                                </li>
                                <li :class="{'current bg-orange':priceSort!=''}">
                                    <a title="价格" href="javascript:void(0);" @click="searchPrice()">价格&nbsp;
                                        <span :class="{hide:priceSort==''}">↓</span>
                                    </a>
                                </li>
                            </ol>
                        </section>
                    </div>
                </section>
            </header>

           <section class="c-sort-box unBr">
               <div>
                    <!-- /无数据提示 开始-->
<!--                    <section v-if="data.total!=0" class="no-data-wrap">-->
<!--                        <em class="icon30 no-data-ico">&nbsp;</em>-->
<!--                        <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>-->
<!--                    </section>-->
                    <!-- /无数据提示 结束-->
<!--                    <article v-if="data.total==0" class="i-teacher-list">-->
                        <article v-if="data.total!=0" class="i-teacher-list">

                        <ul class="of">
                            <li v-for="notes in data.records" :key="notes.id">
                                <section class="i-teach-wrap">
                                    <div class="i-teach-pic">
<!--                                        <a :title="notes.title" :href="'/NoteDetail/'+notes.id" target="_blank">-->
<!--                                            <img :src="notes.blogAvatar" :alt="notes.name">-->
<!--                                        </a>-->
                                        <a :title="notes.title" @click="seeBlogDetail(notes.id)" target="_blank">
                                            <img :src="notes.blogAvatar" :alt="notes.name">
                                        </a>
                                    </div>
<!--                                    <router-link :to="{name: 'BlogDetail', params: {blogId: notes.id}}">-->
<!--                                                                           </router-link>-->
                                    <div class="mt10 hLh30 txtOf tac">
                                        <a :title="notes.name" :href="'/BlogDetail/'+notes.id" target="_blank" class="fsize18 c-666">{{ notes.name }}</a>
                                    </div>
                                    <div class="hLh30 txtOf tac">
                                        <span class="fsize14 c-999">{{ notes.title }}</span>
                                    </div>
                                    <div class="mt15 i-q-txt">
                                        <p class="c-999 f-fA">{{ notes.createdTime }}</p>
                                    </div>
                                </section>
                            </li>

                        </ul>
                        <div class="clear"/>
                    </article>
                </div>
<!--                 公共分页 开始 -->
                <div>
                    <div class="paging">
                        <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
                        <a
                                :class="{undisable: !data.hasPrevious}"
                                href="#"
                                title="首页"
                                @click.prevent="gotoPage(1)">首</a>
                        <a
                                :class="{undisable: !data.hasPrevious}"
                                href="#"
                                title="前一页"
                                @click.prevent="gotoPage(data.current-1)">&lt;</a>
                        <a
                                v-for="page in data.pages"
                                :key="page"
                                :class="{current: data.current == page, undisable: data.current == page}"
                                :title="'第'+page+'页'"
                                href="#"
                                @click.prevent="gotoPage(page)">{{ page }}</a>
                        <a
                                :class="{undisable: !data.hasNext}"
                                href="#"
                                title="后一页"
                                @click.prevent="gotoPage(data.current+1)">&gt;</a>
                        <a
                                :class="{undisable: !data.hasNext}"
                                href="#"
                                title="末页"
                                @click.prevent="gotoPage(data.pages)">末</a>
                        <div class="clear"/>
                    </div>
                </div>
<!--                 公共分页 结束-->
            </section>
        </section>
        <Footer></Footer>

        <!-- /讲师列表 结束 -->
    </div>
</template>
<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import blogs from '@/api/notes'

    export default {
        name: "Blogs.vue",
        components: {Header,Footer},
        data() {
            return {
                blogs: {},
                // currentPage: 1,
                page: 1, // 当前页
                limit: 8, // 每页显示的数量
                total: 0, // 总记录数
                pageSize: 5,
                data:{}
            }
        },
        methods: {
            showAllNotes(page){
                blogs.showAllBlogs(page).then(response=>{
                    console.log("--============----"+response.data.pageData.records)
                    this.data = response.data.pageData
                });
            },
            // 分页切换效果
            gotoPage(page) {
                // this.data={};
                blogs.showAllBlogs(page).then(response => {
                    this.data = response.data.pageData
                })
            },
            seeBlogDetail(blogId){
                this.$router.push({ path: `/NoteDetail/${blogId}` })
                console.log(blogId + '------------')
            }
        },
        created() {
            this.showAllNotes(1)
        }
    }


    // import teacherApi from '@/api/teacher'
    // export default {
    //     // 异步调用 且只调用一次
    //     asyncData({ params, error }) {
    //         return teacherApi.getTeacherFront(1, 8).then(response => {
    //             return { data: response.data.data }
    //         })
    //     },
        methods: {
            // // 分页切换效果
            // gotoPage(page) {
            //     teacherApi.getTeacherFront(page, 8).then(response => {
            //         this.data = response.data.data
            //     })
            // }
        }
    // }
</script>
