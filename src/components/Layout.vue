<template>
  <div>
    <el-container>
      <el-header>
        <slot name="header"></slot>
      </el-header>
      <el-container>
        <el-aside width="200px"><slot name="aside"></slot></el-aside>
        <el-main><slot name="main"></slot></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
body {
  margin: 0px !important;
}
.el-header {
  padding: 0px !important;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>