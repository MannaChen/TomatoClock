<template>
  <ul class="nav__item__wrapper">
    <li class="nav__item" :class="{'is-selected': selected('todo')}" @click="onClickMenuItem('todo')">
      <icon-todo-list class="icon"/>
      <span class="label">TODO-LIST</span>
    </li>
    <li class="nav__item" :class="{'is-selected': selected('anal')}" @click="onClickMenuItem('anal')">
      <icon-bar-chart class="icon"/>
      <span class="label">ANALYTICS</span>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

import IconTodoList from "vue-material-design-icons/FormatListBulleted.vue";
import IconBarChart from "vue-material-design-icons/PollBox.vue";
import IconMusic from "vue-material-design-icons/LibraryMusic.vue";

export default {
  components: {
    IconTodoList, IconBarChart, IconMusic
  },
  data() {
    return {
      
    }
  },
  methods: {
    onClickMenuItem(selected){
      this.$store.commit('onClickMenu', selected);
    },
    selected(v) {
      return this.menuSelected === v;
    }
  },
  computed: {
    ...mapState(['menuSelected']),
  }
}
</script>

<style lang="scss" scoped>

.nav__item__wrapper {
  display: flex;
  flex-direction: column;
  padding: 48px 80px 0 40px;
  background-color:#003164;
  .nav__item {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    opacity: 0.6;
    &+.nav__item {
      margin-top: 42px;
    }
    &.is-selected {
      opacity: 1;
      color: #FF4384;
    }
    .icon {
      width: 2em;
      height: 2em;
      /deep/ .material-design-icon__svg {
        width: 100%;
        height: 100%;
      }
    }
    .label {
      font-size: 36px;
      font-weight: bold;
      margin-left: 20px;
      letter-spacing: 0.5px;
    }
  }
}
</style>


