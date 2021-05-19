<template>
<div>
  <main v-if="!cargaDatos">
  <Main :titulo="titulo" :fecha='Fecha' :Estado="Estado"></Main>

  </main>
  <main v-if="cargaDatos">
    <div class="spinner">
        <div class="double-bounce1 bg-primary"></div>
        <div class="double-bounce2 bg-primary"></div>
        <div class="double-bounce3 bg-primary"></div>
    </div>
  </main>
</div>

</template>

<script>

import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
   Main
  },
  data(){
    return {
      cargaDatos:true,
      titulo: 'Global',
      Fecha: '',
      Estado: {},
      Ciudades: []
      //Crear icono de carga

    }
  },
  methods:{
    async traerDatosApi(){
     const data = await fetch('https://api.covid19api.com/summary')
     return await data.json();
    }
  },
   async created(){
     const datos = await this.traerDatosApi();
     console.log(datos)
     this.Fecha = datos.Date;
     this.Estado = datos.Global;
     this.Ciudades = datos.Countries;
     this.cargaDatos = false;
    }
    
}
</script>

<style scoped>
.spinner {
  width: 80px;
  height: 80px;
  position: absolute;
  margin:auto;
  transform:translate(-50%,50%);
  top:45%;
  left:50%;
}

.double-bounce1, .double-bounce2, .double-bounce3{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.double-bounce3 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

</style>
