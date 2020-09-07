<template>
  <div class>
    <el-container class="container">
      <el-header class="header">Header</el-header>
      <el-container class>
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { local, session } from "@/utils/storage.js";
export default {
  beforeCreate() {
    session.Item("tocken").then((res) => {
      debugger;
      if (!res) {
        this.$router.push({ name: "login" });
      }
    });
  },
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-clip: #d3dcd6;
}
.main {
  background-clip: #e9eef3;
}
</style>