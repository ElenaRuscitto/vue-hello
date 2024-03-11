const { createApp } = Vue;

createApp ({

  data (){
    
    return {

      message: 'Buon Pomeriggio',
      nome: '',
      myBGC: 'verdeScuro',
      myC: 'bianco',
      miaClasseMessage: 'verde',
      miaClasseNome: 'blu',
      displayDate:'00/00/0000',
      // image: "./img/vuejs.jpg"
      immagine2: '<img src="./img/vuejs.jpg" alt="">',
      immagine3: 'https://c7.alamy.com/compit/2rht0h8/asp-concetto-di-business-e-teconologia-testo-su-cubi-di-legno-2rht0h8.jpg'
    }
  },

  methods: {
    printDate(){
      const d =  new Date();
      const g = d.getDate() < 10 ? '0'+d.getDate() : d.getDate();
      const m = d.getMonth() + 1 < 10 ? '0'+d.getMonth() : d.getMonth();
      const a = d.getFullYear() ? '0'+d.getFullYear() : d.getFullYear();
      this.displayData = `${g}/${m}/${a}`
    }
  },

  mounted(){
    this.printDate();
  } ,

}).mount ('#app');