<template>
    <div class="container-fluid">
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Users</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>E-mail</th>
                                <th>Street</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>E-mail</th>
                                <th>Street</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr v-for="user in users" :key="'user'+user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.address.street }}</td>
                                <td>
                                    <button type="button" class="btn btn-primary mx-3"><i class="far fa-eye"></i></button>
                                    <button type="button" class="btn btn-success mx-3"><i class="fas fa-edit"></i></button>
                                    <button type="button" class="btn btn-danger mx-3"><i class="far fa-trash-alt"></i></button>
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
    name: 'Users',
    data() {
        return {
            users: []
        };
    },

    methods: {
        async getData() {
            await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                for (let i = 0; i < 10; i++) {
                    this.users.push(response.data[i])
                }
            })
            .catch(error => {
                console.log(error);
            });
            console.log(this.users) 
        }
    },
    async created() {
        await this.getData();
    },
};
</script>
