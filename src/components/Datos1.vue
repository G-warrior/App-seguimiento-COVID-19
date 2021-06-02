<template>
    <div>
        <h1 class="text-bold text-center">{{mostrarDatosDePais.Country}}</h1>
        <div class="d-flex mb-5 text-center">
             <div class="alert-primary w-25 mx-auto my-3 h-25 rounded text-center">
            <h3>Casos</h3>
            <p>Nuevos:<strong v-if='!mostrarDatosDePais'> {{nuevosCasos}}</strong><strong> {{mostrarDatosDePais.NewConfirmed}}</strong></p>
            <p>Total:<strong v-if="!mostrarDatosDePais"> {{totalCasos}}</strong><strong> {{mostrarDatosDePais.TotalConfirmed}}</strong>
</p>
<strong></strong>
        </div>

        <div class="alert-primary w-25 mx-auto my-3 h-25 rounded text-center">
            <h3>Muertes</h3>
            <p>Nuevos:<strong v-if='!mostrarDatosDePais'> {{nuevosMuertos}}</strong><strong> {{mostrarDatosDePais.NewDeaths}}</strong></p>
            <p>Total:<strong v-if='!mostrarDatosDePais'> {{totalMuertos}}</strong><strong> {{mostrarDatosDePais.TotalDeaths}}</strong></p>
        </div>
        </div>
        <Opciones @datosPaisSeleccionado=" mostrarDatosDePais= $event" />
    </div>
  
</template>
<script>
import Opciones from '../components/Opciones.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
export default{
        name:'Datos1',
        data(){
            return{mostrarDatosDePais:''}
        },
        components:{
            Opciones
        },
        methods:{
            ...mapMutations(['traerDatos']),
            ...mapActions(['obtenerDatos'])
          
        },
        computed:{
              ...mapState(['Titulo','nuevosCasos','nuevosMuertos','totalCasos','totalMuertos'])
        }
      
}
</script>
