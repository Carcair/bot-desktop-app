<template>
  <div id="app" style="-webkit-app-region: drag">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  height: 600px;
  width: 800px;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    70deg,
    lightblue,
    cornflowerblue,
    #1d4e89,
    cornflowerblue,
    lightblue
  );
  -webkit-animation: Gradient 30s ease infinite;
  -moz-animation: Gradient 30s ease infinite;
  -o-animation: Gradient 30s ease infinite;
  animation: Gradient 30s ease infinite;
  background-size: 500% 500%;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-o-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
