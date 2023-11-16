<template>
  <section>
    <!-- 뷰 자체적으로 제공하는 애니메이션 효과를 사용하기 위한 transition-group 태그 -->
    <transition-group name="list" tag="ul">
        <!-- todoItems의 개수만큼 반복해서 li태그를 출력  -->
        <li v-for="(todoItem,index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
            <!-- v-for의 경우 자체적으로 list에 있는 index를 인식하는 기능이 내장되어있다. -->
            <i class="checkBtn fa fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                @click="toggleComplete({todoItem, index})"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <!-- 삭제버튼 -->
            <span class="removeBtn" type="button" @click="removeTodo({todoItem, index})">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </span>
        </li>
    </transition-group>
  </section>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        })
    },
    computed: {
        // todoItems(){
        //     return this.$store.getters.storedTodoItems;
        // }
        ...mapGetters(['storedTodoItems'])
    }
}
</script>

<style scoped>
    .list-move{
        transition: transform 1s;
    }
    .list-enter-active, .list-leave-active{
        transition: all 1s;
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color : #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>