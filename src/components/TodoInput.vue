<template>
  <div class="inputBox shadow">
    <!-- 할일 목록을 입력할 input 박스 및 추가 하기 위한 button 추가 -->
    <input type="text" v-model="newTodoItem" placeholder="할일을 추가해주세요."
        v-on:keyup.enter="addTodo">
    <!-- 버튼 대신 css 요소를 추가하기 위해 span 과 i 태그 이용 및 외부 라이브러리 활용 -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal=false">
        <h3 slot="header">경고</h3>
        <span slot="footer" @click="showModal = false">
            할 일을 입력해주세요.
            <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
        </span>
    </modal>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue'

export default {
    data(){
        return{
            // v-model 디렉티브와 데이터 속성 연결, 추가될 목록
            newTodoItem:'',
            showModal: false
        } 
    },
    methods:{
        // 버튼 이벤트에 대한 메소드 정의 및 input 박스에 입력될 값과 연결
        addTodo(){
            // newTodoItem이 공백이 아닐경우
            if(this.newTodoItem !==""){
                // addTodoItem 이란 이벤트명으로 상위 컴포넌트로 emit
                // this.$emit('addTodoItem', this.newTodoItem);
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            }else{
                // newTodoItem이 공백인 경우 모달 창 띄우기
                this.showModal = !this.showModal;
            }
        },
        // 할일 추가 후 텍스트 지우기
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components: {
        // 모달 컴포넌트 등록
        Modal: Modal
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
    .closeModalBtn {
        color: #42b983;
    }
</style>