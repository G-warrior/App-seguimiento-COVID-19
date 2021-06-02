<template>
<div>
  <main >
  <Main v-if='!spinner'></Main>
  <div v-for="(item, index) of traerDatos" :key="index">
      <p>{{item}}</p>
  </div>
  </main>
  <main  v-if="spinner">
    <div class="spinner-6"></div>

    <!--div class="spinner">
        <div class="double-bounce1 bg-primary"></div>
        <div class="double-bounce2 bg-primary"></div>
        <div class="double-bounce3 bg-primary"></div>
    </div-->
    <!--div class="spinner-1"></div-->

  </main>

 
</div>

</template>

<script>

import Main from '@/components/Main.vue';
import {mapActions,mapMutations,mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
   Main
  },
  methods:{
    ...mapActions(['obtenerDatos']),
    ...mapMutations(['traerDatos']),
  },
  computed:{
    ...mapState(['dataApi','spinner']),
    Paises(){
      return this.dataApi
    }
  }
}
</script>

<style scoped>
/*.spinner {
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

.spinner-1 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: repeating-conic-gradient(#1b5eda 0 90deg,#fcfcfc 0 180deg);
  animation: s1 0.5s infinite;
  margin:auto;
  position:absolute;
  top:45%;
  left:45%;
}

@keyframes s1 {
  100% {transform: rotate(.5turn)}
}*/
.spinner-6 {
  width: 120px;
  height: 120px;
  display: grid;
  border:6px solid #0000;
  border-radius: 50%;
  border-color:#cccccc #0000;
  animation: s6 1s infinite linear;
  margin:auto;
  position:absolute;
  left:45%;
  top:45%;
  
}
.spinner-6::before,
.spinner-6::after {    
  content:"";
  grid-area: 1/1;
  margin:2px;
  border:inherit;
  border-radius: 50%;
}
.spinner-6::before {
  border-color:#244ccf #0000;
  animation:inherit; 
  animation-duration: .5s;
  animation-direction: reverse;
}
.spinner-6::after {
  margin:8px;
}

@keyframes s6 { 
  100%{transform: rotate(1turn)}
}
</style>
