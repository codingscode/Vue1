<template>
   <div id="app">
      <h1>Problema de Monty Hall</h1>
      <div class="formulario">
         <div v-if="!iniciado">
            <label for="quantportas">Quantas portas ?</label>
            <input type="text" id="quantportas" size="3" v-model.number="quantportas">
         </div>
         <div v-if="!iniciado">
            <label for="portaSelecionada">Qual porta é premiada ?</label>
            <input type="text" id="portaSelecionada" size="3" v-model.number="portaSelecionada">
         </div>
         <button v-if="!iniciado" @click="iniciado = true">Iniciar</button>
         <button v-if="iniciado" @click="iniciado = false">Reiniciar</button>
      </div>
      <div class="portas" v-if="iniciado">
          <div v-for="i in quantportas" :key="i" >
             <Porta :temGift="i === portaSelecionada" :numero="i"/>
          </div>
      </div>
  </div>
</template>

<script>
import Porta from './componentes/Porta'

export default {
   nome: 'App',
   components: {Porta},
   data: function() {
      return {
         iniciado: false,
         quantportas: 3,
         portaSelecionada: null
      }
   }
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

    .formulario {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
    }

    .formulario, .formulario input, .formulario button {
      margin-bottom: 10px;
      font-size: 2rem;
    }

    .portas {
      align-self: stretch;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

</style>