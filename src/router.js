import Vue from "vue";
import Router from "vue-router";
// import Inicio from "./components/Inicio";
// import SobreMi from "./components/SobreMi";
// import Contacto from "./components/Contacto";
// import Post from "./components/Post";
import Articulo from "./components/Articulo";
import NotFound from "./components/NotFound";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: () =>
        import(/* webpackChunkName: "inicio" */ "../src/components/Inicio.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "home" */ "../src/components/Home.vue"),
      redirect: "/",
    },
    {
      path: "/inicio",
      name: "Inicio",
      component: () =>
        import(/* webpackChunkName: "inicio" */ "../src/components/Inicio.vue"),
      redirect: { name: "inicio" },
    },
    {
      path: "/portada",
      name: "Portada",
      component: () =>
        import(/* webpackChunkName: "portada" */ "../src/components/Inicio.vue"),
      redirect: "/",
    },
    {
      path: "/sobremi",
      name: "sobremi",
      component: () =>
        import(/* webpackChunkName: "sobremi" */ "../src/components/SobreMi.vue"),
      alias: ["/acerca"],
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () =>
        import(/* webpackChunkName: "contacto" */ "../src/components/Contacto.vue"),
      alias: ["/contactame"],
    },
    {
      path: "/post",
      name: "post",
      component: () =>
        import(/* webpackChunkName: "post" */ "../src/components/Post.vue"),
      children: [
        {
          path: ":articulo",
          component: Articulo,
        },
      ],
    },
    {
      path: "/administrador/:id",
      name: "Administrador",
      component: () =>
        import(/* webpackChunkName: "administrador" */ "@/components/Administrador.vue"),
      props: (ruta) => ({
        id: ruta.params.id,
      }),
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});
