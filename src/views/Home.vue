<template>
<Navigation />
<br>
  <div>
    <div class="container">
        <h3>Home Page</h3>
        <div class="row">
            <div class="col-sm-3 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">            
                        <p class="card-text"><i class="bi bi-list-task"></i>Blog</p>
                        <p class="card-text">--</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 mb-3">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text"><i class="bi bi-person-check"></i>User</p>
                        <p class="card-text">--</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 mb-3">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text"><i class="bi bi-ticket-detailed"></i>Ticket Open</p>
                        <p class="card-text">--</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 mb-3">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text"><i class="bi bi-ticket-detailed-fill"></i>Ticket Closed</p>
                        <p class="card-text">--</p>
                    </div>
                </div>
            </div>
        </div>
        
        <router-link to="/">Logout</router-link>
        <br>
        <router-link to="/create">Create</router-link>
    </div>
  </div>
</template>

<script>

</script>

<style>
.bi {
    margin-right: 10px;
}
</style>