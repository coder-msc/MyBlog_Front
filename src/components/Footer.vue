<template>
    <div class="b-foot">
        <div class>
            <h4 class="hLh30">
                <span class="fsize18 f-fM c-999">友情链接</span>
            </h4>
            <ul class="of flink-list">
                <li>
                    <a href="http://www.atguigu.com/" title="尚硅谷" target="_blank">尚硅谷</a>
                </li>
            </ul>
            <div class="clear"/>
        </div>
        <section class="fl col-7">
            <section class="mr20">
                <section class="b-f-link">
                    <a href="#" title="关于我们" target="_blank">关于我们</a>|
                    <a href="#" title="联系我们" target="_blank">联系我们</a>|
                    <a href="#" title="资源下载" target="_blank">资源下载</a>
                    <br>
                    <span>服务热线：qq:59968873</span>
                    <span>Email：59968873@qq.com</span>
                </section>
                <section class="b-f-link mt10">
                    <span>©2020 此网站拥有者为个人.  京ICP备17055252号</span>
                </section>
            </section>
        </section>
        <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="@/assets/img/wx-icon.png" alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="@/assets/img/wb-icon.png" alt>
              </span>
            </section>
        </aside>
        <div class="clear"/>
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

<style scoped>

  .m-content {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .maction {
    margin: 10px 0;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
