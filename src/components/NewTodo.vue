<template>
  <div class="new-todo__area">
    <input
      class="new-todo-desc"
      type="text"
      v-model="newTodoDesc"
      placeholder="ADD A NEW MISSION..."
      @keydown.enter="onClickAddTodo"
    >
    <plus-icon class="plus-icon" @click="onClickAddTodo"/>
  </div>
</template>

<script>
import PlusIcon from "vue-material-design-icons/Plus.vue";

export default {
  components: {
    PlusIcon,
  },
  data() {
    return {
      newTodoDesc: '',
    }
  },
  methods: {
    onClickAddTodo() {
      if (!this.newTodoDesc) {
        alert('待辦事項不能為空!');
        return;
      }
      this.$store.commit('addTodo', this.newTodoDesc);
      this.newTodoDesc = '';
    }
  },
}
</script>

<style lang="scss" scoped>
.new-todo__area {
  position: relative;
  .new-todo-desc {
    width: calc(100% - 20px);
    height: 56px;
    border: none;
    padding: 10px;
    font-style: italic;
    outline: none;
    text-indent: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .plus-icon {
    position: absolute;
    right: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
}

::placeholder {
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
  text-indent: 0;
}
</style>


