<template>
  <div>
    <div class="container mt-5">
      <form @submit.prevent="handleSubmitForm">
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">กรอกหัวเรื่อง:</label>
          <input type="text" class="form-control" id="topics" v-model="todolist.title" placeholder="กรอกหัวเรื่อง" name="topics">
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">กรอกรายละเอียด:</label>
         <textarea class="form-control" rows="5" id="comment" v-model="todolist.detail" name="text"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">เพิ่มรายการที่ต้องทำ</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todolist: {
        title: "",
        detail:""
      },
    };
  },
  methods: {
    handleSubmitForm() {
        let apiURL = "http://localhost:3000/api/add_todolist";

        axios.post(apiURL, this.todolist).then(() => {
            // this.$router.push("/");
            this.todolist = {
                  title: "",
                  detail:"",
            };
            })
            .catch((error) => {
            console.log(error);
        });
          location.reload();
    },
  },
};
</script>

<style>
</style>

