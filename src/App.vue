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

export default {
  name: 'App',
  components:{
    Header,
    //Main
  }
  
}
</script>
