<template>
    <div>
        <el-form class="register" :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="手机号:" prop="user_phone">
                <el-input  v-model="ruleForm.user_phone"></el-input>
            </el-form-item>
            <el-form-item label="推荐人手机号:" prop="recommend_phone">
                <el-input v-model="ruleForm.recommend_phone"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verification">
                <img class="verifications" :src="imgDataURL"  alt="">
                <button type="button" class="yanzheng_btn"@click="changeVerification">刷新</button>
                <el-input type="text" v-model="ruleForm.verification" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码:" prop="phoneCode">
                <button type="button" class="yanzheng_btn"@click="sendPhoneCode">发送验证码</button>
                <el-input type="text" v-model="ruleForm.phoneCode" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
            <div style="line-height: 25px; color: #999;font-size: 14px;height: 25px;width: 100px;margin-bottom: 10px">出生日期：</div>
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="邮箱:" prop="email">
                <el-input type="email" v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkpass">
                <el-input type="password" v-model="ruleForm.checkpass" autocomplete="off"></el-input>
            </el-form-item>
            <div class="agree_reg_box">
                <div class="agree_reg_agreement">
                    <el-checkbox v-model="checked">同意注册协议</el-checkbox>
                </div>
                <div class="reg_agreement">
                    <span>
                        <a  style="color: #959ca8" href="">注册协议?</a>
                    </span>
                </div>
            </div>
            <el-form-item>
                <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import md5 from 'js-md5'
    import {api} from 'Api/api';
    import {getRegister} from "Api/request";
    import {getRegisterCode} from "Api/request";
    import {getPhoneCode} from "Api/request";

    export default {
        name: 'register',
        data () {
          var validatePhone = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入联系电话'))
            } else {
              var reg = /^1[34578]\d{9}$/
              if (reg.test(value) === false) {
                callback(new Error('请输入正确的电话号码'))
              } else {
                callback()
              }
            }
          }
          var validateRecommendPhone = (rule, value, callback) => {
            if (value === '') {
              callback()
            } else {
              var reg = /^1[34578]\d{9}$/
              if (reg.test(value) === false) {
                callback(new Error('请输入正确的电话号码'))
              } else {
                callback()
              }
            }
          }
            var Pass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass')
                    }
                    callback()
                }
            }
            var ValidatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }
            var ValidateEmail = (rule, value, callback) => {
                if (value === '') {
                    callback()
                } else {
                    var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/
                    if (reg.test(value) === false) {
                        callback(new Error('邮箱格式不正确，例如web@baidu.com'))
                    } else {
                        callback()
                    }
                }
            }
            var Verification = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'))
                } else if (value !== this.code) {
                    callback(new Error('验证码不正确!'))
                } else {
                    callback()
                }
            }
            var PhoneCode = (rule,value,callback)=>{
              if (value === '') {
                callback(new Error('请输入验证码'))
              } else if (value !== this.phoneCode1) {
                callback(new Error('验证码不正确!'))
              } else {
                callback()
              }
            }
            return {
              value1:'',
              //勾选框
              checked:false,
                //验证码图片路径
                imgDataURL: '',
              //验证码
                code: '',
              phoneCode1:'',
                ruleForm: {
                  user_phone:'',
                  //推荐人手机
                  recommend_phone:'',
                    email: '',
                    pass: '',
                    checkpass: '',
                    // 验证码
                    verification: '',
                  //手机验证码
                    phoneCode:''
                },
                rules: {
                  user_phone:[
                    { required: true, validator: validatePhone, trigger: 'blur' }
                  ],
                  recommend_phone:[
                    {required: false,validator:validateRecommendPhone,trigger: 'blur'}
                  ],
                    email: [
                        { required: true, validator: ValidateEmail, trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, validator: Pass, trigger: 'blur' }
                    ],
                    checkpass: [
                        { required: true, validator: ValidatePass, trigger: 'blur' }
                    ],
                    verification: [
                        { required: true, validator: Verification, trigger: 'blur' }
                    ],
                    phoneCode:[
                        { required: true, validator: PhoneCode, trigger: 'blur' }
                  ]
                }
            }
        },
      mounted () {
        this.changeVerification()
      },
      methods: {
          //验证码调用接口
        changeVerification () {
          getRegisterCode({},(res)=>{
            this.code = res.data.code
            this.imgDataURL = api + res.data.imgPath
          })
        },
        //手机验证码
        sendPhoneCode(){
          if(this.ruleForm.user_phone !=""){
            getPhoneCode({userPhone:this.ruleForm.user_phone},(res)=>{
              let result = res.data.toString()
                this.phoneCode1 = result
            })
          }else{
            this.$refs.ruleForm.fields[3].error = "请输入手机号码"
          }

        },
        submitForm (formName) {
          // console.log(this.ruleForm)
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // 判断同意协议是否勾选
              if(this.checked == true){
                //全部验证成功调取接口
                getRegister(
                  {
                    userPwd: md5(this.ruleForm.pass),userPhone:this.ruleForm.user_phone,
                    userEmail:this.ruleForm.email,userBirthday:this.value1
                  },
                  (res)=>{
                    //当注册成功 提示
                    if(res.success ==true){
                      this.$message({
                        message:'注册成功!',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('注册失败!')
                    }
                    console.log(res)
                  })
              }else{
                this.$message.error('请勾选同意协议!');
              }

            } else {
              console.log('error submit!!')
              return false
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">
    @import "../../../static/css/common";
    .register{
    width: 370px;
    margin: 0 auto;
}
/deep/.el-input__inner{
    height: 38px;
    width: 370px;
    border-radius: 2px;
}
.el-button{
    margin: 0 0 20px 0;
    background: #8975B4;
    border: 1px #fff solid;
    /deep/span{
        display: inline-block;
        font-size: 14px;
        color:@white;
    }
}
    /deep/.el-form-item__label{
        line-height: 25px;
        color: @fontColor;
    }
    .el-form-item{
        margin-bottom: 18px;
    }

</style>
