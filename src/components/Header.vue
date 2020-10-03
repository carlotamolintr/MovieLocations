<template>
  <div class="header d-flex w-100">
    <div class="header__boxTitle d-flex my-auto "><h1 id="offset" class="title mx-auto my-auto">M<span id="offset">O</span>vie locations</h1></div>
      <!-- <img class="logo" src="../assets/film1.png" /> -->
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Warnes&display=swap');

.header {
  background-color: black;
  height: 100px;
}

.logo {
  opacity: 0.9;
  /* width: 80%; */
  z-index: 1;
}
.header__boxTitle {
  margin-left: 40px;
  position:relative;
  border:3px solid #1086e8;
  width:400px;
  border-radius:20px;
  animation: border-flicker 2s linear infinite;
}

.title {
  font-family: 'Warnes', cursive;
  text-shadow: 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  font-size:1.75rem;
  padding: 5px;
  color:#479aec;
  /* font-family: 'Raleway', sans-serif; */
  letter-spacing: 3px;
  animation: text-flicker 3s linear infinite;
}

#offset {
  /* animation: letter-flicker 1s linear infinite; */
}

/* @keyframes text-flicker {
  0% {
    opacity:0.2;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }

  2% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  8% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  9% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
  }
  12% {
    opacity:0.1;
    text-shadow: 0px 0px rgba(242, 22, 22, 1);
  }
  20% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  25% {
    opacity:0.3;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  30% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }

  70% {
    opacity:0.7;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }

  72% {
    opacity:0.2;
    text-shadow:0px 0px 29px rgba(242, 22, 22, 1)
  }

  77% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
  100% {
    opacity:.9;
    text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
  }
}*/

@keyframes border-flicker {
  0% {
    opacity:0.1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  2% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  4% {
    opacity:0.1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }

  8% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  70% {
    opacity:0.7;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  100% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
-moz-box-shadow: 0px 0px 78px 4px rgba(16,134,232,0.73);
box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
}

/* @keyframes letter-flicker {
  0% {
    opacity:0.1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  2% {
    opacity:0.1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  4% {
    opacity:1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }

  19% {
    opacity:1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  21% {
    opacity:0.1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  23% {
    opacity:1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }

  80% {
    opacity:1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  83% {
    opacity:0.4;
    text-shadow:0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  87% {
    opacity:1;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
} */
</style>
