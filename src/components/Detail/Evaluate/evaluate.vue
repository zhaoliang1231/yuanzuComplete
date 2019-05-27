<template>
  <!--评论组件-->
  <div>
    <div class="tabBody">
      <div id="reviews" class="reviews">
        <div id="read_reviews">
          <div id="read_reviews">
            <div class="actionBar top clearfix">
              <div class="left">
                <a @click="evaluateShow" href="javascript:void(0);" id="write_review_action" class="write">欢迎您发表评论。</a>
              </div>
              <div class="right">0&nbsp;/&nbsp;0&nbsp;评论</div>
            </div>
              <div class="evaluateMsg" v-if="flag1" v-for="i in lists">
                  <div class="content_left">{{i.commentContent}}</div>
                  <div class="content_right">
                      <div class="content_UserName">
                          <span>用户名:</span>
                          <span>{{i.userName}}</span>
                      </div>
                  </div>
              </div>
          </div>
          <div id="write_reviews" class="reviews"  v-if="flag">
            <div class="write_review clearfix">
              <div class="headline">发表评论</div>
              <div class="required right">标有星号 (*) 的字段是必填字段</div>
              <div class="description">请输入您的评论</div>

              <form id="reviewForm" action="/Ganso/zh/p/100001422/review" method="post">
                <div class="write_review_container">
                  <div class="control-group">
                    <label class="control-label" for="review.comment">
                      评论描述
                      <span class="mandatory">
                        <img
                          width="5"
                          height="6"
                          alt="必填"
                          title="必填"
                          src="../../../static/img/mandatory.gif"
                        >
                      </span>
                      <span class="skip"></span>
                    </label>
                    <div class="controls">
                      <textarea v-model="commentContent" id="review.comment" name="comment" class="textarea"></textarea>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">您的评分 *:</label>
                    <div class="block" style="margin-top:10px">
                      <el-rate v-model="value1"></el-rate>
                    </div>
                  </div>
                </div>

                <button @click="submitComments" class="positive" type="submit" value="提交评论">提交评论</button>
              </form>
            </div>
            <div class="actionBar bottom clearfix">
              <a @click="evalateHidden" href="javascript:void(0);" id="read_reviews_action">返回评论</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {getEvaluate} from 'Api/request'
    import {addEvaluate} from 'Api/request'
export default {
  name: "evaluate",
  data() {
    return {
      value1: null,
      flag:false,
      flag1:true,
      commentContent:'',
      lists:[]
    };
  },
  methods: {
    evaluateShow: function () {
        this.flag = true
        this.flag1 = false
    },
    evalateHidden:function(){
        this.flag = false
        this.flag1 = true
    },
    submitComments:function (e) {
      e.preventDefault();
      console.log(this.$route.query.id)
      addEvaluate(
        {
          goodsinfoId:this.$route.query.id,
          userId:window.localStorage.getItem('userId'),
          commentContent:this.commentContent
        },(res)=>{

      })
    }
  },
  mounted () {
    //评论接口
    getEvaluate({goodsinfoId:this.$route.query.id},(res)=>{
      this.lists = res.data
    })
  }
};
</script>

<style scoped lang="less">
.tabBody {
  width: 920px;
  margin: 0 auto;
}
.reviews .actionBar.top {
  border-bottom: 1px solid #a5a5a5;
}
.reviews .actionBar {
  height: 30px;
  line-height: 30px;
  color: #808080;
  font-size: 1em;
  white-space: nowrap;
  display: block;
  margin: 20px 0;
}
.left {
  float: left;
}
.right {
  float: right;
}
.reviews .actionBar a,
.reviews .actionBar .write {
  color: #808080;
  font-weight: bold;
  padding: 0 0 0 10px;
  background: url(../../../static/img/facetMoreLessIcon.png) no-repeat left
    center;
}
#write_reviews.reviews .headline {
  border-bottom: 1px solid #a5a5a5;
  font-size: 1.2em;
  font-weight: bold;
  height: 39px;
  line-height: 39px;
  text-transform: uppercase;
  margin: 0 0 20px 0;
}
.required.right {
  margin: 0 0 0 20px;
  font-size: 90%;
  color: #666;
  max-width: 60%;
}
.reviews .description {
  margin: 0 0 20px 0;
}
.control-group label {
  display: block;
  margin: 12px 0 2px 0;
}
.control-group textarea {
  width: 100%;
  height: 50px;
  margin-top: 10px;
}
.positive {
  width: 52px;
  height: 40px;
  background-color: #e4004f;
  border-color: #e4004f;
  color: #fff;
  font-weight: bold;
  outline:none;
  cursor: pointer;
  margin-top: 20px;
}
.reviews .actionBar.bottom {
    border-top: 1px solid #a5a5a5;
}
.reviews .actionBar {
    height: 30px;
    line-height: 30px;
    color: #808080;
    font-size: 1em;
    white-space: nowrap;
    display: block;
    margin: 20px 0;
}
    .evaluateMsg {
        width:100%;
        height: 80px;
        border-bottom:1px solid #e3e3e3;
        .content_left{
            float: left;
            width: 70%;
            height: 80px;
        }
        .content_right{
            width: 30%;
            height: 80px;
            float: right;
            .content_UserName{
                text-align: right;
                line-height: 120px;
                span{
                    color: #999999;
                }
            }
        }
    }

</style>