<template>
   <div class="" id="app">
       <h1>Calculadora</h1>
       <Calculadora/>
   </div>
</template>

<script>
    import Calculadora from "./Principal/Calculadora"

    export default {
      components: {Calculadora}
    }
</script>

<style>
   @font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
   }

   * {
     font-family: "RobotoMono", monospace;
   }

   body {
     margin: 0;
   }

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;

        color: #fff;
        background: linear-gradient(to right, rgb(4, 134, 84), rgb(252, 252, 252))
    }
</style>