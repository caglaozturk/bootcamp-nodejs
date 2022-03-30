import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
    id: "dashboards",
    icon: "iconsminds-shop-4",
    label: "menu.dashboards",
    to: `${adminRoot}/dashboards/ecommerce`,
  },
  {
    id: "pages",
    icon: "iconsminds-chef-hat",
    label: "menu.products",
    to: `${adminRoot}/pages/product/thumb-list`
  },
  {
    id: "sign-out",
    icon: "simple-icon-logout",
    label: "menu.logout",
    go: "logout"
  }
];
export default data;
