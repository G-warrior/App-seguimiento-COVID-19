<template>
    <div class="main my-5">
        <div class="text-center">
            <p>{{fechaActual}}</p>
        </div>
        <Datos1></Datos1>

    </div>
</template>

<script>

import Datos1 from './Datos1.vue'
import moment from 'moment'
import {mapState, mapMutations, mapActions} from 'vuex'

    export default{
        name:'Main',
        components:{
            Datos1
        },
        computed: {
            fechaActual(){
                return moment(this.fecha).format('MMMM Do YYYY h:mm:ss a')
            },
             ...mapState({
                  Titulo: state => state.Titulo
              }),
        },
         methods:{
           ...mapMutations(['traerDatos']),
            ...mapActions(['obtenerDatos'])
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