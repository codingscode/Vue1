<template>
    <div class="porta-area">
        <div class="porta-frame" :class="{selecionado: selecionado && !aberto}">
            <Gift v-if="aberta && temGift"/>
        </div>
        <div class="porta" @click="selecionado = !selecionado" :class="{aberto}">
            <div class="numero" :class="{selecionado}">{{numero}}</div>
            <div class="macaneta" :class="{selecionado}" @click.stop="aberto = true"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift'

export default {
   nome: 'Porta',
   components: {Gift},
   props: {
    numero: {},
    temGift: {type: Boolean}
   },
    data: function() {
        return {
            aberto: false,
            selecionado: false
        }
    }
}
</script>

<style>
   :root {
      --porta-border: 5px solid brown;
      --selecionado-border: 5px solid yellow;
    }

    .porta-area {
        position: relative;
        width: 200px;
        height: 310px;
        border-bottom: 10px solid #AAA;
        margin-bottom: 20px;
        font-size: 3rem;

        display: flex;
        justify-content: center;
    }

    .porta-frame {
        position: absolute;
        height: 300px;
        width: 180px;

        border-left: var(--porta-border);
        border-top: var(--porta-border);
        border-right: var(--porta-border);

        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .porta {
        position: absolute;
        top: 5px;
        height: 295px;
        width: 170px;
        background-color: chocolate;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .porta .macaneta {
        height: 20px;
        width: 20px;
        border-radius: 10px;
        background-color: brown;
        align-self: flex-start;
        margin-top: 60px;  
    }

    .porta-frame.selecionado {
        border-left: var(--selecionado-border);
        border-top: var(--selecionado-border);
        border-right: var(--selecionado-border);
    }

    .porta > .numero.selecionado {
      color: yellow;
    }

    .porta > .macaneta.selecionado {
      background-color: yellow;
    }

    .porta.aberto {
      background-color: #0007;
    }

    .porta.aberto .macaneta {
      display: none;
    }

    .porta.aberto .numero {
      display: none;
    }

</style>