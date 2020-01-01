<template>
   <div id="app">
      <h1>Problema de Monty Hall</h1>
      <Porta numero="1" :temGift="false"/>
  </div>
</template>

<script>
import Porta from './componentes/Porta'

export default {
   nome: 'App',
   components: {Porta}
}
</script>

<style>
   * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
   }

   body {
    color: #FFF;
    background: linear-gradient(to right, rgb(1, 103, 204), rgb(255, 255, 254));
   }

   #app {
    display: flex;
    flex-direction: column;
    align-items: center;
   }

    #app h1 {
     border: 1px solid #000;
     background-color: #0004;
     padding: 20px;
     margin-bottom: 60px;
    }
</style>