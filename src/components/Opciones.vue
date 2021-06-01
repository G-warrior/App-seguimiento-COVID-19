<template>
    <div class="m-auto w-50">
        <select @change='switchPais()' v-model="seleccionado" class="form-control">
           <option value="0" >Seleccione un pais</option>
           <option v-for="pais in dataApi.Countries" :key="pais.ID">{{pais.Country}}</option>
        </select>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'
    export default{
        name:'Opciones',
        props:['datosPaisSeleccionado'],
        data(){
            return{
                seleccionado:'',
                Titulo:'',
                dataApi:this.dataApi,
                Paises:this.dataApi.Countries.Country
            }
        },
          methods:{
           ...mapMutations(['traerDatos','ponerPais']),
            ...mapActions(['obtenerDatos','tomarPais']),
            chequiar(pais){
                console.log(pais)
            },  
               switchPais(){
                const paisSeleccionado = this.Paises.find(item => item.Country === this.seleccionado)
                this.$emit('datosPaisSeleccionado', paisSeleccionado)
                return console.log(paisSeleccionado)
            }  
            },
            
        computed: {
            ...mapState({ 
                Paises:state=>state.Paises,
                dataApi:state=>state.dataApi
            }),  
        },
        created:{
               setPaises(){
                    
                }
        }
    }
</script>