<template>
    <div class="in-wrap">
        <!-- 公共头引入 -->
                <h1 id="logo">
                    <a href="#" title="谷粒学院">
                        <img src="@/assets/img/logo.png" width="100%" alt="谷粒学院">
                    </a>
                </h1>
        <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
                <a>首页</a>
            </router-link>
            <router-link to="/note" tag="li" active-class="current">
                <a>笔记</a>
            </router-link>
            <router-link to="/tools" tag="li" active-class="current">
                <a>工具</a>
            </router-link>
            <router-link to="/wallpicture" tag="li" active-class="current">
                <a>壁纸</a>
            </router-link>
            <router-link to="/friends" tag="li" active-class="current">
                <a>友链</a>
            </router-link>
        </ul>

        <ul class="h-r-login">

            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
        </ul>
                <aside class="mw-nav-btn">
                    <div class="mw-nav-icon"/>
                </aside>
                <div/>
        <!-- /公共头引入 -->
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
                user: {
                    username: '请先登录',
                    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
                },
                hasLogin: false
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
