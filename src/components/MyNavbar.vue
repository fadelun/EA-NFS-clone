<template>
  <nav class="navbar">
    <div class="logo EA-icon">
      <img :src="require('@/assets/EA.svg')" alt="NFS logo" />
    </div>
    <ul>
      <li><a href="#">Browser Games</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">Forums</a></li>
      <li><a href="#">About us</a></li>
    </ul>
    <div class="sign-in">
      <a href="#">Sign in</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "MyNavbar",
};
</script>
<style></style>
