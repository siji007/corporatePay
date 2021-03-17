<template lang="">
    <div id="app">
        <div>
            <h1>Payment Categories</h1>
        </div>
        <div id=" " class="mt-3 py-4 categoryBo flex ">
            <p class="ml-3">List of CorporatePay Payment Categories</p>
            <div id="containBox" class=" flex ml-auto lastLine mr-3">
                <button id="view" class="btn btn-outline-dark mr-2">View</button>
                <button id="sortBy" class="btn btn-outline-dark mr-2">Sort by</button>
                <button id="createPayment" class="btn btn-info hover:bg-indigo-dark focus:outline-none" @click="toggleModal = !toggleModal">Create Payment Category</button> 
            </div>
        </div>

        <div id="modalShow" style="" class=" d-block mr-auto ml-auto inset-0 flex justify-center items-center " v-if="toggleModal">
            <div  class=" mx-auto w-auto max-w-2xl p-4 bg-danger">
                <div class=" w-full rounded shadow-2xl">
                    <h5>Add Payment Category</h5>
                    <p>Please fill in the following details below</p>

                    <div style="width:450px;" class="d-block mr-auto ml-auto w-full">
                        <form>
                            <div class="form group">
                                <label class="mt-4">Category</label>
                                <br>
                                <select class="bg-transparent rounded w-50 border border-grey-success p-2 :focus:outline-none">
                                    <option>
                                        Lorem ipsium
                                    </option>
                                    <option>
                                        Lorem ipsium
                                    </option>
                                    <option>
                                        Lorem ipsium
                                    </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="mt-4">Description</label>
                                <br>
                                <textarea class="bg-transparent rounded border border-gray w-100" rows="10" col="2"></textarea>
                            </div>
                            <button class="btn btn-info w-full" data-dismiss="modal">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="toggleModal" class="absolute inset-0 z-40 opacity-25 bg-success"></div>

        <!--MODAL-->
        <!-- <div class="modal" id="paymentModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">'
                        <h5 class="modal-title" id="paymentModalLabel">Add Payment Category</h5>
                        <div class="modal-body">
                            <form>
                                <div class="form group">
                                    <label>Category</label>
                                    <select>
                                        <option>
                                            Lorem ipsium
                                        </option>
                                        <option>
                                            Lorem ipsium
                                        </option>
                                        <option>
                                            Lorem ipsium
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea rows="20" col="12"></textarea>
                                </div>
                                <button class="btn btn-info" data-dismiss="modal">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

       

        <div class="row mt-4">
            <div class="col-lg-3 col-md-3 col-sm-3 ">
                <p class="text-grey-dark">Category</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
                <p class="text-grey-dark">Description</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
                <p class="text-grey-dark">Status</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="flex justify-start mt-4">
                    <input class="mt-2" type="checkbox"/><p class="ml-4">Salary</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-4 col-sm-6">
                <p class="">A new salary given out to all staffs </p>
            </div>
            <div id="statusGroup" class="flex flex-nowrap mt-4 ">
                <p class="text-danger">Inactive</p>
                <button class="btn btn-success  ">op</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="flex justify-start mt-4">
                    <input class="mt-2" type="checkbox"/><p class="ml-4">Salary</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-4 col-sm-6">
                <p class="">A new salary given out to all staffs </p>
            </div>
            <div id="statusGroup" class="flex flex-nowrap mt-4">
                <p class="text-danger">Inactive</p>
                <button class="btn btn-success">op</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-4 col-sm-6">
                <p class="">A new salary given out to all staffs </p>
            </div>

            <div id="statusGroup" class="flex justify-around mt-4">
                <p class="text-danger">Inactive</p>
                <button class="btn btn-success">op</button>
            </div>

        </div>

        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-4 col-sm-6">
                <p class="">A new salary given out to all staffs </p>
            </div>
            <div id="statusGroup" class="flex justify-between mt-4">
                <p class="text-danger">Inactive</p>
                <button class="btn btn-success">op</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-4 col-sm-6">
                <p class="">A new salary given out to all staffs </p>
            </div>
            <div id="statusGroup" class="flex justify-between mt-4">
                <p class="text-danger">Inactive</p>
                <button class="btn btn-success">op</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-4 col-sm-6">
                <p class="">A new salary given out to all staffs </p>
            </div>
            <div id="statusGroup" class="flex justify-between mt-4">
                <p class="text-danger">Inactive</p>
                <button class="btn btn-success">op</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
                <div class="flex justify-start mt-4">
                    <input class="mt-2  " type="checkbox"/><p class="ml-4">Salary</p>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-4 col-sm-6">
                <p class="">A new salary given out to all staffs </p>
            </div>
            <div id="statusGroup" class="flex justify-between mt-4">
                <p class="text-danger">Inactive</p>
                <button class="btn btn-success">op</button>
            </div>
        </div>

        <hr>
        <div class="flex justify-center mb-12">
            <div class="flex-initial p-2">
                <p>Previous</p>
            </div>
            <div class="flex-initial p-2">
                <button class=":focus:border-danger">1</button>
            </div>
            <div class="flex-initial  p-2">
                <p>2</p>
            </div>
            <div class="flex-initial  p-2">
                <p>3</p>
            </div>
            <div class="flex-initial  p-2">
                <p>4</p>
            </div>
            <div class="flex-initial  p-2">
                <p>5</p>
            </div>
            <div class="flex-initial  p-2">
                <p>Next</p>
            </div>
        </div>
        <hr class="" id="lastLine">



    </div>
</template>
<script>
export default {
data(){
    return{
        toggleModal:false
    };
}
}
</script>
<style scoped>
#containBox{
    
}
.categoryBo{
    background-color:rgb(223, 218, 218)
}
#statusGroup{
    /* margin-top:12px; */
}
#view{

}
#line{
    position: absolute; 
    top:270px;
    left:0px;
    color: red;
    z-index: 11;
}
#lastLine{
    margin-top:-54px;
    background-color: rgb(193, 183, 183);
    height: 1px;
    width: 260px;
}
#modalShow{
    position: absolute;
    z-index:1;
    top:60%;
    left:50%;
    /* margin-left: auto;
    margin-right: auto; */
    transform: translate(-50%, -50%);
}
@media(max-width:991px) {
    #view{
        width: 50px;
        padding: 2px;
    }
    #sortBy{
        width: 40px;
        padding: 2px;
    }
    #createPayment{
        width: 90px;
        padding: 2px;
    }
  
}
</style>