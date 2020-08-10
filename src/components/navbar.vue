<template>
  <div class="navbar">
    <NavButton route="messages">Messages</NavButton>
    <NavButton route="schedules">Schedules</NavButton>
    <NavButton route="triggers">Triggers</NavButton>
    <NavButton route="reports">Reports</NavButton>
    <NavButton route="logout">Logout</NavButton>
  </div>
</template>

<script>
import NavButton from './buttons/navbarButtons';
export default {
  name: 'Navbar',
  components: {
    NavButton,
  },
};
</script>

<style>
.navbar {
  background-color: rgba(241, 246, 247, 0.7);
  -webkit-animation: Slide 1s ease;
  -moz-animation: Slide 1s ease;
  -o-animation: Slide 1s ease;
  animation: Slide 1s ease;
  position: relative;
  padding-top: 15px;
}
@-webkit-keyframes Slide {
  0% {
    left: -150px;
  }
  100% {
    left: 0px;
  }
}
@-moz-keyframes Slide {
  0% {
    left: -150px;
  }
  100% {
    left: 0px;
  }
}
@-o-keyframes Slide {
  0% {
    left: -150px;
  }
  100% {
    left: 0px;
  }
}
@keyframes Slide {
  0% {
    left: -150px;
  }
  100% {
    left: 0px;
  }
}
</style>
