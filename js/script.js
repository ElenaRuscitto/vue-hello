const { createApp } = Vue;

createApp ({

  data (){
    
    return {

      message: 'Buon Pomeriggio',
      nome: '',

      // image: "./img/vuejs.jpg"
      immagine2: '<img src="./img/vuejs.jpg" alt="">',
      immagine3: 'https://c7.alamy.com/compit/2rht0h8/asp-concetto-di-business-e-teconologia-testo-su-cubi-di-legno-2rht0h8.jpg'
    }
  },

}).mount ('#app');