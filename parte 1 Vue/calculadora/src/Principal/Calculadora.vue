<template>
   <div class="calculadora">
       <Display value="1000"/>
       <Botao label="AC" triplo @onClick="limparMemoria"/>
       <Botao label="/" operacao @onClick="setOperacao"/>
       <Botao label="7" @onClick="addDigito"/>
       <Botao label="8" @onClick="addDigito"/>
       <Botao label="9" @onClick="addDigito"/>
       <Botao label="*" operacao @onClick="setOperacao"/>
       <Botao label="4" @onClick="addDigito"/>
       <Botao label="5" @onClick="addDigito"/>
       <Botao label="6" @onClick="addDigito"/>
       <Botao label="-" operacao @onClick="setOperacao"/>
       <Botao label="1" @onClick="addDigito"/>
       <Botao label="2" @onClick="addDigito"/>
       <Botao label="3" @onClick="addDigito"/>
       <Botao label="+" operacao @onClick="setOperacao"/>
       <Botao label="0" duplo @onClick="addDigito"/>
       <Botao label="." @onClick="addDigito" />
       <Botao label="=" operacao @onClick="setOperacao"/>
              
   </div>
</template>

<script>
import Display from '../componentes/Display'
import Botao from '../componentes/Botao'

export default {
   components: {Botao, Display},
   methods: {
       limparMemoria() {
          console.log('Limpar Memória!')  //testar no console browser
       },
       setOperacao(operacao) {
          console.log('Operacao ' + operacao)
       },
       addDigito(n) {
         console.log('Digito ' + n)
       }
   }
}
</script>

<style>
   .calculadora {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
   }
</style>
