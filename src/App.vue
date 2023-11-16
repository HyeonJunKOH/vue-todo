<template>
  <div id="app">
    <!-- 등록한 컴포넌트 화면에 뿌려주기 -->
    <TodoHeader></TodoHeader>
    <!-- v-on:'하위 컴포넌트에서 상위 컴포넌트로 보낸 이름' -->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
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
  components:{
    'TodoHeader': TodoHeader,
    // 키값과 밸류 값이 같을때 생략 가능
    TodoInput,
    TodoList,
    TodoFooter
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