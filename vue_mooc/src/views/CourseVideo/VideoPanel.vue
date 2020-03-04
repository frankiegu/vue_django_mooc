<template>
  <div id="video-panel">
    <div class="video-box">
      <div class="inner">
        <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">小耿课堂</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'fullCourse', params:{courseID}}">{{courses.currentCourse.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="player">
          <video-player v-if="videoOptions.sources.length > 0"
                        :options="videoOptions"></video-player>
          <div class="play-list">
            <h3>选集</h3>
            <div class="list">
              <el-collapse :value="chapterID" accordion>
                <el-collapse-item
                        :class="{active:chapter.id==chapterID}"
                        :name="chapter.id+''"
                        :title="chapter.title"
                        :key="chapter.id"
                        v-for="chapter in courses.currentCourse.chapter">
                  <ul v-if="chapter.lesson.length > 0">
                    <li :class="{active:lesson.id==lessonID}"
                        @click="toPlay(courseID,chapter.id,lesson.id)"
                        :key="lesson.id"
                        v-for="lesson in chapter.lesson">
                      {{lesson.title}}
                    </li>
                  </ul>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getFullCourse} from '../../api/api'
  import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

  export default {
    name: "VideoPanel",
    components: {VideoPlayer},
    methods: {
      toPlay(courseID, chapterID, lessonID) {
        let params = {
          courseID: courseID + '',
          chapterID: chapterID + '',
          lessonID: lessonID + ''
        }
        this.$router.push({name: 'courseVideo', params})
        window.location.reload()
      }
    },
    watch: {
      '$route': function (to, from) {
        getFullCourse(this.courseID)
          .then(resp => {
            this.$set(this.courses, 'currentCourse', resp.data)

            let chapterList = resp.data.chapter.filter(item => item.id == this.chapterID)
            let lesson = chapterList.length > 0 ? chapterList[0].lesson.filter(item => item.id == this.lessonID) : []
            let src = lesson.length > 0 ? lesson[0].video : '#'

            this.videoOptions.sources = []
            this.videoOptions.sources.push({
              src,
              type: "video/mp4"
            })
          })
          .catch(error => {
            console.log(error)
            this.$router.push({name: '404', params: {next: this.$route.path}})
          })
      }
    },
    computed: {
      courseID() {
        return this.$route.params.courseID + ''
      },
      chapterID() {
        return this.$route.params.chapterID + ''
      },
      lessonID() {
        return this.$route.params.lessonID + ''
      }
    },
    data() {
      return {
        courses: {
          currentCourse: {}
        },
        videoOptions: {
          "controls": true,
          "autoplay": "play",
          "width": "860px",
          "height": "480px",
          "sources": []
        }
      }
    },
    created() {
      // 获取当前播放课程的信息
      getFullCourse(this.courseID)
        .then(resp => {
          this.$set(this.courses, 'currentCourse', resp.data)

          let chapterList = resp.data.chapter.filter(item => item.id == this.chapterID)
          let lesson = chapterList.length > 0 ? chapterList[0].lesson.filter(item => item.id == this.lessonID) : []
          let src = lesson.length > 0 ? lesson[0].video : '#'

          this.videoOptions.sources = []
          this.videoOptions.sources.push({
            src,
            type: "video/mp4"
          })
        })
        .catch(error => {
          console.log(error)
          this.$router.push({name: '404', params: {next: this.$route.path}})
        })
    }
  }
</script>

<style lang="scss">
  @import "../../static/scss/mixins";

  #video-panel {
    padding-top: 130px;
    min-height: 650px;
    background: #f8f8f8;


    .video-box {
      height: 600px;
      background: rgba(34, 34, 34, 0.89);

      .inner {
        @include flexContainer;
        height: 700px;
        flex-direction: column;

        /* 面包屑 */
        .bread {
          padding: 30px 0;
          color: white;

          span {
            color: white;
          }
        }

        .player {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 100%;

          // 播放列表部分
          .play-list {
            background: rgba(51, 51, 51, 0.8);
            height: 480px;
            width: 300px;
            user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;

            h3 {
              font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
              font-size: 21px;
              color: white;
              font-weight: 400;
              height: 70px;
              line-height: 70px;
              text-indent: 10px;
            }

            .list {
              overflow-y: scroll;
              overflow-x: hidden;
              box-sizing: border-box;
              padding: 0 10px;
              height: 380px;
              width: 300px;

              /* 课程目录折叠条 */
              .el-collapse {
                background: #3b3b3b;

                .el-collapse-item {
                  &.active {
                    .el-collapse-item__header {
                      font-weight: bold;
                      color: #ff346a;
                    }
                  }

                  /* 章节标题 */
                  .el-collapse-item__header {
                    background: #3b3b3b;
                    text-indent: 8px;
                    color: #cccc99;
                  }

                  /* 课程列表背景 */
                  .el-collapse-item__content {
                    background: #3b3b3b;
                    /*color: #cccc99;*/
                    ul {
                      list-style: none;
                      text-indent: 12px;

                      li {
                        color: white;
                        font-size: 13px;
                        line-height: 20px;
                        height: 20px;
                        font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
                        font-weight: 200;
                        cursor: pointer;

                        &:hover {
                          opacity: .8;
                        }

                        &.active {
                          color: #ff346a;
                          font-weight: 400;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>