const app = new Vue({
  el:"#app",
  data: {
    selected: "",
    options: [
      {value: "factura", text: 'Factura' },
      {value: "vale", text: 'Vale' }
    ],
    presupuesto1: {
      semestre_one: {
        delta: 0,
        sigma: 0
      },
      smestre_second: {
        delta: 0,
        sigma: 0
      },
      totales: {
        delta: 0,
        sigma: 0,
        semestre_one: 0,
        smestre_second: 0,
        total: 0
      }
    },
    presupuesto2: {
      semestre_one: {
        ventas: {
          sigma: 0,
          delta: 0
        },
        inventario_final: {
          sigma: 0,
          delta: 0

        },
        necesidad: {
          sigma: 0,
          delta: 0
        },
        inventario_inicial: {
          sigma: 0,
          delta: 0
        },
        produccion: {
          sigma: 0,
          delta: 0
        }
      },
      semestre_second: {
        ventas: {
          sigma: 0,
          delta: 0
        },
        inventario_final: {
          sigma: 0,
          delta: 0

        },
        necesidad: {
          sigma: 0,
          delta: 0
        },
        inventario_inicial: {
          sigma: 0,
          delta: 0
        },
        produccion: {
          sigma: 0,
          delta: 0
        }
      }
    },
    presupuesto3:{
      materia_a:{
        delta: 0,
        sigma: 0,
        total: 0,
        costoKg: 0,
      },
      materia_b:{
        delta: 0,
        sigma: 0,
        total: 0,
        costoKg: 0,
      },
      total: 0,
    },
    presupuesto4:{
      materia_a:{
        delta: 0,
        sigma: 0,
        total: 0,
        costoKg: 0,
      },
      materia_b:{
        delta: 0,
        sigma: 0,
        total: 0,
        costoKg: 0,
      },
      total: 0,
    },
    listEntries: []
  },
  mounted: function() {

  },
  created: function() {

  },
  watch: {
    selected(){
      console.log("Changed watch")
    }
  },
  computed: {
    amount(){

    }
  },
  methods: {
    setType(){
      this.entry.type = this.selected
    },
    addEntry(){

    },
    calculateTotalsPresupuesto1: function(){
      console.log("Calculando")
      this.presupuesto1.totales.semestre_one = Number(this.presupuesto1.semestre_one.delta) + Number(this.presupuesto1.semestre_one.sigma)
      this.presupuesto1.totales.smestre_second = Number(this.presupuesto1.smestre_second.delta) + Number(this.presupuesto1.smestre_second.sigma)
      this.presupuesto1.totales.delta = Number(this.presupuesto1.semestre_one.delta) + Number(this.presupuesto1.smestre_second.delta) 
      this.presupuesto1.totales.sigma = Number(this.presupuesto1.semestre_one.sigma) + Number(this.presupuesto1.smestre_second.sigma) 
      this.presupuesto1.totales.total = Number(this.presupuesto1.totales.delta) + Number(this.presupuesto1.totales.sigma) 

    },
    calculateTotalsPresupuesto2: function() {
      this.presupuesto2.semestre_one.necesidad.delta = Number(this.presupuesto2.semestre_one.ventas.delta) + Number(this.presupuesto2.semestre_one.inventario_final.delta)
      this.presupuesto2.semestre_one.produccion.delta = Number(this.presupuesto2.semestre_one.necesidad.delta) - Number(this.presupuesto2.semestre_one.inventario_inicial.delta)
      this.presupuesto2.semestre_one.necesidad.sigma = Number(this.presupuesto2.semestre_one.ventas.sigma) + Number(this.presupuesto2.semestre_one.inventario_final.sigma)
      this.presupuesto2.semestre_one.produccion.sigma = Number(this.presupuesto2.semestre_one.necesidad.sigma) - Number(this.presupuesto2.semestre_one.inventario_inicial.sigma)
      this.presupuesto2.semestre_second.necesidad.sigma = Number(this.presupuesto2.semestre_second.ventas.sigma) + Number(this.presupuesto2.semestre_second.inventario_final.sigma)
      this.presupuesto2.semestre_second.produccion.sigma = Number(this.presupuesto2.semestre_second.necesidad.sigma) - Number(this.presupuesto2.semestre_second.inventario_inicial.sigma)
      this.presupuesto2.semestre_second.necesidad.delta = Number(this.presupuesto2.semestre_second.ventas.delta) + Number(this.presupuesto2.semestre_second.inventario_final.delta)
      this.presupuesto2.semestre_second.produccion.delta = Number(this.presupuesto2.semestre_second.necesidad.delta) - Number(this.presupuesto2.semestre_second.inventario_inicial.delta)
    },
    calculateTotalsPresupuesto3: function() {
      this.presupuesto3.materia_a.total = Number(this.presupuesto3.materia_a.delta) + Number(this.presupuesto3.materia_a.sigma)
      this.presupuesto3.materia_b.total = Number(this.presupuesto3.materia_b.delta) + Number(this.presupuesto3.materia_b.sigma)
    },
    calculateTotalsPresupuesto4: function() {
      this.presupuesto4.materia_a.total = Number(this.presupuesto4.materia_a.delta) + Number(this.presupuesto4.materia_a.sigma)
      this.presupuesto4.materia_b.total = Number(this.presupuesto4.materia_b.delta) + Number(this.presupuesto4.materia_b.sigma)
    }
  },
  filters:{

  },
  components: {

  }
});