<template lang="html">
  <div class="detail">
    <div class="banner"></div>
    <div class="con clearfix">
      <div class="con-l clearfix">
          <div class="nav">
            <a href="/index">首页></a>
            <a href="/detail/single">单身定制</a>
          </div>
          <h2>单身交友: 深圳大鹏古城+小鼓浪屿较场尾悠闲小资之旅</h2>
          <div class="con-l-title clearfix">
            <div class="title-l">
              <img src="../assets/detail-title-img.png" alt="">
              <p>shelly(领队)</p>
            </div>
            <div class="title-r ">
              <div class="title-key ">
                <p>活动时间:</p>
                <p>截止时间:</p>
                <p>集合时间:</p>
                <p>集合地点:</p>
              </div>
              <div class="title-val ">
                  <div class="val-btns">
                    <a  v-for="(item,index) in timeList" :class="{on:nowTime == index}"
                      @click="checkTime(index)"
                    >{{item.con}}</a>

                  </div>
                  <p>2017年07月16日</p>
                  <p>07年16日 08:00</p>
                  <p>体育西路地铁站</p>
              </div>
            </div>
            <div class="buy">
              <span><em>¥118</em>/人 </span>
              <a href="#">立即报名</a>
            </div>
          </div>
          <div class="partner">
            <h4>结伴  (GG余席数:15,MM余席数:10)</h4>
            <span><img src="../assets/detail-icon.png" alt=""></span>
            <span><img src="../assets/detail-icon.png" alt=""></span>
            <span><img src="../assets/detail-icon.png" alt=""></span>
            <span><img src="../assets/detail-icon.png" alt=""></span>
            <span><img src="../assets/detail-icon.png" alt=""></span>
            <span><img src="../assets/detail-icon.png" alt=""></span>
            <span><img src="../assets/detail-icon.png" alt=""></span>
            ...
          </div>
          <div class="tag">
            <div class="tag-nav clearfix">
              <li :class="{on:nowIndex == 0}" @click="checkNav(0)">活动详情</li>
              <li :class="{on:nowIndex == 1}" @click="checkNav(1)">行程与准备</li>
              <li :class="{on:nowIndex == 2}" @click="checkNav(2)">费用说明</li>
              <li :class="{on:nowIndex == 3}" @click="checkNav(3)">所有评价</li>
            </div>
            <div class="container">

            </div>
          </div>
      </div>
      <div class="con-r">
        <lineList :lineType="lineType"></lineList>
        <hotnote :lineType="lineType"></hotnote>
      </div>
    </div>

  </div>
</template>

<script>
import Iconfont from '../../static/iconfont.js'
import Line from '../components/line'
import hotnote from '../components/hotnote'
export default {
  components: {
    lineList: Line,
    hotnote
  },
  data() {
    return {
      lineType: this.$route.params.lineType,
      nowTime: 0,
      nowIndex: 0,
      timeList: [{
          con: "2017年07月16日 周六"
        },
        {
          con: "2017年07月16日 周六"
        },
        {
          con: "2017年07月16日 周日"
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route.params.lineType);
  },
  methods: {
    checkTime(val) {
      this.nowTime = val;
    },
    checkNav(val) {
      this.nowIndex = val;

    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 590px;
  background: url(../assets/detail-banner.png) no-repeat;
  margin-bottom: 50px;
}

.con {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;

  line-height: 24px;
  color: #333;
}

.con-l {
  float: left;
  width: 715px;
  font-size: 18px;
}

.nav {

  margin-bottom: 20px;
}

h2 {
  font-size: 32px;
  color: #333;
  font-weight: bold;
  line-height: 36px;
}

.con-l-title {
  width: 685px;
  float: left;

  height: 300px;
  margin-top: 20px;
}

.title-l {
  padding-top: 60px;
  box-sizing: border-box;
  width: 230px;
  text-align: center;
  float: left;
}

.title-l p {
  font-size: 18px;
  margin-top: 20px;
}

.title-r {
  width: 455px;

  height: 200px;
  float: left;
}

.title-key {
  float: left;
  height: 210px;
  width: 110px;
}

.title-key p:first-child {
  height: 128px;
}

.title-val {
  float: left;
  width: 330px;
}

.title-val a {
  width: 224px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border: 1px solid #ff5d8b;
  display: block;
  margin-bottom: 5px;
}

.val-btns {
  height: 128px;
}

.val-btns .on {
  background: #ff5d8b;
  color: #fff;
}

.buy {
  margin-top: 30px;
  float: left;
  width: 685px;
  height: 58px;
  background: #f2f2f2;
}

.buy span {
  float: left;
  font-size: 14px;
  height: 58px;
  width: 100px;
  line-height: 58px;
  display: block;
  margin-left: 30px;
}

.buy em {
  font-size: 24px;
  color: #f00006;
  font-weight: bold;
}

.buy a {
  float: right;
  width: 196px;
  height: 58px;
  display: inline-block;
  line-height: 58px;
  background: #ff5d8b;
  color: #fff;
  text-align: center;
  font-size: 24px;
}

.partner {
  float: left;
  margin-top: 20px;
  width: 715px;

  height: 209px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 20px;
  box-sizing: border-box;
  padding-right: 0
}

.partner h4 {
  padding-left: 40px;
  height: 30px;
  line-height: 30px;
  background: url(../assets/detail-partner.png) no-repeat left center;
  margin-bottom: 30px;
}

.partner span {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.partner span:last-child {
  margin: 0;
}

.partner span img {
  width: 100%;
  height: 100%;
}

.tag {
  width: 715px;
  float: left;
}

.tag-nav {
  width: 715px;
  border-bottom: 1px solid #bfbfbf;
  height: 73px;
  margin-top: 30px;
}

.tag-nav li {
  float: left;
  width: 160px;
  height: 73px;
  text-align: center;
  line-height: 73px;
  font-size: 24px;
}

.container {
  width: 715px;
  height: 500px;
}

.tag .on {
  color: #ff5d8b;
  border-bottom: 2px solid #ff5d8b;
}

.con-r {
  float: right;
  width: 435px;
}
</style>
