import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./assets/css/base.scss";
import {
  Swipe, SwipeItem, Lazyload, Badge, Tab, Tabs, Sidebar, SidebarItem, Card, Collapse,
  CollapseItem, ActionBar, ActionBarIcon, ActionBarButton, Form, Field, CellGroup, Button,
  Checkbox, CheckboxGroup, Stepper, SwipeCell, AddressList, AddressEdit
} from 'vant';

createApp(App)
  .use(store)
  .use(Swipe)
  .use(SwipeItem)
  .use(router)
  .use(Lazyload, {
    loading: require('./assets/images/loading1.gif')
  })
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Badge)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Card)
  .use(Collapse)
  .use(CollapseItem)
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper)
  .use(SwipeCell)
  .use(AddressList)
  .use(AddressEdit)
  .mount("#app");
