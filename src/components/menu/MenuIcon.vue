<template>
  <nav class="nav-menu">
    <ul class="nav__icon__wrapper" v-if="menuSelected">
      <li class="nav__icon" @click="onClickMenuIcon('')">
        <icon-close-btn class="icon"/>
      </li>
    </ul>
    <ul class="nav__icon__wrapper" v-else>
      <li class="nav__icon" @click="onClickMenuIcon('todo')">
        <icon-todo-list class="icon"/>
      </li>
      <li class="nav__icon" @click="onClickMenuIcon('anal')">
        <icon-bar-chart class="icon"/>
      </li>
      <!-- <li class="nav__icon" @click="onClickMenuIcon('music')">
        <icon-music class="icon"/>
      </li> -->
    </ul>
    <h1 class="logo">POMODORO</h1>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

import IconCloseBtn from "vue-material-design-icons/WindowClose.vue";
import IconTodoList from "vue-material-design-icons/FormatListBulleted.vue";
import IconBarChart from "vue-material-design-icons/PollBox.vue";
import IconMusic from "vue-material-design-icons/LibraryMusic.vue";

export default {
  components: {
    IconCloseBtn, IconTodoList, IconBarChart, IconMusic
  },
  data() {
    return {
    }
  },
  methods: {
    onClickMenuIcon(selected){
      this.$store.commit('onClickMenu', selected);
    },
  },
  computed: {
    ...mapState(['menuSelected']),
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  background-color: #003164;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
}
.nav__icon__wrapper {
  flex: 1;
  .nav__icon {
    list-style: none;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon {
      width: 2em;
      height: 2em;
      /deep/ .material-design-icon__svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.logo {
  writing-mode: vertical-rl;
  margin-bottom: 48px;
  color: white;
}
</style>


