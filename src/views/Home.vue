<template>
  <div class="home">
    <button @click="quit">点我退出</button>
  </div>
</template>

<script>

import {logout} from '../httplib'
export default {
  name: 'Home',
  components: {

  },
  setup(){

    function quit() {
        logout()
    }
    return {
      quit
    }
  }
}
</script>
