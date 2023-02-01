<template>
  <main>
    <article>
      <div class="description">
        <div class="container">
          <p>
            Race against time, outsmart the cops, and take on weekly qualifiers
            to reach The Grand, Lakeshore's ultimate street racing challenge.
            Pack your garage with precision-tuned, custom rides and light up the
            streets with your style, exclusive fits, and a vibrant global
            soundtrack that bumps in every corner of the world.
          </p>
        </div>
      </div>
      <div class="game-list">
        <div class="container">
          <div v-for="game in gamesData" :key="game" class="card">
            <a href="#">
              <div
                class="card-img"
                :style="`background-image: url(${require(`@/assets/${game.image}`)})`"
              >
                <h2>
                  <img :src="game.logo" :alt="game.name" />
                </h2>
              </div>
            </a>
          </div>
        </div>
        <button class="">More games</button>
      </div>
    </article>
  </main>
</template>
<script>
// files SVG
import nfsHeatLogo from "@/assets/nfs-heat.svg";
import nfsPursuitLogo from "@/assets/nfs-hot-pursuit.svg";
import nfsPaybackLogo from "@/assets/nfs-payback.svg";
import nfsRivalsLogo from "@/assets/nfs-rivals.svg";
import nfsNoLimitsLogo from "@/assets/nfs-no-limits.svg";
import nfsMobileLogo from "@/assets/nfs-mobile.svg";

export default {
  name: "MyMain",
  //   component: {
  //     Articleee,
  //   },
  data() {
    return {
      gamesData: [
        {
          name: "NFS heat",
          logo: nfsHeatLogo,
          image: "nfs-heat.jpg",
        },
        {
          name: "NFS hot pursuit",
          logo: nfsPursuitLogo,
          image: "nfs-hot-pursuit.jpg",
        },
        {
          name: "NFS payback",
          logo: nfsPaybackLogo,
          image: "nfs-payback.jpg",
        },
        {
          name: "NFS rivals",
          logo: nfsRivalsLogo,
          image: "nfs-rivals.jpg",
        },
        {
          name: "NFS no limits",
          logo: nfsNoLimitsLogo,
          image: "nfs-no-limits.jpg",
        },
        {
          name: "NFS mobile",
          logo: nfsMobileLogo,
          image: "nfs-mobile.jpg",
        },
      ],
    };
  },
  // computed:{
  //   background(){
  //     return `background-image: url(${require(`@/assets/${game.image}`)})`
  //   }
  // }
};
</script>
