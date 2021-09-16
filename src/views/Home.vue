<template>
  <div class="home">
    <Layout>
      <template #header>
        <Navbar></Navbar>
      </template>
      <template v-slot:aside>
        <Sidebar></Sidebar>
      </template>
      <template v-slot:main>
        <Main></Main>
      </template>
    </Layout>
  </div>
</template>


<script>
import { logout } from "../httplib";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar.vue";
// import Sidebar from "../components/Sidebar.vue";
// import Main from "../components/Main.vue";
export default {
  name: "Home",
  components: {
    Layout,
    Navbar,
    // Sidebar,
    // Main,
  },

  Navbarsetup() {
    function quit() {
      logout();
    }
    return {
      quit,
    };
  },
};
</script>
