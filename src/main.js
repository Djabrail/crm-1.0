import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";

import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyBvl6xvYWBW7kgiJEv5U3wq7L9A88m2htI",
  authDomain: "vue--crm-39b5f.firebaseapp.com",
  databaseURL: "https://vue--crm-39b5f.firebaseio.com",
  projectId: "vue--crm-39b5f",
  storageBucket: "vue--crm-39b5f.appspot.com",
  messagingSenderId: "944750005577",
  appId: "1:944750005577:web:1a1741730ce27efaba5e98"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
