<template>
  <!--t添加地址-->
  <div class="user-content">
      <h3>添加地址</h3>
      <el-form ref="sizeForm" :model="sizeForm" :rules="rules" label-width="80px" size="mini">
          <el-form-item label="姓名" prop="addrName">
              <el-input v-model="sizeForm.addrName"></el-input>
          </el-form-item>
          <el-form-item label="所在区域" required>
              <v-distpicker @selected="onSelected"></v-distpicker>
          </el-form-item>
          <el-form-item label="邮编" prop="addrPostcode">
             <el-input v-model.number="sizeForm.addrPostcode"></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="addrPhone">
            <el-input v-model="sizeForm.addrPhone"></el-input>
          </el-form-item>
          <el-form-item size="large">
              <el-button type="danger" @click="onSubmit('sizeForm')">保存地址</el-button>
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
import {addAddress} from 'Api/request_cg.js'
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
        addrName: '',
        addrAddress: '',
        addrPhone: '',
        addrPostcode: '',
        email: ''
      },
      rules: {
        addrName: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 2, max: 4, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        addrPostcode: [{type: 'number', message: '邮编必须为数字'}],
        addrPhone: [{ required: true, trigger: 'blur', validator: validPhone }]
      }
    }
  },
  methods: {
    onSelected: function (data) {
      this.sizeForm.addrAddress = data.province.value + data.city.value + data.area.value
    },
    onSubmit: function (sizeForm) {
      this.$refs[sizeForm].validate((valid) => {
        console.log(this.sizeForm)
        if (valid) {
          addAddress({
            userId: window.localStorage.getItem('token'),
            addrName: this.sizeForm.addrName,
            addrPhone: this.sizeForm.addrPhone,
            addrAddress: this.sizeForm.addrAddress,
            addrPostcode: this.sizeForm.addrPostcode
          }, (res) => {
            console.log(res)
            this.$router.push('/memberCenter/personalCenter/receivingAddress')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
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
