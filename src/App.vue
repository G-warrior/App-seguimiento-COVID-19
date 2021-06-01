<template>
<div>
    <Header> </Header>
    <!--Main></Main-->
    <router-view/>
</div>
 
</template>

<script>
import Header from './components/Header.vue';
//import Main from './components/Main.vue'
import {mapState, mapMutations, mapActions} from "vuex"
export default {
  name: 'App',
  components:{
    Header
    //Main
  },
  methods:{
      ...mapActions(['obtenerDatos']),
      ...mapMutations(['traerDatos']),
      
  },
  computed:{
    ...mapState(['cargarDatos, titulo, Fecha, Estado, Ciudades, cosas, dataApi,spinner'])
},
 created(){
   this.spinner = true;
   return this.obtenerDatos();
  },
}
</script>
