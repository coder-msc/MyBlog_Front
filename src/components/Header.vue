<template>
    <div class="in-wrap">

        <header id="header">
            <section class="container">
                <h1 id="logo">
                    <a href="#" title="谷粒学院">
                        <img src="@/assets/img/logo.png" width="100%" alt="谷粒学院">
                    </a>
                </h1>
                <div class="h-r-nsl">
                    <ul class="nav">
                        <router-link to="/" tag="li" active-class="current" exact>
                            <a>首页</a>
                        </router-link>
                        <router-link to="/Notes" tag="li" active-class="current">
                            <a>笔记</a>
                        </router-link>
                        <router-link to="/Tools" tag="li" active-class="current">
                            <a>工具</a>
                        </router-link>
                        <router-link to="/Wallpaper" tag="li" active-class="current">
                            <a>壁纸</a>
                        </router-link>
                        <router-link to="/Friends" tag="li" active-class="current">
                            <a>友链</a>
                        </router-link>
                    </ul>
                    <!-- / nav -->
                    <ul class="h-r-login">
                        <li v-if="!loginInfo.id" id="no-login">
                            <a href="/login" title="登录">
                                <em class="icon18 login-icon">&nbsp;</em>
                                <span class="vam ml5">登录</span>
                            </a>
                            |
                            <a href="/register" title="注册">
                                <span class="vam ml5">注册</span>
                            </a>
                        </li>
                        <li v-if="loginInfo.id" id="is-login-one" class="mr10">
                            <a id="headerMsgCountId" href="#" title="消息">
                                <em class="icon18 news-icon">&nbsp;</em>
                            </a>
                            <q class="red-point" style="display: none">&nbsp;</q>
                        </li>
                        <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
                            <a href="/ucenter" title>
                                <img
                                        :src="loginInfo.avatar"
                                        width="30"
                                        height="30"
                                        class="vam picImg"
                                        alt
                                >
                                <span id="userName" class="vam disIb">{{ loginInfo.nickname }}</span>
                            </a>
                            <a href="javascript:void(0);" title="退出" class="ml5" @click="logout()">退出</a>
                        </li>
                        <!-- /未登录显示第1 li；登录后显示第2，3 li -->
                    </ul>
                    <aside class="h-r-search">
                        <form action="#" method="post">
                            <label class="h-r-s-box">
                                <input type="text" placeholder="这里搜索。。。" name="queryCourse.courseName" value>
                                <button type="submit" class="s-btn">
                                    <em class="icon18">&nbsp;</em>
                                </button>
                            </label>
                        </form>
                    </aside>
                </div>
                <aside class="mw-nav-btn">
                    <div class="mw-nav-icon"/>
                </aside>
                <div class="clear"/>
            </section>
        </header>




<!--        <header id="header">-->

<!--        <h1 id="logo" >-->
<!--                    <a href="#" title="谷粒学院">-->
<!--                        <img src="@/assets/img/logo.png" width="100%" alt="谷粒学院">-->
<!--                    </a>-->
<!--                </h1>-->
<!--        <ul class="nav">-->
<!--            <router-link to="/" tag="li" active-class="current" exact>-->
<!--                <a>首页</a>-->
<!--            </router-link>-->
<!--            <router-link to="/Notes" tag="li" active-class="current">-->
<!--                <a>笔记</a>-->
<!--            </router-link>-->
<!--            <router-link to="/Tools" tag="li" active-class="current">-->
<!--                <a>工具</a>-->
<!--            </router-link>-->
<!--            <router-link to="/Wallpaper" tag="li" active-class="current">-->
<!--                <a>壁纸</a>-->
<!--            </router-link>-->
<!--            <router-link to="/Friends" tag="li" active-class="current">-->
<!--                <a>友链</a>-->
<!--            </router-link>-->
<!--        </ul>-->

<!--            <ul class="h-r-login">-->
<!--                <li v-if="!loginInfo.id" id="no-login">-->
<!--                    <a href="/login" title="登录">-->
<!--                        <em class="icon18 login-icon">&nbsp;</em>-->
<!--                        <span class="vam ml5">登录</span>-->
<!--                    </a>-->
<!--                    |-->
<!--                    <a href="/register" title="注册">-->
<!--                        <span class="vam ml5">注册</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li v-if="loginInfo.id" id="is-login-one" class="mr10">-->
<!--                    <a id="headerMsgCountId" href="#" title="消息">-->
<!--                        <em class="icon18 news-icon">&nbsp;</em>-->
<!--                    </a>-->
<!--                    <q class="red-point" style="display: none">&nbsp;</q>-->
<!--                </li>-->
<!--                <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">-->
<!--                    <a href="/ucenter" title>-->
<!--                        <img-->
<!--                                :src="loginInfo.avatar"-->
<!--                                width="30"-->
<!--                                height="30"-->
<!--                                class="vam picImg"-->
<!--                                alt-->
<!--                        >-->
<!--                        <span id="userName" class="vam disIb">{{ loginInfo.nickname }}</span>-->
<!--                    </a>-->
<!--                    <a href="javascript:void(0);" title="退出" class="ml5" @click="logout()">退出</a>-->
<!--                </li>-->
<!--                &lt;!&ndash; /未登录显示第1 li；登录后显示第2，3 li &ndash;&gt;-->
<!--            </ul>-->
<!--            <aside class="h-r-search">-->
<!--                <form action="#" method="post">-->
<!--                    <label class="h-r-s-box">-->
<!--                        <input type="text" placeholder="输入你想学的课程" name="queryCourse.courseName" value>-->
<!--                        <button type="submit" class="s-btn">-->
<!--                            <em class="icon18">&nbsp;</em>-->
<!--                        </button>-->
<!--                    </label>-->
<!--                </form>-->
<!--            </aside>-->

<!--   <div/>-->
<!--        </header>-->

    </div>
</template>
<script>
    import '@/assets/css/reset.css'
    import '@/assets/css/theme.css'
    import '@/assets/css/global.css'
    import '@/assets/css/web.css'
    export default {
        name: "Header",
        data() {
            return {
                token: '',
                loginInfo: {
                    id: '',
                    age: '',
                    avatar: '',
                    mobile: '',
                    nickname: '',
                    sex: ''
                }
            }
        },
        methods: {
            logout() {
                const _this = this
                _this.$axios.get("/logout", {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }).then(res => {
                    _this.$store.commit("REMOVE_INFO")
                    _this.$router.push("/login")

                })
            }
        },
        created() {
            if(this.$store.getters.getUser.username) {
                this.user.username = this.$store.getters.getUser.username
                this.user.avatar = this.$store.getters.getUser.avatar

                this.hasLogin = true
            }

        }
    }
</script>
