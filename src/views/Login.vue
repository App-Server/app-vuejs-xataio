<template>
<br><br><br><br><br>
  <div class="formlogin d-flex justify-content-center">
    <div class="card col-sm-4 mb-sm-0 border-light-subtle shadow-sm" style="padding: 40px">
      <div class="card-body ">
        <form action="#" method="POST" id="loginForm">
          <div class="row gy-3 gy-md-4 overflow-hidden d-flex justify-content-center" >
            <h3>Log in</h3>
            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
              <input type="email" class="form-control" name="email" id="email"  >
              <div class="invalid-feedback">
                Please provide a email.
              </div>
            </div>
            <div class="col-12">
              <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
              <input type="password" class="form-control" name="password" id="password"  >
              <div class="invalid-feedback">
                Please provide a password.
              </div>
            </div>
            <div class="col-12">
              <div class="d-grid">
                <button class="btn bsb-btn-xl btn-primary" type="submit">Log in now</button>
              </div>
            </div>
          </div>
        </form>
        <router-link to="/home">Entrar</router-link>
      </div>
    </div>
  </div>
</template>



<style>
body {
    background-color: #f0f6fc;
}
</style>