Vue.config.devtools = true;

Array.dots = document.getElementsByClassName("dot");
var app = new Vue({
    el: '#page',
    data: {
      imgIndex:0,
      image:[
          "https://via.placeholder.com/300/0000FF/FFFFFF?text=Picture+1",
          "https://via.placeholder.com/300/FF0000/FFFFFF?text=Picture+2",
          "https://via.placeholder.com/300/00FF00/FFFFFF?text=Picture+3",
          "https://via.placeholder.com/300/000000/FFFFFF?text=Picture+4"
      ],
      timer:null,
    },
        
    mounted: function () {
      this.startRotation();
    },

      methods: {    
      startRotation:function(){
        this.timer = setInterval(this.next, 3000); //3 secondi
      },

      stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
      },

      next: function() {
      if(this.imgIndex === this.image.length-1){
        this.imgIndex = 0;
      } else{
        this.imgIndex += 1;
      }
      
      },
      prev: function() {
        if(this.imgIndex === 0){
          this.imgIndex = this.image.length-1;
        } else{
          this.imgIndex -= 1;
        }
        
        },
        isCurrentDot: function(index){
          if(index===this.imgIndex){
            return "current";
          } else{
            return "";
          }
        }
      },
      
     });