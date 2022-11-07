<template>
    <div>
      
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  User Login
</button>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary">
close
</button>


<!-- Modal -->
<div class="modal fade" v-if="OpenClose"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-danger" id="exampleModalLabel">Login Form</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
          <button type="button"  @click="OpenCloseFun()" :class="'btn btn-'+variant" >{{$t('Close')}}</button>
      </div>
    </div>
  </div>
</div>





    </div>
</template>



<script>
export default {
  name: 'AlertDefault',
  props: {
    visible: Boolean,
    variant:String,
  },
  data(){
    return{
       OpenClose:this.visible
    }
  },
  methods:{
        OpenCloseFun(){
           this.OpenClose =false;
        },
  },
  watch: { 
      visible: function(newVal, oldVal) { // watch it
        this.OpenClose =newVal;
        console.log('new' +newVal+ '==' +oldVal)
      }
    }

}
</script>

<style>
</style>

