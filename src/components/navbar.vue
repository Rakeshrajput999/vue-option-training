<template>
  <div class="menu"><div class="rectangle-1"></div></div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss" scoped>
.menu {
  background-size: 100% 100%;
  background-position: center;
  background-image: url("https://static.overlay-tech.com/assets/e4cf997c-7def-4f78-8e88-de3a4493d28f.png");
}
.rectangle-1 {
  width: 428px;
  height: 79px;
  background-color: $gainsboro;
  position: absolute;
  right: -366px;
  top: 8px;
}
</style>