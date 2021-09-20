<template>
  <el-menu
    router
    :collapse="isCollapse"
    :uniqueOpened="true"
    default-active="2"
    class="sidebar"

    background-color="#3C4B64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- <el-menu-item index="/cases">
      <i class="el-icon-s-order"></i>
      <template #title>测试用例</template>
    </el-menu-item> -->
    <sidebar-item :routes="route_list"></sidebar-item>

 
    <el-menu-item @click="switch_side">
      <i v-if="isCollapse == false" class="el-icon-caret-left"></i>
      <i v-else class="el-icon-caret-right"></i>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SidebarItem from "./common/SidebarItem.vue";

export default ({
  components: {
    SidebarItem,
  },
  setup() {
    const router = useRouter();
    const route_list=router.options.routes[0].children
    let isCollapse = ref(true);
    function switch_side() {
      isCollapse.value = !isCollapse.value;
      console.log(route_list)
     
    }

  
    return {
    
      isCollapse,
      switch_side,
      route_list
    };
  },
});
</script>

<style>
.sidebar {
  height: 100vh;
}
</style>
