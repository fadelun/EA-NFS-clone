<template>
  <footer>
    <div class="container">
      <nav class="nav-footer">
        <div class="logo-nfs">
          <img :src="require('@/assets/NFS.svg')" alt="NFS logo" />
        </div>
        <ul>
          <li><a href="#">Browser Games</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Forums</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </nav>
      <nav classs="nav-social-media">
        <ul>
          <li class="circle"><a href="#"></a></li>
          <li class="circle"><a href="#"></a></li>
          <li class="circle"><a href="#"></a></li>
          <li class="circle"><a href="#"></a></li>
        </ul>
      </nav>
      <p>All resources by Electronic Arts</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "MyFooter",
  data() {
    return {
      NFSLogo: "NFS.svg",
      // icons : {
      //     yt : s,
      //     fb : s,
      //     in : s,
      //     tw :s
      // }
    };
  },
};
</script>
<style></style>
