const { createApp } = Vue;

createApp ({

  data (){
    
    return {

      message: 'Buon Pomeriggio',
      nome: 'Booleaners',
      // image: "./img/vuejs.jpg"
      immagine2: '<img src="./img/vuejs.jpg" alt="">'
    }
  },

}).mount ('#app');