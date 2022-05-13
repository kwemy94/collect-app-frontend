<template>

    <h2>Liste des collecteurs</h2>
    
    <input type="text" id="myInput"  placeholder="Search .." v-model="searchTrem">
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="collector in filtersearch" :key="collector.id">
                <th scope="row">2</th>
                <td>{{collector.name}}</td>
                <td>{{collector.phone}}</td>
                <td>{{collector.email}}</td>
            </tr>
        </tbody>
    </table>
</template>


<script>
import axios from 'axios'
export default {
    name: 'IndexCollector',
    data(){
        return {
            collectors: [],
            searchTrem: ''
        }
    },

    computed: {
        filtersearch(){
        return this.collectors.filter(collector =>{
            return collector.name.match(this.searchTrem)
        })
    }
    },
    methods: {

    },
    created(){
        axios.get('http://localhost:8000/api/collector')
        .then(response =>{
            this.collectors = response.data
            // console.log(this.collectors);

        })
        .catch(error =>{
            console.log(error);
        })
    }
}
</script>

<style>

</style>