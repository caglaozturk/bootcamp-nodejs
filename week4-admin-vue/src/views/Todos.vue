<template>
    <div class="container-fluid">
        <input type="text" class="form-control my-3" placeholder="Search Todo" v-model="search">
        <div class="row" v-for="item in filteredList" :key="item.id">
            <div class="col-md-11" v-on:click="showAlert(item.id)">
            <div v-if="item.completed">
                <div class="alert alert-success" role="alert">
                {{ item.title}}
                </div>
            </div>
            <div v-if="!item.completed">
                <div class="alert alert-danger" role="alert">
                {{ item.title}}
                </div>
            </div>
            </div>
            <div class="col-md-1">
            <button class="btn btn-danger" v-on:click="removeTodo(item.id)">Sil</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Todos',
    data() {
        return {
            todos: [],
            search : ""
        };
    },
    computed: {
        filteredList() {
            return this.todos.filter(todo => todo.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    methods: {
        async getTodos() {
            await axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(response => this.todos = response.data)
            .catch(error => {
                console.log(error);
            });
            console.log(this.todos) 
        },
        showAlert(id){
            var item = this.todos.find(x=>x.id == id);
            item.completed = !item.completed;
        },
        removeTodo(id){
            var filtered = this.todos.filter(x=>x.id != id);
            this.todos = filtered;
            console.log(this.todos);
        }
    },
    async created() {
        await this.getTodos();
    },
};
</script>

<style scoped>
.container {
  padding: 2rem 0rem;
}

h4 {
  margin: 2rem 0rem 1rem;
}

.table-image .td{
    vertical-align: middle;
}

.table-image .th{
    vertical-align: middle;
}
</style>