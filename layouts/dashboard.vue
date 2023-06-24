<template>
  <div>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->

        <!-- SidebarSearch Form -->

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item">
              <NuxtLink to="/Admin/Header" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Header</p>
              </NuxtLink>
            </li>
            <!-- <li class="nav-item">
              <NuxtLink to="/Admin/Footer" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Footer</p>
              </NuxtLink>
            </li> -->
            <li class="nav-item">
              <NuxtLink to="/Admin" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Banner</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/ImageSlider" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Image Slider</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/AboutUs" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>About Us</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/Videos" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Videos</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/Blogs" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Blogs</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/JoinUs" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Join Us</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/Cards" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Cards</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/Featured" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Featured</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/Admin/ContactUs" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Contact us</p>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
    <div class="content-wrapper">
      <slot> </slot>
    </div>
  </div>
</template>
