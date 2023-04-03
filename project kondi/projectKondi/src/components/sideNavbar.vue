<template>
        <div class="sideBar">
            <div class="d-flex flex-column align-items-start align-items-sm-start px-2 pt-2 text-white">
                <div class="d-flex align-items-start pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <router-link to="/menu">
                     
                    <!-- <span class=" d-none d-sm-inline text-white px-0 nav-link"><h4>Menu</h4></span> -->
                </router-link>
            </div> 
               <div class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0" @click="navigate()"> 
                           </a>
                        </li>
                        </div>
                        <div class="items">
                            <Thewelcome/>
                        <router-link to="/interpolation" class="nav-link px-0 align-middle"> 
                            <button class="btn btn-light text-dark mt-4 ms-1 d-none d-sm-inline text-light">INTERPOLATION</button>
                         </router-link>
                         <div class="mt-4 text-light">
                      
                         </div>
                         <router-link to ="/EventBinding" class="nav-link px-0 align-middle">
                            <button class="btn btn-light text-dark mt-4 ms-1 d-none d-sm-inline text-light">EVENTS</button>
                        </router-link>
                        <router-link to="DataBinding" class="nav-link px-0 align-middle">
                            <button class="btn btn-light text-dark mt-4 ms-1 d-none d-sm-inline text-light">DATA BINDING</button>
                        </router-link>
                           <router-link to="/TwoWayDataBinding" class="nav-link px-0 align-middle">

                            <button class="btn btn-light text-dark mt-4 ms-1 d-none d-sm-inline text-light">TWO WAY DATA BINDING</button>
                        </router-link>
                            <router-link to="/ComponentIntraction" class="nav-link px-0 align-middle">
                                <button class="btn btn-light text-dark mt-4 ms-1 d-none d-sm-inline text-light">COMPONENT INTRACTION</button>
                            </router-link>
                         </div>
<!--       
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                   
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                    
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>

                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </ul>
                 -->
                <hr>
               </div>
               </div>

</template>

<script lang="ts" setup>
import Thewelcome from "./TheWelcome.vue"


// import { useRouter } from 'vue-router';
// const router = useRouter()
// function navigate(){
//    router.push('/about')
// }
</script>

 <style>
.sideBar{
    height: 99.5vh;

    background-color: rgb(131, 4, 4);
    background-size: cover;

}

.item{
   padding: 5px;
}
</style>