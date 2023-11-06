<template>
  <div class="inputBox shadow">
    <!-- 할일 목록을 입력할 input 박스 및 추가 하기 위한 button 추가 -->
    <input type="text" v-model="newTodoItem" placeholder="할일을 추가해주세요."
        v-on:keyup.enter="addTodo">
    <!-- 버튼 대신 css 요소를 추가하기 위해 span 과 i 태그 이용 및 외부 라이브러리 활용 -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // v-model 디렉티브와 데이터 속성 연결
            newTodoItem:''
        }
    },
    methods:{
        // 버튼 이벤트에 대한 메소드 정의 및 input 박스에 입력될 값과 연결
        addTodo(){
            // newTodoItem이 공백이 아닐경우
            if(this.newTodoItem !==""){
                // 로컬스토리지에 저장
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                // 저장 후 input 박스에 있는 내용은 지운다.
                this.clearInput();
            }
        },
        // input 박스에 있는 내용을 지운다.
        clearInput(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>