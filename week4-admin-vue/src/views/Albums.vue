<template>
    <div class="container-fluid">
        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Albums</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr v-for="album in albums" :key="'album'+album.id">
                                <td>{{ album.id }}</td>
                                <td>{{ album.title }}</td>
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
    name: 'Albums',
    data() {
        return {
            albums: []
        };
    },

    methods: {
        async getAlbums() {
            await axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then(response => {
                for (let i = 0; i < 5; i++) {
                    this.albums.push(response.data[i])
                }
            })
            .catch(error => {
                console.log(error);
            });
            console.log(this.albums) 
        },
        capitalizeFirstLetter(s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },
    async created() {
        await this.getAlbums();
    },
};
</script>
