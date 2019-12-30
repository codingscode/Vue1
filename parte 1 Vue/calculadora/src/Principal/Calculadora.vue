<template>
   <div class="calculadora">
       <Display :value="displayValue"/>
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
   data: function() {
      return {
         displayValue: "0",
         limparDisplay: false,
         operacao: null,
         values: [0, 0],
         atual: 0
      }
   },
   components: {Botao, Display},
   methods: {
       limparMemoria() {
          Object.assign(this.$data, this.$options.data())
       },
       setOperacao(operacao) {
         if (this.atual === 0) {
            this.operacao = operacao
            this.atual = 1
            this.limparDisplay = true
         }
         else {
            if (this.atual === 0) {
               this.operacao = operacao
               this.atual = 1
               this.limparDisplay = true
            }

            const igual = operacao === "="
            const atualOperacao = this.operacao

            try {
               this.values[0] = eval(
                  `${this.values[0]} ${atualOperacao} ${this.values[1]}`
               )
            }
            catch(e) {
               this.$emit('onError', e)
            }

            this.values[1] = 0

            this.displayValue = this.values[0]
            this.operacao = igual ? null : operacao
            this.atual = igual ? 0 : 1
            this.limparDisplay = !igual
         }
       },
       addDigito(n) {
         if (n === "." && this.displayValue.includes(".")) {
           return
         }

         const limparDisplay = this.displayValue === "0" || this.limparDisplay
         const atualValue = limparDisplay ? "" : this.displayValue
         const displayValue = atualValue + n

         this.displayValue = displayValue
         this.limparDisplay = false

         //Alternativa 1
         this.values[this.atual] = displayValue

         //Alternativa 2
      /* if (n !== ".") {
            const i = this.atual
            const newValue = parseFloat(displayValue)
            this.values[i] = newValue
         } */
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
