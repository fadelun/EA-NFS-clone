<template>
  <nav class="navbar">
    <span class="logo EA-icon">
      <img :src="icons.EA" alt="EA logo" />
    </span>
    <span class="logo NFS-icon">
      <img :src="icons.NFS" alt="NFS logo" />
    </span>
    <span class="user-icon">
      <img :src="icons.userIcon" alt="user icon" />
    </span>
  </nav>
</template>
<script>
import EA from "@/assets/EA.svg";
import NFS from "@/assets/NFS.svg";
import userIcon from "@/assets/user-regular.svg";

export default {
  name: "MyNavbar",
  data() {
    return {
      icons: {
        EA,
        NFS,
        userIcon,
      },
    };
  },
};
</script>
<style></style>
