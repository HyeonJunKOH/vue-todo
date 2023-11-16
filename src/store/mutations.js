// 로컬 스토리지에 할일 추가하는 로직
const addOneItem = (state, todoItem) => {
    // todoItem 은 TodoInput 컴포넌트에서 올라온 이벤트 발생을 받은 인자
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // 로컬스토리지의 데이터를 갱신
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

export { addOneItem, clearAllItems, removeOneItem, toggleOneItem}