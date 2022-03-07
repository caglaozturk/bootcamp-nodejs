<template>
    <div class="container-fluid">
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Comments</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr v-for="comment in comments" :key="'comment'+comment.id">
                                <td>{{ comment.id }}</td>
                                <td>{{ comment.name }}</td>
                                <td>{{ comment.email }}</td>
                                <td>{{ comment.body }}</td>
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
    name: 'Comments',
    data() {
        return {
            comments: []
        };
    },

    methods: {
        async getComments() {
            await axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                for (let i = 0; i < 8; i++) {
                    this.comments.push(response.data[i])
                }
            })
            .catch(error => {
                console.log(error);
            });
            console.log(this.comments) 
        },
        capitalizeFirstLetter(s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },
    async created() {
        await this.getComments();
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