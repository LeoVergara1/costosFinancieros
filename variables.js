const app = new Vue({
  el:"#app",
  data: {
    nomina: {
      salaryMonth: 0,
      quarter: 0,
      extraTime: 0,
      puntuality: 0,

    },
    options: [
      {value: "cargo", text: 'Cargo' },
      {value: "abono", text: 'Abono' }
    ],
    selected: "",
    entry:{
      name: "",
      precio: null,
      type: ""
    },
    orden: {
      name: "",
      file1: null,
      file2: null,
      file3: null,
    },
    listEntries: [],
    listOrdenes: []
  },
  mounted: function() {

  },
  created: function() {

  },
  watch: {

  },
  computed: {
    sumFile1: function(){
      if(this.listOrdenes.length == 0){
        return 0
      }
      else {
        return this.listOrdenes.reduce((prev, cur) =>{
         return prev + Number(cur.file1)
        }, 0)
      }
    },
    sumFile2: function(){
      if(this.listOrdenes.length == 0){
        return 0
      }
      else {
        return this.listOrdenes.reduce((prev, cur) =>{
         return prev + Number(cur.file2)
        }, 0)
      }
    },
    sumFile3: function(){
      if(this.listOrdenes.length == 0){
        return 0
      }
      else {
        return this.listOrdenes.reduce((prev, cur) =>{
         return prev + Number(cur.file3)
        }, 0)
      }
    }
  },
  methods: {
    calculateNomina(){

    },
    addEntry(){
      this.listEntries.push(Object.assign({}, this.entry))
    },
    addOrder(){
      this.listOrdenes.push(Object.assign({}, this.orden))
    },
    setType(){
      this.entry.type = this.selected
    }
  },
  filters:{

  },
  components: {

  }
});