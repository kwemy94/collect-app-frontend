<template>
    <h2 @click="editCollector()">Edit collector  📝</h2>
    <div class="container">
        <div class="container-fluid">
            <div class="card border-info mb-6" style="max-width: 30rem;">
                <div class="card-header">Modifier les information du collecteur</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Nom </td>
                                    <td> {{dataResult.name}} </td>
                                </tr>
                                <tr>
                                    <td>Téléphone</td>
                                    <td>{{dataResult.phone}}</td>
                                </tr>
                                <tr>
                                    <td>Adresse email</td>
                                    <td>{{dataResult.email}}</td>
                                </tr>
                                <tr>
                                    <td>Numéro de CNI</td>
                                    <td>{{dataResult.cni}}</td>
                                </tr>
                                <tr>
                                    <td>Date de délivrance</td>
                                    <td>{{dataResult.date_of_issue}}</td>
                                </tr>
                                <tr>
                                    <td>Lieu de délivrance</td>
                                    <td>{{dataResult.delivered_in}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 <div class="card-footer bg-transparent border-info" ><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Modifier</button></div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New Collector</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="name" class="col-form-label">Nom complete:</label>
                        <input type="text" class="form-control"  id="name" v-model="dataResult.name" required autofocus>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="col-form-label">Téléphone:</label>
                        <input type="text" class="form-control" id="phone" v-model="dataResult.phone" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="col-form-label">Adresse email:</label>
                        <input type="email" class="form-control" id="email" v-model="dataResult.email" placeholder="example@domaine.com">
                    </div>
                    <div class="mb-3">
                        <label for="cni" class="col-form-label">Numéro de cni:</label>
                        <input type="text" class="form-control" id="cni" v-model="dataResult.cni" placeholder="117509456" required>
                    </div>
                    <div class="mb-3">
                        <label for="delivranceDate" class="col-form-label">Date de délivrance:</label>
                        <input type="date" class="form-control" id="delivranceDate" v-model="dataResult.date_of_issue" required>
                    </div>
                    <div class="mb-3">
                        <label for="deliveredIn" class="col-form-label">Lieu de délivrance:</label>
                        <input type="text" class="form-control" id="deliveredIn" v-model="dataResult.delivered_in" required>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="updateCollectorData()"> Update ❤</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EditCollector',

    data () {
        return {
            collector_id : this.$route.params.id,
            dataResult: []
        }
    },

    methods: {
        updateCollectorData(){
            // console.log(this.dataResult.name);

            // axios.put('http://localhost:8000/api/collector/'+this.dataResult.id, {
            //     name: this.dataResult.name,
            //     phone: this.dataResult.phone,
            //     email: this.dataResult.email,
            //     cni: this.dataResult.cni,
            //     date_of_issue: this.dataResult.date_of_issue,
            //     delivered_in: this.dataResult.delivered_in
                
            // })
            // .then(res =>{
            //     alert(res.data);
            // })
            // .catch(error =>{console.log(error);})
        }
    },

    created(){
        axios.get('http://localhost:8000/api/collector/'+this.collector_id)
            .then(res=>{
                this.dataResult = res.data;
                console.log(this.dataResult);
            })
            .catch()
    },
    
    updated(){
        axios.put('http://localhost:8000/api/collector/'+this.dataResult.id, {
                name: this.dataResult.name,
                phone: this.dataResult.phone,
                email: this.dataResult.email,
                cni: this.dataResult.cni,
                date_of_issue: this.dataResult.date_of_issue,
                delivered_in: this.dataResult.delivered_in
                
            })
            .then(res =>{
                alert(res.data);
            })
            .catch(error =>{console.log(error);})
    }
}
</script>

<style>

</style>