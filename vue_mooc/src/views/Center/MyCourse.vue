<template>
  <div id="my-course">
    <div class="container">
      <!--   显示课程   -->
      <div class="inner" v-if="courseRecord.count > 0">

        <div class="record-list">
          <el-tooltip v-for="record in courseRecord.results" :content="record.title" placement="bottom">
            <div @click="toCourse(record.course)" class="record-item">
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
                :total="courseRecord.count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCourseRecord} from '../../api/api'

  export default {
    name: "MyCourse",
    data() {
      return {
        courseRecord: {"count": 0, "next": null, "previous": null, "results": []},
        currentPage: 1
      }
    },
    watch: {
      '$route': function (to, from) {
        this.currentPage = 1
        getCourseRecord({page: this.currentPage})
          .then(resp => {
            this.courseRecord.count = resp.data.count
            this.courseRecord.next = resp.data.next
            this.courseRecord.previous = resp.data.previous
            this.courseRecord.results = resp.data.results
          })
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val
        getCourseRecord({page: this.currentPage})
          .then(resp => {
            this.courseRecord.count = resp.data.count
            this.courseRecord.next = resp.data.next
            this.courseRecord.previous = resp.data.previous
            this.courseRecord.results = resp.data.results
          })
      },
      toCourse(id) {
        this.$router.push({name: 'fullCourse', params: {courseID: id}})
      }
    },
    created() {
      getCourseRecord({page: this.currentPage})
        .then(resp => {
          this.courseRecord.count = resp.data.count
          this.courseRecord.next = resp.data.next
          this.courseRecord.previous = resp.data.previous
          this.courseRecord.results = resp.data.results
        })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/mixins";

  #my-course {
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