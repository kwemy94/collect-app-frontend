<template>
    <nav class="navbar navbar-expand-lg navbar-light " >
        <div class="container-fluid">
            <a class="navbar-brand " href="#">
                <img src="../assets/logo.png" alt="2S Kollect Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">A propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Zone Kollect</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" >E-kollect</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Zones collect
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Nsam</a></li>
                            <li><a class="dropdown-item" href="#">Mokolo</a></li>
                            <li><a class="dropdown-item" href="#">Tsinga</a></li>
                        </ul>
                    </li>
            </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    name: 'NavBar',
}

</script>


<style scoped>
.navbar{
    background-color: white;
}
</style>