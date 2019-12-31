import Vue from 'vue'
import App from './App'



new Vue({
   render: h => h(App)
   /*render(criarElemento) { o mesmo do de cima
     return criarElemento(App)
   }*/
}).$mount("#app")

