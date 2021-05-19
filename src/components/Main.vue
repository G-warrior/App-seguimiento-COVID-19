<template>
    <div class="main my-5">
        <div class="text-center">
            <h1 class="text-bold">{{titulo}}</h1>
            <p>{{fechaActual}}</p>
        </div>
        <Datos1 :Estado='Estado.NewConfirmed'></Datos1>
        <Opciones></Opciones>

    </div>
</template>

<script>

import Datos1 from './Datos1.vue'
import Opciones from './Opciones.vue'
import moment from 'moment'

    export default{
        name:'Main',
        components:{
            Datos1,
            Opciones
        },
        props: ['titulo','fecha','Estado'],
        computed: {
            fechaActual(){
                return moment(this.fecha).format('MMMM Do YYYY h:mm:ss a')
            }
        }
    }
</script>

<style>
/*.main{
    border:red 1px solid;
    height:91vh;
}
*/
</style>