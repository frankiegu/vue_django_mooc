<template>
  <div id="my-record">
    <div class="container">
      <!--   显示课程   -->
      <div class="inner" v-if="playRecord.count > 0">

        <div class="record-list">
          <el-tooltip v-for="record in playRecord.results" :content="record.title" placement="bottom">
            <div @click="toCourse({courseID:record.course_id,chapterID: record.chapter_id,lessonID: record.lesson_id})"
                 class="record-item">
              <img :src="record.cover" alt="record.title">
            </div>
          </el-tooltip>

        </div>

        <el-pagination
                class="pagination"
                background
                layout="prev, pager, next"
                :page-size="10"
                :current-page="currentPage"
                @current-change="handleCurrentChange"
                :total="playRecord.count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

  import {getPlayRecord} from '../../api/api'

  export default {
    name: "MyRecord",
    data() {
      return {
        playRecord: {"count": 0, "next": null, "previous": null, "results": []},
        currentPage: 1
      }
    },
    watch: {
      '$route': function (to, from) {
        this.currentPage = 1
        getPlayRecord({page: this.currentPage})
          .then(resp => {
            this.playRecord.count = resp.data.count
            this.playRecord.next = resp.data.next
            this.playRecord.previous = resp.data.previous
            this.playRecord.results = resp.data.results
          })
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val
        getPlayRecord({page: this.currentPage})
          .then(resp => {
            this.playRecord.count = resp.data.count
            this.playRecord.next = resp.data.next
            this.playRecord.previous = resp.data.previous
            this.playRecord.results = resp.data.results
          })
      },
      toCourse(params) {
        this.$router.push({name: 'courseVideo', params})
      }
    },
    created() {
      getPlayRecord({page: this.currentPage})
        .then(resp => {
          this.playRecord.count = resp.data.count
          this.playRecord.next = resp.data.next
          this.playRecord.previous = resp.data.previous
          this.playRecord.results = resp.data.results
        })
    }
  }
</script>

<style scoped lang="scss">
  #my-record {
    .container {
      .inner {
        .record-list {
          padding: 13px;
          display: flex;
          flex-wrap: wrap;

          .record-item {
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 0.5em 1em rgba(0, 0, 0, 0.6);
            cursor: pointer;
            border-radius: 3px;
            background: rgba(230, 230, 230, 0.04);
            margin-right: 23px;
            margin-bottom: 15px;
            padding: 11px;
            height: 130px;

            img {
              width: auto;
              height: 130px;
            }
          }
        }

        .pagination {
          position: absolute;
          bottom: 7px;
          right: 15px;
        }
      }
    }
  }
</style>