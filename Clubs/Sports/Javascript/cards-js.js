Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 40;
      const rY = this.mousePY * -40;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 0.1);
    }
  }
});

const app = new Vue({
  el: '#app'
});
// popups
document.getElementById('card1').addEventListener("click", function() {
  document.getElementById("popup1").style.display = "flex";
  document.getElementById("popup1").style.backgroundColor = rgba(0,0,0,0.5);
},);

document.querySelector('.close1',).addEventListener("click", function() {
  document.getElementById("popup1").style.display = "none";
});

document.getElementById('card2').addEventListener("click", function() {
  document.getElementById("popup2").style.display = "flex";
},);

document.querySelector('.close2').addEventListener("click", function() {
  document.getElementById("popup2").style.display = "none";
});

document.getElementById('card3').addEventListener("click", function() {
  document.getElementById("popup3").style.display = "flex";
},);

document.querySelector('.close3').addEventListener("click", function() {
  document.getElementById("popup3").style.display = "none";
});

document.getElementById('card4').addEventListener("click", function() {
  document.getElementById("popup4").style.display = "flex";
},);

document.querySelector('.close4').addEventListener("click", function() {
  document.getElementById("popup4").style.display = "none";
});


document.getElementById('card5').addEventListener("click", function() {
  document.getElementById("popup5").style.display = "flex";
},);

document.querySelector('.close5').addEventListener("click", function() {
  document.getElementById("popup5").style.display = "none";
});

document.getElementById('card6').addEventListener("click", function() {
  document.getElementById("popup6").style.display = "flex";
},);

document.querySelector('.close6').addEventListener("click", function() {
  document.getElementById("popup6").style.display = "none";
});

document.getElementById('card7').addEventListener("click", function() {
  document.getElementById("popup7").style.display = "flex";
},);

document.querySelector('.close7').addEventListener("click", function() {
  document.getElementById("popup7").style.display = "none";
});

document.getElementById('card8').addEventListener("click", function() {
  document.getElementById("popup8").style.display = "flex";
},);

document.querySelector('.close8').addEventListener("click", function() {
  document.getElementById("popup8").style.display = "none";
});


document.getElementById('card9').addEventListener("click", function() {
  document.getElementById("popup9").style.display = "flex";
},);

document.querySelector('.close9').addEventListener("click", function() {
  document.getElementById("popup9").style.display = "none";
});

document.getElementById('card10').addEventListener("click", function() {
  document.getElementById("popup10").style.display = "flex";
},);

document.querySelector('.close10').addEventListener("click", function() {
  document.getElementById("popup10").style.display = "none";
});


document.getElementById('card11').addEventListener("click", function() {
  document.getElementById("popup11").style.display = "flex";
},);

document.querySelector('.close11').addEventListener("click", function() {
  document.getElementById("popup11").style.display = "none";
});

document.getElementById('card12').addEventListener("click", function() {
  document.getElementById("popup12").style.display = "flex";
},);

document.querySelector('.close12').addEventListener("click", function() {
  document.getElementById("popup12").style.display = "none";
});
 function return_nav()
{
  document.getElementById("navbar").style.display="none";
      document.getElementById("logo").style.display="none";
  document.getElementById("navbar").style.removeProperty( 'display' );
      document.getElementById("logo").style.removeProperty( 'display' );

}