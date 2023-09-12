<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>APP CRUD</title>
    <link href="<?php echo e(asset('/')); ?>assets/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
  <body>
    
    
    <nav class="navbar navbar-expand-lg bg-success navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Student Registration</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="<?php echo e(url('students')); ?>">Students</a>
              </li>
    
            </ul>
          </div>
        </div>
      </nav>
    

    
    <div class="mt-2">
        <div class="container">
            <div class="card">
                <div class="card-header">
                    Welcome
                </div>
                <div class="card-body">
                  <div class="alert alert-info"> Selamat datang di Web Registrasi Siswa</div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <h3>Data Siswa</h3>
        <div class="card">
            <div class="card-header">
                <button type="button" class="btn btn-sm btn-primary">
                    <i class="fa-solid fa-plus">Add new data</i>
                </button>
            </div>
            <div class="card-body">
              <table class="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ID Students</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                   <?php $__currentLoopData = $students; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?> 
                    <tr>
                        <th>
                          <?php echo e($loop-> iteration); ?>  
                        </th>
                    </tr>
                   <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </tbody>
              </table>
            </div>
        </div>
    </div>

    

    <script src="<?php echo e(asset('/')); ?>assets/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html><?php /**PATH C:\Users\ASUS\OneDrive - Politeknik Negeri Bandung\Documents\KULIAH\SEM 5\Pengembangan Web\EksplorasiLaravel\appCrud\resources\views/layout/main.blade.php ENDPATH**/ ?>