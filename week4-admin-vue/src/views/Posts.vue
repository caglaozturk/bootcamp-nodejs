<template>
    <div class="container-fluid">
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Posts</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr v-for="post in posts" :key="'post'+post.id">
                                <td>{{ post.id }}</td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.body }}</td>
                                <td style="width: 200px; text-align:center">
                                    <button type="button" class="btn btn-primary mx-1"><i class="far fa-eye"></i></button>
                                    <button type="button" class="btn btn-success mx-1"><i class="fas fa-edit"></i></button>
                                    <button type="button" class="btn btn-danger mx-1"><i class="far fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Posts',
    data() {
        return {
            posts: []
        };
    },

    methods: {
        async getPosts() {
            await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                for (let i = 0; i < 8; i++) {
                    this.posts.push(response.data[i])
                }
            })
            .catch(error => {
                console.log(error);
            });
            console.log(this.posts) 
        },
        capitalizeFirstLetter(s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },
    async created() {
        await this.getPosts();
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