<template>
  <div id="center">
    <main-nav></main-nav>
    <center-panel></center-panel>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import MainFooter from '../../components/MainFooter/MainFooter'
  import CenterPanel from './CenterPanel'
  export default {
    name: "Center",
    components: {CenterPanel, MainFooter, MainNav},
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">

</style>