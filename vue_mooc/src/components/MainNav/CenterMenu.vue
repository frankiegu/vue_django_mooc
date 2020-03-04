<template>
  <div id="center-menu">
    <ul>
      <router-link tag="li" to="/center/my_course/">我的课程</router-link>


      <li>退出</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CenterMenu"
  }
</script>

<style scoped lang="scss">
  #center-menu {
    width: 60px;
    min-height: 45px;
    background: #e6e6b1;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 2px;

    ul {
      width: 100%;
      height: 100%;
      list-style: none;
      opacity: .9;
      margin: 0 !important;
      padding: 0 !important;

      li {
        box-sizing: border-box;
        font-weight: bold;
        font-size: 12px;
        color: white;
        cursor: pointer;
        text-indent: 2px;
        height: 25px !important;
        line-height: 25px !important;
        overflow: hidden;
        margin: 0 !important;

        &:hover {
          background: white;
          color: #E6E6B1;
        }
      }
    }
  }
</style>