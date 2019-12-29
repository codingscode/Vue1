<template>
   <div class="calculadora">
       <Display value="1000"/>
       <Botao label="AC" triplo/>
       <Botao label="/" operacao/>
       <Botao label="7"/>
       <Botao label="8"/>
       <Botao label="9"/>
       <Botao label="*" operacao/>
       <Botao label="4"/>
       <Botao label="5"/>
       <Botao label="6"/>
       <Botao label="-" operacao/>
       <Botao label="1"/>
       <Botao label="2"/>
       <Botao label="3"/>
       <Botao label="+" operacao/>
       <Botao label="0" duplo/>
       <Botao label="."/>
       <Botao label="=" operacao/>
              
   </div>
</template>

<script>
import Display from '../componentes/Display'
import Botao from '../componentes/Botao'

export default {
   components: {Botao, Display}
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
