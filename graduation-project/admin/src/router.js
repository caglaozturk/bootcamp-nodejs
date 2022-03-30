import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/dashboards`,
    meta: { loginRequired: true },
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/dashboards`,
    meta: { loginRequired: true },
    /*
    define with Authorization :
    meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
    */
    children: [
      {
        path: "dashboards",
        component: () =>
          import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards"),
        redirect: `${adminRoot}/dashboards/ecommerce`,
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
        children: [
          {
            path: "ecommerce",
            component: () =>
              import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Ecommerce"),
            // meta: { roles: [UserRole.Editor] },
          },
        ]
      },
      {
        path: "pages",
        component: () =>
          import(/* webpackChunkName: "pages" */ "./views/app/pages"),
        redirect: `${adminRoot}/pages/product`,
        children: [
          {
            path: "product",
            component: () =>
              import(/* webpackChunkName : "product" */ "./views/app/pages/product"),
            redirect: `${adminRoot}/pages/product/thumb-list`,
            children: [
              {
                path: "data-list",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/DataList")
              },
              {
                path: "thumb-list",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/ThumbList")
              },
              {
                path: "image-list",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/ImageList")
              },
              {
                path: "details",
                component: () =>
                  import(/* webpackChunkName: "product" */ "./views/app/pages/product/Details")
              }
            ]
          },
          {
            path: "miscellaneous",
            component: () =>
              import(/* webpackChunkName : "miscellaneous" */ "./views/app/pages/miscellaneous"),
            redirect: `${adminRoot}/pages/miscellaneous/search`,
            children: [
              {
                path: "search",
                component: () =>
                  import(/* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Search")
              }
            ]
          }
        ]
      },
      {
        path: "blank-page",
        component: () =>
          import(/* webpackChunkName: "blank-page" */ "./views/app/blank-page")
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/unauthorized",
    component: () => import(/* webpackChunkName: "error" */ "./views/Unauthorized")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      },

    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});
router.beforeEach(AuthGuard);
export default router;
