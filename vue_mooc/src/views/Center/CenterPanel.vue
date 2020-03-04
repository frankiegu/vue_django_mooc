<template>
  <div id="center-panel">
    <div class="container">
      <div class="center-menu">
        <div class="user-info">
          <div class="avatar">
            <img @mousedown.prevent="" src="../../assets/avatar.jpeg" alt="">
          </div>
          <div class="username">登录账号:
            {{username}}
          </div>
        </div>
        <div class="list">
          <router-link tag="div" to="/center/my_course/" class="item"
                       :class="{active:curPath=='/center/my_course/'}">
            <i class="iconfont icon-kecheng"></i>
            我的课程
          </router-link>
          <router-link tag="div" to="/center/my_record/" class="item"
                       :class="{active:curPath=='/center/my_record/'}">
            <i class="iconfont icon-jilu"></i> 播放记录
          </router-link>
          <router-link tag="div" to="/center/my_fav/" class="item"
                       :class="{active:curPath=='/center/my_fav/'}"><i
                  class="iconfont icon-tubiaozhizuomobandefuben-">
          </i> 我的收藏
          </router-link>
        </div>
      </div>
      <transition enter-active-class="animated fadeIn">
        <router-view class="app"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "CenterPanel",
    computed: {
      ...mapState(['username']),
      curPath() {
        return this.$route.path
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/mixins";

  #center-panel {
    margin-top: 130px;
    min-height: 550px;
    padding-top: 50px;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;

    .container {
      @include container;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .app {
        width: 100%;
      }

      border-radius: 2px;
      box-shadow: 1px 3px 5px 8px rgba(0, 0, 0, .07);
      background: #f2f2f2;
      height: 550px;

      .center-menu {
        width: 250px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: white;

        .user-info {
          width: 250px;
          margin-top: 15px;
          margin-bottom: 15px;
          padding-top: 12px;
          padding-bottom: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .avatar {
            img {
              border-radius: 50%;
              width: 60px;
              height: 60px;
            }
          }

          .username {
            margin-top: 8px;
            font-size: 12px;
            text-align: center;
            width: 150px;
            line-height: 20px;
            height: 20px;
            color: #333;
          }
        }

        .list {
          padding-top: 20px;
          width: 250px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
          background: whitesmoke;

          .item {
            margin: 2px 0;
            padding: 5px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;

            &:hover {
              background: rgba(white, .9);
            }

            &.active {
              background: #c2c290;
              color: whitesmoke;
              border: none;
            }

            i {
              margin-left: 45px;
              margin-right: 8px;
              font-size: 25px;
            }

            font-size: 18px;
            width: 250px;
            height: 45px;
            line-height: 25px;
            color: #333;
          }
        }
      }
    }
  }
</style>