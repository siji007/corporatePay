<template lang="">
    <div id="app">
        <div>
            <h1>Payment Categories</h1>

        </div>
        <div id=" " class="mt-3 py-4 categoryBo flex justify-between">
            <p class="ml-3">List of CorporatePay Payment Categories</p>
            <div id="containBox" class=" flex  justify-around  mr-3">
                <button class="btn btn-outline-dark mr-2">View</button>
                <button class="btn btn-outline-dark mr-2">Sort by</button>
                <button class="btn btn-info">Create Payment Category</button>
            </div>
        </div>

        <hr id="line">

        <div class="row mt-4">
                        
            <div class="col-lg-3 col-sm-3">
                <p class="">Category</p>
                <div class="flex justify-start mt-10">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
                <!-- <div class="flex">
                    <input class="mt-4 ml-4 " type="checkbox"/><p class="mt-4">Pensions</p>
                </div> -->
                <!-- <div class="flex">
                    <input class="mt-2 ml-4 " type="checkbox"/><p>Witholding Tax</p>
                </div>
                <div class="flex">
                    <input class="mt-2 ml-4 " type="checkbox"/><p>salary</p>
                </div> -->
            </div>
            <div class="col-lg-6 col-sm-6">
                <p>Description</p>
                <p class=" mt-10">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
                <p class="mt-4">A new salary given out to all staffs </p>
            </div>
            <div class="col-lg-3 col-sm-3">
                <p>Status</p>
                <div class="flex justify-between  mt-10">
                    <p>Active</p>
                    <button class="btn btn-success">op</button>
                </div>
                <div id="statusGroup" class="flex justify-between mt-2">
                    <p class="text-danger">Inactive</p>
                    <button class="btn btn-success">op</button>
                </div>
                <div id="statusGroup" class="flex justify-between mt-4">
                    <p>Active</p>
                    <button class="btn btn-success">op</button>
                </div>
                <div id="statusGroup" class="flex justify-between ">
                    <p class="text-danger">Inactive</p>
                    <button class="btn btn-success">op</button>
                </div>
                <div id="statusGroup" class="flex justify-between mt-2">
                    <p>Active</p>
                    <button class="btn btn-success">op</button>
                </div>
                <div id="statusGroup" class="flex justify-between">
                    <p class="text-danger">Inactive</p>
                    <button class="btn btn-success">op</button>
                </div>
                <div id="statusGroup" class="flex justify-between ">
                    <p>Active</p>
                    <button class="btn btn-success">op</button>
                </div>
                <div id="statusGroup" class="flex justify-between ">
                    <p class="text-danger">Inactive</p>
                    <button class="btn btn-success">op</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
#containBox{
    
}
.categoryBo{
    background-color:rgb(223, 218, 218)
}
#statusGroup{
    /* margin-top:12px; */
}
#line{
    position: absolute; 
    top:270px;
    left:0px;
    color: red;
    z-index: 11;
}
</style>