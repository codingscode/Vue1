import Vue from 'vue'
import App from './App'


new Vue({
    //el: '#app', é substituido por $mount()
    render: h => h(App)
    
}).$mount("#app")


/* 
 linha 7 substitui render(criarElemento) {
        return criarElemento(App)
    }
*/