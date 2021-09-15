<template>
  <div ref="bg" class="bg"></div>
</template>

<script>
import CanvasNest from "canvas-nest.js";
import {ref,onMounted} from 'vue'
export default {
//   name: Background,
  setup() {
    const bg = ref(null);
    const config = {
      color: "18,156,255",
      opacity: 0.7,
      count: 180,
      zIndex: -1,
      pointColor: "255,0,0",
    }
    onMounted(() => {
         new CanvasNest(bg.value,config)
    })
     
    return{
         bg
    }
  },
}
</script>

<style scoped>
     .bg{
         width:100vw;
         height:100vh
     }
</style>