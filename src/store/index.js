import Vue from 'vue'
import Vuex from 'vuex'
import axios from  'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      cargaDatos:true,
      Titulo: 'Global',
      Fecha: '',
      Estado: {},
      Paises: [],
      dataApi:[],
      spinner: true,
      nuevosCasos:'',
      nuevosmuertos:'',
      totalMuertos:'',
      totalCasos:''
      //Crear icono de carga
  },
  actions: {
    async obtenerDatos( { commit }){
      await axios.get('https://api.covid19api.com/summary')
      .then(respuesta => {
        const datos = respuesta
        console.log(datos)
        return commit('traerDatos', datos.data)
      })
      
    },
    tomarPais({ commit }, pais){
      console.log(pais)
      return commit('ponerPais', pais)
    }
  },

  mutations: {
    traerDatos(state, datos){
      state.dataApi = datos
      state.Fecha = datos.Date
      state.Paises = datos.Countries
      state.Estado = datos.Global
      state.spinner = false
      state.nuevosCasos = datos.Global.NewConfirmed
      state.nuevosMuertos = datos.Global.NewDeaths
      state.totalCasos = datos.Global.TotalConfirmed
      state.totalMuertos = datos.Global.TotalDeaths
      console.log('estos son todos lo muertos'+ state.totalMuertos)
      console.log(state.totalCasos)
      console.log(state.dataApi)

    },
    ponerPais(pais){
      console.log(pais.ID)
    }
  },
    getters: {

    }

  })
  

