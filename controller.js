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
      this.listEntries.push(this.entry)
    }
  },
  filters:{

  },
  components: {

  }
});