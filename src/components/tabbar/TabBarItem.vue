<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="icon"></slot>
    <slot v-else name="icon-active"></slot>
    <div :class="{active:!isActive}">
      <slot name="name"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },

  data() {
    return {
      // isActive: true
    }
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path)
    }
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>


.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-family: "微软雅黑 Light", serif;

}

.active {
  color: #1296db;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;

  vertical-align: middle;
}
</style>