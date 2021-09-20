<template>
  <div>
    <el-menu-item :index="item.path" v-for="item in routes" :key="item.index" :value="item.path">
      <i :class="item.meta.icon"></i>
      <template #title>{{item.meta.title}}</template>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  props: {
    routes: Array,
  },
};
</script>