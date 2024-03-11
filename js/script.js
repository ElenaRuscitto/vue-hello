const { createApp } = Vue;

createApp ({

  data (){
    
    return {

      message: 'Buon Pomeriggio',
      nome: '',

      myC: 'bianco',
      miaClasseMessage: 'verde',
      miaClasseNome: 'blu',
      displayDate:'00/00/0000',
      // image: "./img/vuejs.jpg"
      immagine2: '<img src="./img/vuejs.jpg" alt="" class= "w-100">',
      immagine3: 'https://c7.alamy.com/compit/2rht0h8/asp-concetto-di-business-e-teconologia-testo-su-cubi-di-legno-2rht0h8.jpg'
    }
  },

  methods: {
    printDate(){
      const d =  new Date();
      const g = d.getDate() < 10 ? '0'+d.getDate() : d.getDate();
      const m = d.getMonth() + 1 < 10 ? '0'+(d.getMonth() + 1 ): d.getMonth() + 1;
      const a = d.getFullYear() ;
      this.displayDate = `${g}/${m}/${a}`
    }
  },

  mounted(){
    this.printDate();
  } ,

}).mount ('#app');