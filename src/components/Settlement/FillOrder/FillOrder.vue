<template>
  <div>
    <div class="fo-content-box">
      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          收件人信息
        </p>
        <div class="fo-right-box">
          <div class="fo-address-box">
              <ul class="fo-address-ul">
                <li>
                  <label ><input type="radio" checked>
                    <em>赵亮</em>
                    <em>云南省 保山市 腾冲 酆都</em>
                    <em>120000</em>
                    <em>13800000000</em>
                  </label>
                  <span @click="addressIshide=true">

                  </span>
                </li>
              </ul>
          </div>
          <button class="a-hover-pink" @click="addressIshide=true" >新增收货人地址</button>
          <div class="fo-address-box" v-if="addressIshide" style="position: relative">
            <div class="fo-address-n-box">
              <p class="fontSize-14 margin-bottom-12">新增收货人地址</p>

              <!--新增地址-->
              <el-form ref="form" :model="sizeForm" :rules="rules" label-width="80px" size="mini">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="sizeForm.name"></el-input>
                </el-form-item>
                <span style="float: left;line-height: 28px;padding-left: 10px"><em class="font-pink">*</em> 所在区域</span>
                <VDistpicker v-model="addressDetail" @selected="onSelected">
                </VDistpicker>
                <el-form-item label="详细地址" prop="Address">
                  <el-input v-model="sizeForm.Address"></el-input>
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
                <el-form-item size="large" class="address-button-box">
                    <el-button type="danger" @click="onSubmitAddres">保存地址</el-button>
                    <el-button @click="addressIshide=false" type="info">取消</el-button>
                </el-form-item>
              </el-form>




            </div>
          </div>

        </div>
      </div>

      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          购物清单
        </p>
        <div class="fo-right-box">
          <a href="/settlement/shopcart" class="a-hover-pink fr"> <
            < 返回购物车修改商品
          </a>
          <div class="fo-Commodity-information">
            <div class="fo-cominfo-title-box">
              <ul>
                <li class="font-weight-bold text-align-center">商品</li>
                <li class="font-weight-bold text-align-center">单价</li>
                <li class="font-weight-bold text-align-center">数量</li>
                <li class="font-weight-bold text-align-center">总计</li>
              </ul>
            </div>

            <div class="fo-coin-cont" v-for="(item,index) in listShop" :key="index" >
              <div>
                <ul>
                  <li>
                    <router-link :to="'/detail?id='+item.goodsId" class="a-hover-pink font-weight-bold">{{item.goodsName}}</router-link>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="font-pink">¥{{item.goodsPrice}}.00</em>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="">{{item.goodsNum}}</em>
                  </li>
                  <li class="text-align-center" style="line-height: 40px">
                    <em class="font-pink">¥{{item.goodsPrice}}.00</em>
                  </li>
                </ul>
              </div>
            </div>

            <div class="fo-in-distribution">
              <span class="fontSize-14">配送方式 ：</span>
              <div>
                <label><input type="radio" name="in-distribution" checked="checked">门店自提</label>
                <p></p>
                <label style="display: inline-block;padding-top: 15px"><input type="radio"
                                                                              name="in-distribution">门店配送</label>
              </div>

            </div>

            <div class="fo-AOG-time">
              预计到货时间：
              <el-date-picker v-model="value1" style="position: absolute" type="datetime"></el-date-picker>
              <span style="padding-left: 180px"> ( 提示：<em class="font-pink">* 必填</em>  北京地区最早送达时间为上午12点，实际到货时间可能有0.5~1小时的偏差哦~  )</span>
            </div>
          </div>

          <div class="fo-Candle-box">
            <em class="font-pink">*</em>
            <span>生日蜡烛：</span>
            <label><input type="radio" name="needCandle">不需要</label>
            <label><input type="radio" name="needCandle" checked="checked">需要</label>
            <p><span>备注：</span><input type="text" placeholder="如果您订购蛋糕用于庆生，需要数字形状生日蜡烛，请注明年龄（是年龄不是出生年月）"></p>
          </div>

        </div>

      </div>

      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          支付方式
        </p>
        <div class="fo-right-box">

          <div>温馨提示：使用支付宝或银联支付更快捷

          </div>
          <p>
            <label><input type="radio" name="zhifu" value="支付宝" checked="checked">支付宝</label>
          </p>
        </div>
      </div>
      <div class="fo-center-box">
        <p class="fo-title-box text-align-center fontSize-14">
          订单结算
        </p>
        <div class="fo-right-box">
          <div>
            <label><input type="radio" checked="checked" name="invoice">不需要发票</label>
            <label><input type="radio" name="invoice">电子发票</label>
            <label><input type="radio" name="invoice">普通发票</label>
            <label><input type="radio" name="invoice">增值税发票</label>
          </div>
          <div>
            <p class="fontSize-14">最终订单金额：</p>
            <p><span>商品金额:</span>
              <em>¥{{total.price}}.00</em>
            </p>
            <p><span>运费:</span>
              <em>免费</em>
            </p>
            <p><span>折扣:</span>
              <em>¥0.00</em>
            </p>
            <p><span>应付金额:</span>
              <em>¥{{total.price}}.00</em>
            </p>
            <button v-on:click="isToSub" class="hover-bg-pink">下订单</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import AddAddress from '../../MemberCenter/PersonalCenter/AddAddress/index.vue'
  import VDistpicker from 'v-distpicker'
  import {orderPay} from "Api/request";
  var validPhone = (rule, value, callback) => {
    if (!value) {
      callback(new Error('请输入电话号码'))
    } else if (!isvalidPhone(value)) {
      callback(new Error('请输入正确的11位手机号码'))
    } else {
      callback()
    }
  }
  var validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('详细地址不能为空'));
    } else {
      callback();
    }
  };
  export default {
    name: 'FillOrder',
    components: {
      AddAddress,
      VDistpicker
    },
    data() {
      return {
        value1: '',
        tosub: true,
        isAddress:false,
        addressIshide:false,
        listShop:this.$store.state.cart.cartLists,
       sizeForm: {
         name: '',
           country: '',
           province: '',
           city: '',
           addressDetail:'',
           zipcode: '',
           telphone: '',
           sex: '',
           Address:'',
           DetailedAddress:'',
           email: ''
       },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
          zipcode: [{type: 'number', message: '邮编必须为数字'}],
          telphone: [{ required: true, trigger: 'blur', validator: validPhone }],
          Address: [{ required: true, trigger: 'blur', validator: validatePass }]
      }
      }
    },
    computed: {
      total:function() {
        return this.$store.getters.total
      }
    },
    mounted(){
      this.test()
    },
    methods: {
      isToSub: function () {
        if (this.tosub) {
          // orderPay({
          //   userId:window.localStorage.getItem('userId')
          // },(res)=>{
          //   console.log(res);
          this.$store.commit('removeLists')
          this.$router.push({ path:'/settlement/submitsuccess'  })
          // })
        } else {

        }
      },
      onSelected(data) {

      },
      test:function () {
        console.log(this.total)
      }
    }
  }
</script>

<style lang="less">

  // .slt-Payment-process-box ul {
  //background-position: 0px -33px;
  // li:nth-child(1){
  //   color:#333;
  // }
  // li:nth-child(2){
  //   color:#fff;
  // }
  //}
  .distpicker-address-wrapper{
    max-height: 28px;
    margin-bottom: 15px;
    margin-left: 80px;
    select{
      height: 28px;
      line-height: 28px;
      padding: 0;
    }
  }
  .fo-address-n-box{
    position: absolute;
    z-index: 99;
    min-width: 694px;
    box-shadow: 0 0 15px #ccc;
    border: 1px solid #c7c7c7;
    background-color: #ffffff;
    padding: 10px;
  }
  .user-content{
    /deep/
    .el-form{
      .el-form-item{
        .el-form-item__content{
          .el-input{
            width: 353px;
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


  .fo-content-box {
    padding: 0px 0px 80px 0px;
    border: 1px solid #c7c7c7;
  }

  .fo-center-box {
    position: relative;
    border-bottom: 1px solid #c7c7c7;
    height: auto;
    display: inline-block;
    width: 100%;
    .fo-title-box {
      position: absolute;
      width: 171px;
      padding-top: 30px;
      background: url("../../../static/img/line_x.jpg") no-repeat left top;
      height: 100%;
    }
    .fo-right-box {
      padding: 12px 12px 12px 185px;
      float: left;
      width: 100%;
      button {
        margin: 10px 0 0 30px;
        width: 109px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background-color: #e7e5e6;
        display: block;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }

  .fo-center-box:nth-child(1) {
    min-height: 110px;
  }

  .fo-center-box:nth-child(2) {
    a {

    }
    .fo-Commodity-information {
      border: 1px solid #c7c7c7;
      clear: both;
      .fo-cominfo-title-box {
        height: 37px;
        background: #e6e4e5;
        ul li {
          float: left;
          line-height: 37px;
        }

      }
      ul li:nth-child(1) {
        width: 370px;
      }
      ul li:nth-child(2) {
        width: 158px;
      }
      ul li:nth-child(3) {
        width: 210px;
      }
      ul li:nth-child(4) {
        width: 220px;
      }
      .fo-coin-cont {
        border-bottom: 1px solid #c7c7c7;
      }
      .fo-coin-cont div {
        padding: 10px 20px;
        padding-left: 0px;
        display: inline-block;
        p {
          margin-top: 15px;
        }
        ul li {
          float: left;
        }
        ul li:nth-child(1) {
          padding-left: 20px;
          text-align: center;
          line-height: 40px;
        }
      }

      .fo-in-distribution {
        padding: 10px 20px;
        border-bottom: 1px solid #c7c7c7;
        span {
          display: inline-block;
          float: left;
        }
        input[type='radio'] {
          margin-left: 28px;
          margin-right: 10px;
        }

      }
      .fo-AOG-time {
        padding: 15px 20px;
        position: relative;
        span {
          line-height: 20px;
          height: 20px;
        }
        input[type='text']{
          line-height: 20px;
          padding-left: 25px;
        }
      }

    }
    .fo-Candle-box {
      margin: 15px 0px;
      input[type='radio'] {
        margin-right: 5px;
      }
      label {
        margin-right: 25px;
      }
      p {
        margin-top: 20px;
        input[type='text'] {
          width: 96%;
          outline: none;
          background: none;
          box-shadow: none;
          border: 1px solid #c7c7c7;
          height: 21px;
          line-height: 21px;
        }
      }
    }
  }

  .fo-center-box:nth-child(3) {
    .fo-right-box {
      div{
        padding-left: 13px;
      }
      p {
        padding: 15px 13px 58px 0px;
        padding-left: 13px;
        label{
          input[type='radio']{
            margin-right: 3px;
          }
          padding-right: 10px;
        }
      }
    }

  }

  .fo-center-box:nth-child(4) {
    .fo-right-box {
      height: 302px;
      div:first-child {
        font-size: 14px;
        height: 100%;
        float: left;
        width: 559px;
        label {
          padding-left: 13px;
        }
        input[type='radio'] {
          margin-right: 5px;
        }
      }
      div:last-child {
        border-left: 1px solid #cdcdcd;
        float: left;
        padding: 0px 34px 0px 65px;
        width: 435px;
        p {
          line-height: 33px;
          display: inline-block;
          width: 100%;
          span {
            float: left;
          }
          em {
            float: right;
          }
        }
        button {
          width: 78px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          color: #fff;
          padding: 1px;
          background-color: #de5251;
          display: inline-block;
          float: right;
          margin-top: 10px;
        }
      }
    }
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 165px;
  }

  .el-input__inner {
    height: 20px;
    border-radius: 0px;
    width: 165px;
    border-color: #c7c7c7;
    font-size: 12px;
  }

  .el-input__suffix {
    right: 2px;
  }

  .el-input--prefix .el-input__inner {
    padding-left: 20px;
  }

  .el-input--suffix .el-input__inner {
    padding-right: 10px;
  }

  .el-input__icon {
    line-height: 20px;
  }
  .address-button-box {
   button{
      display: inline-block !important;
     margin:0 !important;
     padding: 0 !important;
     border-radius: 0 !important;
     background: #24739E !important;
     width: 70px !important;
     margin-right: 20px !important;
     span{
       color: white !important;
     }
    }
  }
</style>
