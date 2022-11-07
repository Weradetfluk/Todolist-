<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <div class="navbar-brand float-left"> Todolist </div>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <a class="nav-link" href="#">ผู้จัดทำ</a>
          </li>
        </ul>
      </div>
    </nav>

    <Todolist_form></Todolist_form>
    <table_todolist></table_todolist>


  </div>


</template>

<script>
import Todolist_form from './components/add_toddolist.vue'
import table_todolist from './components/table_todolist.vue'

export default {
  name: 'App',
    components:{
      Todolist_form,
      table_todolist
  },
  data() {

    return {
      firstname: "Weradet",
      lastname: "Nopsombun"
    }
  },
  methods: {
    set_form() {
      alert("Test");
    },
  },
}
</script>

<style>
</style>

