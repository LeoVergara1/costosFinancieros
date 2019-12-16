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
    presupuesto5: {
      semestre_one: {
        reqXProduccion:{a:0, b: 0},
        inventarioFinal:{a:0, b: 0},
        necesidad:{a:0, b: 0},
        inventarioInicial:{a:0, b: 0},
        totalAComporar:{a:0, b: 0},
        costoKg:{a:0, b: 0},
        costoCompra:{a:0, b: 0},
      },
      semestre_second: {
        reqXProduccion:{a:0, b: 0},
        inventarioFinal:{a:0, b: 0},
        necesidad:{a:0, b: 0},
        inventarioInicial:{a:0, b: 0},
        totalAComporar:{a:0, b: 0},
        costoKg:{a:0, b: 0},
        costoCompra:{a:0, b: 0},
      }
    },
    presupuesto6: {
      semestre_one: {
        reqProduccion: {a: 0, b: 0},
        horasProduccion: {a: 0, b: 0},
        totalHoras: {a: 0, b: 0},
        costoHoras: {a: 0, b: 0},
        totalCostoMod: {a: 0, b: 0},
        total: {a: 0, b: 0},
      },
      semestre_second: {
        reqProduccion: {a: 0, b: 0},
        horasProduccion: {a: 0, b: 0},
        totalHoras: {a: 0, b: 0},
        costoHoras: {a: 0, b: 0},
        totalCostoMod: {a: 0, b: 0},
        total: {a: 0, b: 0},
      },
    },
    presupuesto7: {
      a: 0,
      b: 0,
      total: 0
    },
    presupuesto8:{
      materiaA: {
        costoUnitarioDelta: 0,
        multiDelta: 0,
        delta: 0,
        costoUnitarioSigma: 0,
        multiSigma: 0,
        sigma: 0
      },
      materiaB: {
        costoUnitarioDelta: 0,
        multiDelta: 0,
        delta: 0,
        costoUnitarioSigma: 0,
        multiSigma: 0,
        sigma: 0
      },
      primaObra: {
        costoUnitarioDelta: 0,
        multiDelta: 0,
        delta: 0,
        costoUnitarioSigma: 0,
        multiSigma: 0,
        sigma: 0
      },
      gastosFabricacion: {
        costoUnitarioDelta: 0,
        multiDelta: 0,
        delta: 0,
        costoUnitarioSigma: 0,
        multiSigma: 0,
        sigma: 0
      },
      totalSigma: 0,
      totalDelta: 0
    },
    presupuesto9: {
      materiaPrimaReq: {
        a: 0,
        b: 0,
        total: 0
      },
      manoDeObra: {
        a: 0,
        b: 0,
        total: 0
      },
      gastosFabricacion: {
        a: 0,
        b: 0,
        total: 0
      },
      costosProduccion: {
        total: 0
      },
      inventarioTerminado: {
        total: 0
      },
      disponible: {
        total: 0
      },
      inventarioFinal: {
        total: 0
      },
      costoVenta: {
        total: 0
      }
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
      this.presupuesto3.total = (Number(this.presupuesto3.materia_b.total) * Number(this.presupuesto3.materia_b.costoKg)) + (Number(this.presupuesto3.materia_a.total) * Number(this.presupuesto3.materia_a.costoKg))
    },
    calculateTotalsPresupuesto4: function() {
      this.presupuesto4.materia_a.total = Number(this.presupuesto4.materia_a.delta) + Number(this.presupuesto4.materia_a.sigma)
      this.presupuesto4.materia_b.total = Number(this.presupuesto4.materia_b.delta) + Number(this.presupuesto4.materia_b.sigma)
      this.presupuesto4.total = (Number(this.presupuesto4.materia_b.total) * Number(this.presupuesto4.materia_b.costoKg)) + (Number(this.presupuesto4.materia_a.total) * Number(this.presupuesto4.materia_a.costoKg))
    },
    calculateTotalsPresupuesto5: function() {
      this.presupuesto5.semestre_one.necesidad.a = Number(this.presupuesto5.semestre_one.reqXProduccion.a) + Number(this.presupuesto5.semestre_one.inventarioFinal.a)
      this.presupuesto5.semestre_one.necesidad.b = Number(this.presupuesto5.semestre_one.reqXProduccion.b) + Number(this.presupuesto5.semestre_one.inventarioFinal.b)
      this.presupuesto5.semestre_second.necesidad.a = Number(this.presupuesto5.semestre_second.reqXProduccion.a) + Number(this.presupuesto5.semestre_second.inventarioFinal.a)
      this.presupuesto5.semestre_second.necesidad.b = Number(this.presupuesto5.semestre_second.reqXProduccion.b) + Number(this.presupuesto5.semestre_second.inventarioFinal.b)
      this.presupuesto5.semestre_one.totalAComporar.a = Number(this.presupuesto5.semestre_one.necesidad.a) - Number(this.presupuesto5.semestre_one.inventarioInicial.a)
      this.presupuesto5.semestre_one.totalAComporar.b = Number(this.presupuesto5.semestre_one.necesidad.b) - Number(this.presupuesto5.semestre_one.inventarioInicial.b)
      this.presupuesto5.semestre_second.totalAComporar.a = Number(this.presupuesto5.semestre_second.necesidad.a) - Number(this.presupuesto5.semestre_second.inventarioInicial.a)
      this.presupuesto5.semestre_second.totalAComporar.b = Number(this.presupuesto5.semestre_second.necesidad.b) - Number(this.presupuesto5.semestre_second.inventarioInicial.b)
      this.presupuesto5.semestre_one.costoCompra.a = Number(this.presupuesto5.semestre_one.costoKg.a) * this.presupuesto5.semestre_one.totalAComporar.a
      this.presupuesto5.semestre_one.costoCompra.b = Number(this.presupuesto5.semestre_one.costoKg.b) * this.presupuesto5.semestre_one.totalAComporar.b
      this.presupuesto5.semestre_second.costoCompra.a = Number(this.presupuesto5.semestre_second.costoKg.a) * this.presupuesto5.semestre_second.totalAComporar.a
      this.presupuesto5.semestre_second.costoCompra.b = Number(this.presupuesto5.semestre_second.costoKg.b) * this.presupuesto5.semestre_second.totalAComporar.b
    },
    calculateTotalsPresupuesto6: function() {
      this.presupuesto6.semestre_one.costoHoras.a = Number(this.presupuesto6.semestre_one.horasProduccion.a) * Number(this.presupuesto6.semestre_one.totalHoras.a)
      this.presupuesto6.semestre_one.costoHoras.b = Number(this.presupuesto6.semestre_one.horasProduccion.b) * Number(this.presupuesto6.semestre_one.totalHoras.b)
      this.presupuesto6.semestre_second.costoHoras.a = Number(this.presupuesto6.semestre_second.horasProduccion.a) * Number(this.presupuesto6.semestre_second.totalHoras.a)
      this.presupuesto6.semestre_second.costoHoras.b = Number(this.presupuesto6.semestre_second.horasProduccion.b) * Number(this.presupuesto6.semestre_second.totalHoras.b)
      this.presupuesto6.semestre_one.total.a = Number(this.presupuesto6.semestre_one.costoHoras.a) * Number(this.presupuesto6.semestre_one.totalCostoMod.a)
      this.presupuesto6.semestre_one.total.b = Number(this.presupuesto6.semestre_one.costoHoras.b) * Number(this.presupuesto6.semestre_one.totalCostoMod.b)
      this.presupuesto6.semestre_second.total.a = Number(this.presupuesto6.semestre_second.costoHoras.a) * Number(this.presupuesto6.semestre_second.totalCostoMod.a)
      this.presupuesto6.semestre_second.total.b = Number(this.presupuesto6.semestre_second.costoHoras.b) * Number(this.presupuesto6.semestre_second.totalCostoMod.b)
    },
    calculateTotalsPresupuesto7: function() {
      this.presupuesto7.total = Number(this.presupuesto7.a) / Number(this.presupuesto7.b)
    },
    calculateTotalsPresupuesto8: function(){
      this.presupuesto8.materiaA.delta = Number(this.presupuesto8.materiaA.costoUnitarioDelta) * Number(this.presupuesto8.materiaA.multiDelta)
      this.presupuesto8.materiaA.sigma = Number(this.presupuesto8.materiaA.costoUnitarioSigma) * Number(this.presupuesto8.materiaA.multiSigma)
      this.presupuesto8.materiaB.delta = Number(this.presupuesto8.materiaB.costoUnitarioDelta) * Number(this.presupuesto8.materiaB.multiDelta)
      this.presupuesto8.materiaB.sigma = Number(this.presupuesto8.materiaB.costoUnitarioSigma) * Number(this.presupuesto8.materiaB.multiSigma)
      this.presupuesto8.primaObra.delta = Number(this.presupuesto8.primaObra.costoUnitarioDelta) * Number(this.presupuesto8.primaObra.multiDelta)
      this.presupuesto8.primaObra.sigma = Number(this.presupuesto8.primaObra.costoUnitarioSigma) * Number(this.presupuesto8.primaObra.multiSigma)
      this.presupuesto8.gastosFabricacion.delta = Number(this.presupuesto8.gastosFabricacion.costoUnitarioDelta) * Number(this.presupuesto8.gastosFabricacion.multiDelta)
      this.presupuesto8.gastosFabricacion.sigma = Number(this.presupuesto8.gastosFabricacion.costoUnitarioSigma) * Number(this.presupuesto8.gastosFabricacion.multiSigma)
      this.presupuesto8.totalDelta = this.presupuesto8.materiaA.delta + this.presupuesto8.materiaB.delta + this.presupuesto8.primaObra.delta + this.presupuesto8.gastosFabricacion.delta
      this.presupuesto8.totalSigma = this.presupuesto8.materiaA.sigma + this.presupuesto8.materiaB.sigma + this.presupuesto8.primaObra.sigma + this.presupuesto8.gastosFabricacion.sigma
    },
    calculateTotalsPresupuesto9: function(){
      this.presupuesto9.materiaPrimaReq.total = Number(this.presupuesto9.materiaPrimaReq.a) + Number(this.presupuesto9.materiaPrimaReq.b) 
      this.presupuesto9.manoDeObra.total = Number(this.presupuesto9.manoDeObra.a) + Number(this.presupuesto9.manoDeObra.b) 
      this.presupuesto9.gastosFabricacion.total = Number(this.presupuesto9.gastosFabricacion.a) + Number(this.presupuesto9.gastosFabricacion.b) 
      this.presupuesto9.costosProduccion.total = this.presupuesto9.materiaPrimaReq.total + this.presupuesto9.manoDeObra.total + this.presupuesto9.gastosFabricacion.total
      this.presupuesto9.disponible.total = this.presupuesto9.costosProduccion.total - this.presupuesto9.inventarioTerminado.total 
      this.presupuesto9.costoVenta.total = this.presupuesto9.disponible.total - this.presupuesto9.inventarioFinal.total 
    }
  },
  filters:{

  },
  components: {

  }
});