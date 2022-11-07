<template>
    <div>
        <div class="container mt-5">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>หัวเรื่อง</th>
                        <th>รายละเอียด</th>
                        <th>ดำเนินการ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(test, index) in Test" :key="test._id">
                        <td> {{ index + 1 }}</td>
                        <td> {{ test.title }}</td>
                        <td> {{ test.detail }}</td>
                        <td>
                            <button type="button"  data-bs-toggle="modal" 
                            data-bs-target="#exampleModal"  @click.prevent="open_modal_edit__todolist(test._id, test.title, test.detail)"  class="btn btn-warning"
                            >แก้ไข</button>
                            <button type="button" @click.prevent="add_delete_todolist(test._id)"
                                class="btn btn-danger">ลบ</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



<!-- //สร้าง @click ส่งค่าไป แล้วเอาไปยัด form -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-danger" id="exampleModalLabel">แก้ไข Todolist </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">หัวเรื่อง</label>
             <input type="hidden" class="form-control" id="exampleInputEmail1"  v-model="data_param.title" aria-describedby="emailHelp">
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="data_param.title" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">รายละเอียด</label>
            <textarea class="form-control" rows="5" id="comment" v-model="data_param.detail" name="text"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" @click="edit_todolist()" data-bs-dismiss="modal">บันทึก</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            Todolists: [],
            Test:[],
            modalShow : null,
            data_param:{
                title : null,
                detail : null,
                id_ : null
            },
         
        }
    },
    created() {
        let apiURL = "http://localhost:3000/api";
        axios.get(apiURL).then(res => {
            // this.$router.push("/");
            this.Todolists = res.data;
            this.Test = res.data;
        })
            .catch((error) => {
                console.log(error);
            });
    },
     components: {
      
    },
    methods: {
        delete_todolist(id) {
            let apiURL = 'http://localhost:3000/api/delete_todolist/${id}';
            let index_array = this.Todolists.findIndex(i => i._id === id);

            if (window.confirm("คุณต้องการลบรายการที่ต้องทำหรือไม่ ? ")) {
                axios.delete(apiURL).then(() => {
                    this.Todolists.splice(index_array, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        },
            add_delete_todolist(id) {
             let apiURL = 'http://localhost:3000/api/delete_todolist/'+id;
             let index_array = this.Test.findIndex(i => i._id === id);

            if (window.confirm("คุณต้องการลบรายการที่ต้องทำหรือไม่ ? ")) {
                axios.delete(apiURL).then(() => {
                    this.Test.splice(index_array, 1)
                }).catch(error => {
                    console.log(error)
                })
                console.log(apiURL + '  ' + id)
            }
        },

        open_modal_edit__todolist(id, title, detail){
             this.data_param.title = title;
             this.data_param.detail = detail;
             this.data_param.id = id;
        },
        edit_todolist(){
           let id = this.data_param.id
            let apiURL = 'http://localhost:3000/api/update_todolist/'+id;
          

            if (window.confirm("คุณต้องการแก้ไขรายการที่ต้องทำหรือไม่ ? ")) {
                axios.put(apiURL, this.data_param).then((res) => {
                     console.log(res)
                }).catch(error => {
                    console.log(error)
                })
                console.log(apiURL + '  ' + id)
                location.reload();
            }
        }

       
    },
}

</script>

<style>
</style>

