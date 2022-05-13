<template>

    <h2>Liste des collecteurs</h2>
    <div>
        <input type="text" id="myInput"  placeholder="Search .." v-model="searchTrem">
        <button class="btn btn-success full-right"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Collector</button>
    </div>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th class="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(collector, index) in filtersearch" :key="collector.id">
                <th scope="row"> {{index+1}} </th>
                <td>{{collector.name}}</td>
                <td>{{collector.phone}}</td>
                <td>{{collector.email}}</td>
                <td>
                    <router-link :to="'/edit-collector/'+collector.id" class="pencil"><i class="fa fa-pencil"></i></router-link> | 
                    <router-link to="" class="trash"><i class="fa fa-trash"></i></router-link>
                </td>
            </tr>
        </tbody>
    </table>


    <!-- create collector -->
    <CreateCollector/>

    <!-- <router-view></router-view> -->
</template>


<script>
import axios from 'axios'
import CreateCollector from './CreateCollector.vue'
export default {
    name: 'DataCollector',
    props:{
        resultat: String
    },
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
    
    created(){
        axios.get('http://localhost:8000/api/collector')
        .then(response =>{
            this.collectors = response.data
            // console.log(this.collectors);

        })
        .catch(error =>{
            console.log(error);
        })
    },

    components:{
        CreateCollector
    }
}
</script>

<style>
    .pencil {
        color:rgb(90, 180, 233);
    }
    .trash {
        color: red;
    }
</style>