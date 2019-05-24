<template>
    <div class="index">
        <div class="notice_location">
            <span>
                <router-link class="a-hover-pink" to="/">主页</router-link>
            </span>
                <span>></span>
            <span>
                <a class="a-hover-pink" href="">{{lists.annTiale}}</a>
            </span>
        </div>
        <div class="notice_logo">
            <div class="notice_logo_img">
                <img src="../../static/img/logo.png" alt="">
            </div>
        </div>
        <div class="notice_title">
            <p class="font-weight-bold">{{lists.annTiale}}</p>
        </div>
        <div class="notcie_aline"></div>
        <table style="width:1060px;cellspacing:1;cellpadding:1;border: 0;margin: 50px auto">
            <tbody>
                <tr>
                    <td style="colspan:3;height: 20px;">
                        <p>{{lists.annDescribe}}</p>
                    </td>
                </tr>
              <div class="notice_tail">
                  <p>{{lists.annCompany}}</p>
                  <p>{{annDate}}</p>
              </div>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {getNoticeDetail} from 'Api/request'
    export default {
      name: 'index',
       props:['id'],
      data () {
        return{
          lists:[],
          annDate:""
        }
      },
      mounted () {
        getNoticeDetail({id:this.id},(res)=>{
          console.log(this.$route.params)
          this.lists = res.data[this.id-1]
          //时间格式转换
          const d = new Date(res.data[this.id-1].annDate)
          const resDate = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate()
          this.annDate = resDate
        })
      }
    }

</script>

<style scoped lang="less">

    .notice_location{
        width: 100%;
        height: 45px;
        line-height: 45px;
    }
    .notice_logo{
        width: 100%;
        height: 100px;
        .notice_logo_img{
            width: 279px;
            height: 100px;
            float: right;
            img{
                width: 135px;
                height: 58px;
            }
        }
    }
    .notice_title{
        width: 100%;
        height: 40px;
        text-align: center;
        p{
            font-size: 30px;
            color: rgb(173, 1, 50);
            font-family: 宋体;
        }
    }
    .notcie_aline{
        width: 100%;
        height: 17px;
        border-bottom:2px solid rgb(173, 1, 50);
    }
    tr td p{
        font-size: x-large;
        font-family: 宋体;
    }
    .notice_tail{
        width: 100%;
        height:60px;
        margin-top: 80px;
        p{
            font-size: 19px;
            font-weight: bold;
            text-align: right;
        }
    }
</style>
