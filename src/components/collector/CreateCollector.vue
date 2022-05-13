<template >
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button> -->

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
                        <label for="name" class="col-form-label">Nom complet:</label>
                        <input type="text" class="form-control" id="name" v-model="name" required autofocus>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="col-form-label">Téléphone:</label>
                        <input type="text" class="form-control" id="phone" v-model="phone" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="col-form-label">Adresse email:</label>
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="example@domaine.com">
                    </div>
                    <div class="mb-3">
                        <label for="cni" class="col-form-label">Numéro de cni:</label>
                        <input type="text" class="form-control" id="cni" v-model="cni" placeholder="117509456" required>
                    </div>
                    <div class="mb-3">
                        <label for="delivranceDate" class="col-form-label">Date de délivrance:</label>
                        <input type="date" class="form-control" id="delivranceDate" v-model="date_of_issue" required>
                    </div>
                    <div class="mb-3">
                        <label for="deliveredIn" class="col-form-label">Lieu de délivrance:</label>
                        <input type="text" class="form-control" id="deliveredIn" v-model="delivered_in" required>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="collectorData()">Save  </button>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CreateCollector',
    data(){

    },

    methods: {
        collectorData(){
            axios.post('http://localhost:8000/api/collector',{
                name:this.name,
                phone: this.phone,
                email: this.email,
                cni: this.cni,
                date_of_issue: this.date_of_issue,
                delivered_in: this.delivered_in

            })
            .then(response =>{
                // console.log(response);
                alert(response.data[0]);
            })
            .catch(error =>{
                console.log(error);
            })
        }
    }
}

</script>