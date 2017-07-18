<template lang="html">
  <div class="con-r-item">
      <h2>
        <img src="../assets/newline.png" alt="" v-if="lineType==0">
        <img src="../assets/detail-linetype2.png" alt="" v-if="lineType==1">

      </h2>
      <!-- <span class="sign"><img src="../assets/line-sign.png" alt=""> </span> -->
      <ul class="clearfix item-ul">
        <li v-for="item in lineList">
          <div class="li-l">
            <img :src="item.src" alt="">
          </div>
          <div class="li-r">
            <h3 v-text="item.title">单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游</h3>
              <p>报名截止: <em v-text="item.time"></em></p>
            <div class="li-ft">
              ¥ <em v-text="item.price">89</em> /人
            </div>
          </div>
        </li>
        <!-- <li>
          <div class="li-l">
            <img src="../assets/item-img.png" alt="">
          </div>
          <div class="li-r">
            <h3>单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游</h3>
              <p>报名截止:2017-10-05</p>
            <div class="li-ft">
              ¥ <em>89</em> /人
            </div>
          </div>
        </li>
        <li>
          <div class="li-l">
            <img src="../assets/item-img.png" alt="">
          </div>
          <div class="li-r">
            <h3>单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游</h3>
              <p>报名截止:2017-10-05</p>
            <div class="li-ft">
              ¥ <em>89</em> /人
            </div>
          </div>
        </li>
        <li>
          <div class="li-l">
            <img src="../assets/item-img.png" alt="">
          </div>
          <div class="li-r">
            <h3>单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游</h3>
              <p>报名截止:2017-10-05</p>
            <div class="li-ft">
              ¥ <em>89</em> /人
            </div>
          </div>
        </li> -->
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    lineType: {
      type: Number,
      default: 0
    },
    lineList: {
      type: Array,
      default: [{
          src: require('../assets/item-img.png'),
          title: "单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游",
          time: "2017-10-05",
          price: "89"
        },
        {
          src: require('../assets/item-img.png'),
          title: "单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游",
          time: "2017-10-05",
          price: "89"
        },
        {
          src: require('../assets/item-img.png'),
          title: "单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游",
          time: "2017-10-05",
          price: "89"
        },
        {
          src: require('../assets/item-img.png'),
          title: "单身精品：【桃花源记不及咫尺】清远浸潭镇水西农庄桃花湖一日游",
          time: "2017-10-05",
          price: "89"
        },
      ]
    }
  }
}
</script>

<style scoped>
.con-r-item {
  position: relative;
}

.sign {
  position: absolute;
  right: 0;
  top: 0;
}

.con-r-item li {
  margin-top: 16px;
  float: left;
  width: 435px;
  height: 105px;
  border-bottom: 1px solid #ddd;
  position: relative;
}

.item-ul {
  margin-top: 14px;
}

.li-l {
  float: left;
  width: 87px;
  height: 87px;
}

.li-r {
  float: right;
  width: 330px;
  height: 87px;
}

.li-r h3 {
  font-size: 16px;
  line-height: 20px;
}

.li-r p {
  margin-top: 25px;
  font-size: 14px;
}

.li-ft {
  color: #f15523;
  position: absolute;
  right: 5px;
  bottom: 20px;
  font-size: 12px;
}

.li-ft em {
  font-size: 20px;
}
</style>
