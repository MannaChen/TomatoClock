<template>
  <div id="app" class="application">
    <menu-item v-show="menuSelected" />
    <main class="main">
      <AnalyticsView v-if="isAnalyticsView"/>
      <TodoListView v-else-if="isTodoListView" />
      <CountDownView v-else />
    </main>
    <menu-icon :isNavOpen="menuSelected"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CountDownView from '@/views/CountDownView.vue';
import AnalyticsView from '@/views/AnalyticsView.vue';
import TodoListView from '@/views/TodoListView.vue';
import MenuItem from '@/components/menu/MenuItem.vue';
import MenuIcon from '@/components/menu/MenuIcon.vue';

export default {
  name: 'app',
  components: {
    CountDownView, AnalyticsView, TodoListView, MenuItem, MenuIcon
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['menuSelected']),
    isAnalyticsView() {
      return this.menuSelected === 'anal';
    },
    isTodoListView() {
      return this.menuSelected === 'todo';
    },
    isRingtonesView() {
      return this.menuSelected === 'ring';
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.application {
  width: 100%;
  height: 100vh;
  background-color: #FFEDF7;
  color: white;
  font-family: 'Roboto', sans-serif;
  display: flex;
  .main {
    flex: 1;
  }
}

// reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
