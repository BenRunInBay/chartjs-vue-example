<template>
  <div class="grid-layout">
    <simple-nav-menu ref="navMenu" use-route-options></simple-nav-menu>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import SimpleNavMenu from "@/components/SimpleNavMenu";

export default {
  name: "App",
  components: { SimpleNavMenu },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
.grid-layout {
  display: grid;
  grid-template-rows: 60px auto 60px;
  grid-template-areas: "navigation" "content" "footer";
  width: 100vw;
  height: 100vh;
}
nav {
  grid-area: navigation;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
main {
  grid-area: content;
}
footer {
  grid-area: footer;
  background-color: #ccc;
  min-height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
}
.footer-label {
  font-size: 1.2em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  color: #555;
}
</style>
