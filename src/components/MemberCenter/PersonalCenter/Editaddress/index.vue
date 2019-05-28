<template>
  <!--t添加地址-->
  <div class="user-content">
    <h3>编辑收货地址</h3>
    <el-form ref="form" :model="sizeForm" :rules="rules" label-width="80px" size="mini">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="所在区域" required>
        <v-distpicker></v-distpicker>
      </el-form-item>
      <el-form-item label="邮编" prop="zipcode">
        <el-input v-model.number="sizeForm.zipcode"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="telphone">
        <el-input v-model="sizeForm.telphone"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="sizeForm.sex" placeholder="请选择">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="sizeForm.email"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <router-link :to="{name:'ReceivingAddress'}">
          <el-button type="danger" @click="onSubmit">保存地址</el-button>
        </router-link>
        <router-link :to="{name:'ReceivingAddress'}">
          <el-button type="info">取消</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import {isvalidPhone} from '../../validate.js'
var validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入电话号码'))
  } else if (!isvalidPhone(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
export default {
  components: { VDistpicker },
  data () {
    return {
      sizeForm: {
        name: '',
        zipcode: '',
        telphone: '',
        sex: '',
        email: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        zipcode: [{type: 'number', message: '邮编必须为数字'}],
        telphone: [{ required: true, trigger: 'blur', validator: validPhone }]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  mounted () {
  },
  computed: {
    userinfo: function () {
      return this.$store.state.userAddress.userAddress
    }
  }
}
</script>
<style lang="less" scoped>
  .user-content{
    /deep/
    .el-form{
      .el-form-item{
        .el-form-item__content{
          .el-input{
            width: 353px;
          }
        }
        .distpicker-address-wrapper{
          select{
            height: 28px;
            line-height: 28px;
            padding: 0 0.8em;
          }
        }
      }
      .el-form-item:nth-child(2),.el-form-item:nth-child(5){
        .el-form-item__content{
          .el-input{
            width: 125px;
          }
        }
      }
    }
  }
</style>
