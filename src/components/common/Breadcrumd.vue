<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :key="route.index" v-for="route in currentRouteList" :to="{ path: route.path  } ">{{route.meta.title}}</el-breadcrumb-item>
 
    </el-breadcrumb>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    setup() {
        const route=useRoute()
        const currentRouteList=route.matched
        console.log("xxxx",currentRouteList)

        return{
            currentRouteList
        }
    }
}
</script>