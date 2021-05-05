const app = new Vue({
  
  el: '#app',
  data:{
    i:0,
    photos:[
      'assets/img/img1.jpg',
      'assets/img/img2.jpg',
      'assets/img/img3.jpg',
      'assets/img/img4.jpg',
      'assets/img/img5.jpg'
    ]
  },
  methods:{
    previous(i){
      this.i--;
      if(this.i<0){
        this.i=this.photos.length-1;
      }
    },
    next(i){
      this.i++;
      if(this.i==this.photos.length) this.i = 0;
    }
  }

})