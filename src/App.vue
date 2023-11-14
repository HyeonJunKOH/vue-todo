<template>
  <div id="app">
    <!-- 등록한 컴포넌트 화면에 뿌려주기 -->
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo" 
      @toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// 컴포넌트 불러오기
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// 불러온 컴포넌트 등록
export default {
  data(){
    return {
      todoItems: []
    }
  },
  // 인스턴스 생성에 있어, 가장 먼저 호출 되는 함수
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  methods: {
    // 로컬 스토리지에 데이터를 추가하는 로직
    addOneItem(todoItem){
      // todoItem 은 TodoInput 컴포넌트에서 올라온 이벤트 발생을 받은 인자
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    clearAll(){
      localStorage.clear();
      this.todoItems= [];
    },
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
     toggleOneItem(todoItem, index) {
      this.todoItems[index].completed =!this.todoItems[index].completed;
      // 로컬스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  components:{
    'TodoHeader': TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body{
        text-align: center;
        background-color: #F6F6F8;
    }
    input{
        border-style: groove;
        width: 200px;
    }
    button{
        border-style: groove;
    }
    .shadow{
        box-shadow: 5px 10px 10px rgba(0,0,0,0.3);
    }
</style>