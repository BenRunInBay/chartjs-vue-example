import Vue from "vue";
import Router from "vue-router";
import Documentation from "./views/Documentation.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "documentation",
      label: "Documentation",
      active: true,
      component: Documentation
    },
    {
      path: "/bar-chart",
      name: "bar-chart",
      label: "Bar Chart",
      active: true,
      component: () =>
        import(/* webpackChunkName: "BarChart" */ "./views/BarChart")
    },
    { path: "*", redirect: "/" }
  ]
});
