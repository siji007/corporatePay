<template>
    <div>
        <h1>Manage</h1>
        <div class="row  mt-4">
            <div id="superCorporate" class="col-lg-3 col-sm-12 col-md-12">
                <!-- <div class="circle"></div> -->
                <div class=" max-w-sm rounded overflow-hidden border border-gray-300 shadow-lg">
                <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
                <div class="circle mt-10 mr-auto ml-auto"></div>
                <div class="px-2 py-2 d-flex justify-content-center mt-10 bg-grey">
                    <!-- <div class="font-bold  mb-2 text-3xl"></div> -->
                    <p class="text-gray-700 text-base mr-2 mb-2 mt-3">
                        Super Corporate
                    </p>
                    <button class="btn btn-dark rounded-full mb-2 mt-2">></button>
                    <h1></h1>
                </div>
                
                </div>
            </div>

            <div id="users" class="col-lg-3 col-sm-12 col-md-12 ">
                <!-- <div class="circle"></div> -->
                <div class=" max-w-sm rounded overflow-hidden border border-gray-300 shadow-lg">
                <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
                <div class="circle mt-10 mr-auto ml-auto"></div>
                    <div class="px-2 py-2 d-flex justify-content-center mt-10 bg-grey">
                        <!-- <div class="font-bold  mb-2 text-3xl"></div> -->
                        <p class="text-gray-700 text-base mr-2 mt-3 mb-2">
                            Users
                        </p>
                        <button class="btn btn-dark rounded-full mb-2 mt-2">></button>
                        <h1></h1>
                    </div>
                </div>
            </div>

            <div id="paymentCategories" class="col-lg-3">
                <div class=" max-w-sm rounded overflow-hidden border border-gray-300 shadow-lg">
                <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
                <div class="circle mt-10 mr-auto ml-auto"></div>
                    <div class="px-2 py-2 d-flex justify-content-center  mt-10 bg-grey">
                        <!-- <div class="font-bold  mb-2 text-3xl"></div> -->
                        <p class="text-gray-700 text-base mr-2 mt-3 mb-2">
                            Payment Categories
                        </p>
                        <router-link to="/payment_categories" tag="button"><button class="btn btn-dark rounded-full mb-2 mt-2">></button></router-link>
                        <h1></h1>
                    </div>
                </div>
            </div>
            <div id="Fees" class="col-lg-3">
                <div class=" max-w-sm rounded overflow-hidden border border-gray-300 shadow-lg">
                <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
                <div class="circle mt-10 mr-auto ml-auto"></div>
                    <div class="px-2 py-2 d-flex justify-content-center  mt-10 bg-grey">
                        <!-- <div class="font-bold  mb-2 text-3xl"></div> -->
                        <p class="text-gray-700 text-base mr-2 mt-3 mb-2">
                            Fees
                        </p>
                        <button class="btn btn-dark rounded-full mb-2 mt-2">></button>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4 mb-4">
            <div id="signature" class="col-lg-3 col-sm-12 col-md-12">
                <div class=" max-w-sm rounded overflow-hidden border border-gray-300 shadow-lg">
                <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
                <div class="circle mt-10 mr-auto ml-auto"></div>
                <div class="px-2 py-2 d-flex justify-content-center mt-10 bg-grey">
                    <!-- <div class="font-bold  mb-2 text-3xl"></div> -->
                    <p class="text-gray-700 text-base mr-2 mt-3 mb-2">
                        Signatories
                    </p>
                    <button class="btn btn-dark rounded-full mb-2 mt-2">></button>
                    <h1></h1>
                </div>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}   
</script>
<style scoped>
#superCorporate{
    
}
#users{
    
}
#paymentCategories{
    
}
#Fees{
    
}
.circle{
    width: 120px;
    height: 120px;
    background-color: rgb(74, 72, 72);
    border-radius: 50%;
}
button:focus{
    outline: 0;
}
@media(max-width:991px) {
    #users{
        margin-top: 30px;
    }
    #paymentCategories{
        margin-top: 30px;
    }
    #Fees{
        margin-top: 30px;
        margin-bottom: 40px;
    }
  
}
</style>