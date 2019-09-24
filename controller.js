const app = new Vue({
  el:"#app",
  data: {
    selected: "",
    options: [
      {value: "factura", text: 'Factura' },
      {value: "vale", text: 'Vale' }
    ],
    entry: {
      type: "",
      date: "",
      concept: "",
      income: null,
      leave: null,
      exist: null,
      unity: null,
      due: null,
      have: null,
      amount: null,
      medium: null

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
      this.entry.type= null
      this.entry.date= null
      this.entry.concept= null
      this.entry.income = null
      this.entry.leave = null
      this.entry.exist = null
      this.entry.unity = null
      this.entry.due = null
      this.entry.have = null
      this.entry.amount = null
      this.entry.medium = null
    }
  },
  computed: {
    amount(){
      let last_element = this.listEntries[this.listEntries.length - 1];
      let entriesIncome = this.listEntries.filter(e => e.type == "factura" );
      let result = last_element.unity * last_element.income
      return result
    }
  },
  methods: {
    setType(){
      this.entry.type = this.selected
    },
    addEntry(){
      console.log("add")
      if(this.listEntries.length == 0){
        console.log("Primera vez")
        this.entry.amount = this.entry.unity * this.entry.income
        this.entry.due = this.entry.unity * this.entry.income
        this.entry.exist = this.entry.income
        this.listEntries.push(Object.assign({}, this.entry))
      }
      else {
        if(this.selected == "factura"){
          console.log("Factura")
          let entry = Object.assign({}, this.listEntries[this.listEntries.length - 1]);
          entry.unity = this.entry.unity
          entry.exist = Number(entry.exist) + Number(this.entry.income)
          entry.due = (this.entry.unity * this.entry.income)
          entry.amount = entry.due + entry.amount
          entry.type = this.entry.type
          this.listEntries.push(Object.assign({}, entry))
        }
        else{
          console.log("Vale")
          let entry = Object.assign({}, this.listEntries[this.listEntries.length - 1]);
          entry.exist = Number(entry.exist) - Number(this.entry.leave)
          entry.have = (this.entry.leave * this.entry.medium)
          entry.leave = this.entry.leave
          entry.medium = this.entry.medium
          entry.amount = entry.amount - entry.have
          entry.type = this.entry.type
          this.listEntries.push(Object.assign({}, entry))
        }
      }
    }
  },
  filters:{

  },
  components: {

  }
});