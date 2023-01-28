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
            <div
              class="card-img"
              :style="`background-image: url(${game.image})`"
            >
              <h2><img :src="game.logo" :alt="game.name" /></h2>
            </div>
          </div>
        </div>
      </div>
      <button class="">More games</button>
    </article>
  </main>
</template>
<script>
import nfsHeatLogo from "@/assets/nfs-heat.svg";
import nfsHeatImage from "@/assets/nfs-heat.jpg";
import nfsPursuitLogo from "@/assets/nfs-hot-pursuit.svg";
import nfsPursuitImage from "@/assets/nfs-hot-pursuit.jpg";
import nfsPaybackLogo from "@/assets/nfs-payback.svg";
import nfsPaybackImage from "@/assets/nfs-payback.jpg";
import nfsRivalsLogo from "@/assets/nfs-rivals.svg";
import nfsRivalsImage from "@/assets/nfs-rivals.jpg";
import nfsNoLimitsLogo from "@/assets/nfs-no-limits.svg";
import nfsNoLimitsImage from "@/assets/nfs-no-limits.jpg";
import nfsMobileLogo from "@/assets/nfs-mobile.svg";
import nfsMobileImage from "@/assets/nfs-mobile.jpg";

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
          image: nfsHeatImage,
        },
        {
          name: "NFS hot pursuit",
          logo: nfsPursuitLogo,
          image: nfsPursuitImage,
        },
        {
          name: "NFS payback",
          logo: nfsPaybackLogo,
          image: nfsPaybackImage,
        },
        {
          name: "NFS rivals",
          logo: nfsRivalsLogo,
          image: nfsRivalsImage,
        },
        {
          name: "NFS no limits",
          logo: nfsNoLimitsLogo,
          image: nfsNoLimitsImage,
        },
        {
          name: "NFS mobile",
          logo: nfsMobileLogo,
          image: nfsMobileImage,
        },
      ],
    };
  },
  // computed: {
  //   backgroundImageCard() {
  //     console.log(this);
  //     return `background-image: url(${game.image})`;
  //     // return this.gamesData.map((game) => {
  //     //   if (game.image) {
  //     //     // console.log(game.image);
  //     //     return `background-image: url(${game.image})`;
  //     //   }
  //     // });
  //   },
  // },
};
</script>
