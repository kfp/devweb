<template>
  <div class="menu">
    <router-link to="/" id="logoLink" class="menuLink">
      <h2 id="logoLink"><span id="firstLogoLink">devweb</span><br>
        <span  id="secondLogoLink">.sperlazzasaurus</span></h2>
    </router-link><router-link to="/about" class="menuLink">
      <img src="../assets/about.png">
      <br>
      About
    </router-link><router-link to="/portfolio" class="menuLink">
      <img src="../assets/portfolio.png">
      <br>
      Portfolio
    </router-link><router-link to="/resume" class="menuLink">
      <img src="../assets/resume.png">
      <br>
      Resume
    </router-link><router-link to="/contact" class="menuLink">
      <img src="../assets/contact.png">
      <br>
      Contact
    </router-link><img id="dino" src="../assets/dino2.png">
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#logoLink{
  margin-top:0;
}
#firstLogoLink{
  color: #595F23;
}
#secondLogoLink{
  color: #E15417;
}
.menu{
  height: 80px;
}
.menuLink{
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  text-align: center;
  border: 0px;
  text-decoration: none;
}
</style>
