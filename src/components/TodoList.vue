<template>
  <ol class="todo-item__wrapper"
    :class="{'show-tomatoes': showTomatoes, 'done': done}">
    <li class="todo-item" v-for="todo in todoList" :key="todo.id">
      <label>
        <input type="checkbox" class="todo-item-checkbox">
        <span class="checkmark" @click.stop="onCheckTodo(todo.id)"></span>
        <h3 class="todo-label">
          <p class="desc">{{ todo.desc }}</p>
        </h3>
        <div class="tomatoes__wrapper">
          <span class="tomatoes" v-for="(t, i) in tomatoes" :key="i"></span>
          <span class="tomatoes transparent"></span>
        </div>
      </label>
      <icon-pencil class="icon" v-show="!showTomatoes" @click.stop="onEditTodo(todo.id, todo.desc)"/>
      <icon-delete class="icon" v-show="!showTomatoes" @click.stop="onDeleteTodo(todo.id)"/>
    </li>
    <span class="more" v-if="!showTomatoes">MORE</span>
  </ol>
</template>

<script>
import IconDelete from "vue-material-design-icons/Delete.vue";
import IconPencil from "vue-material-design-icons/Pencil.vue";

export default {
  components: { IconDelete, IconPencil },
  props:{
    todoList: {
      type: Array,
      default: [],
    },
    showTomatoes: {
      type: Boolean,
      default: false,
    },
    tomatoes: {
      type: Number,
      default: 0,
    },
    done: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onDeleteTodo(id) {
      if (confirm('確定刪除?')) this.$store.commit('onDeleteTodo', id);
    },
    onCheckTodo(id) {
      if (confirm('完成了嗎?')) this.$store.commit('finishTodo', id);
    },
    onEditTodo(id, desc) {
      const newDesc = prompt('編輯 Todo', desc);
      if (newDesc) {
        this.$store.commit('onEditTodo', {id, newDesc});
      } else {
        alert('不能輸入空字串');
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-menu {
  width: 100%;
}

.todo-item__wrapper {
  padding-left: 0;
  &.show-tomatoes {
    .todo-item {
      .todo-label {
        margin-left: 30px;
        .desc {
          font-size: 36px;
        }
      }
      .checkmark {
        width: 50px;
        height: 50px;
        &::after {
          display: none !important;
        }
      }
      .tomatoes__wrapper {
        display: block;
        width: 100%;
        height: 20px;
        margin-left: 30px;
        margin-top: 5px;
        .tomatoes {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 100%;
          border: 1px solid #003164;
          background-color: #003164;
          &+.tomatoes {
            margin-left: 8px;
          }
          &.transparent {
            background-color: transparent;
          }
        }
      }
    }
    &::after {
      display: none;
    }
  }
  &.done {
    .desc {
      text-decoration: line-through;
      font-style: italic;
    }
  }
  label {
    width: 100%;
    .todo-label {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 0;
      .desc {
        flex: 1;
        text-indent: 10px;
        font-size: 20px;
      }
    }
  }
  .more {
    color: #FF4384;
    font-size: 16px;
    float: right;
    margin-top: 30px;
    cursor: pointer;
  }
}

.todo-item__wrapper:not(.show-tomatoes) {
  .todo-item {
    font-size: 16px;
    height: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #00000031;
    cursor: pointer;
    &+.todo-item {
      margin-top: 20px;
    }
  }
}
.tomatoes__wrapper {
  display: none;
  padding-left: 10px;
}

.icon {
  width: 24px;
  height: 24px;
  /deep/ .material-design-icon__svg {
    width: 100%;
    height: 100%;
  }
  &+.icon {
    margin-left: 6px;
  }
}
// custom checkbox
.todo-item {
  display: block;
  list-style: none;
  position: relative;
  padding-left: 35px;
  padding-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.todo-item .todo-item-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #003164;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.todo-item .todo-item-checkbox:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.todo-item .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #003164;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>


