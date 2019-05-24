<template>
  <!--改变密码-->
  <div class="user-content">
      <h3>更改密码</h3>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="原始密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="修改密码" prop="alterpass">
              <el-input type="password" v-model="ruleForm.alterpass" auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" clearable></el-input>
          </el-form-item>
    </el-form>
    <el-button type="danger" @click="changePassword('ruleForm')">确认 </el-button>
    <router-link :to="{name:'PersonalData'}"><el-button type="info">返回</el-button></router-link>
</div>
</template>
<script>
import {changepwd} from 'Api/request_cg.js'
import md5 from 'js-md5'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原始密码'))
      } else {
        if (this.ruleForm.alterpass !== '') {
          this.$refs.ruleForm.validateField('alterpass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value === this.ruleForm.pass) {
        callback(new Error('两次输入密码一致!'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.alterpass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        alterpass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        alterpass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass3, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    changePassword: function (refForm) {
      this.$refs[refForm].validate((valid) => {
        if (valid) {
          changepwd({
            userid: window.localStorage.getItem('token'),
            originalPwd: md5(this.ruleForm.pass),
            newPwd: md5(this.ruleForm.alterpass)
          }, (res) => {
            if (res.success) {
              this.$message({
                message: '修改密码成功',
                type: 'success'
              })
              setTimeout(function () {
                this.$router.push('/memberCenter/personalCenter/personalData')
              }, 2000)
            } else {
              this.$message.error('修改密码失败')
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .user-content{
      .el-form{
        margin: auto;
        width: 400px;
      }
      .el-button{
          width: 100px;
          /deep/span{
            color: @white;
          }
      }
      .el-button.el-button--danger{
          margin-left: 310px;
      }
      .el-button.el-button--info{
          margin-left: 100px;
      }
  }
</style>
