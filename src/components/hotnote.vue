<template lang="html">
  <div class="con-r-item">
    <img src="../assets/team-r3.png" alt="" v-if="lineType==0">
    <img src="../assets/note-linetype1.png" alt="" v-if="lineType==1">
    <ul class="con-r-list clearfix">
      <li v-for="item in hotList">
        <h4 v-text="item.title">美食定制：猝不及防吃吃</h4>
        <div class="li-ft">
            <span><img :src="item.icon" alt=""></span>
            <span v-text="item.name">小天使</span>
            <span v-text="item.time">2017-10-01</span>
            <span class="like" v-text="item.like">120</span>
            <span class="comment" v-text="item.comment">46</span>
        </div>
      </li>
      <!-- <li>
        <h4>美食定制：猝不及防吃吃</h4>
        <div class="li-ft">
            <span><img src="../assets/team-r3-1.png" alt=""></span>
            <span>小天使</span>
            <span>2017-10-01</span>
            <span class="like">120</span>
            <span class="comment">46</span>
        </div>
      </li>
      <li>
        <h4>美食定制：猝不及防吃吃</h4>
        <div class="li-ft">
            <span><img src="../assets/team-r3-1.png" alt=""></span>
            <span>小天使</span>
            <span>2017-10-01</span>
            <span class="like">120</span>
            <span class="comment">46</span>
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
    hotList: {
      type: Array,
      default: [{
        "title": "美食定制：猝不及防吃吃",
        "icon": require("../assets/team-r3-1.png"),
        "name": "小天使",
        "time": "2017-10-01",
        "like": "120",
        "comment": "46"
      }]
    }
  }
}
</script>

<style scoped>
.con-r-item {
  margin-top: 48px;
}

.con-r-list li {
  box-sizing: border-box;
  padding: 5px;
  width: 435px;
  height: 78px;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
}


.con-r-list h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.con-r-list .li-ft {
  vertical-align: baseline;
  height: 30px;
  line-height: 30px;
}

.con-r-list .li-ft span:first-child {
  display: inline-block;
  vertical-align: sub;
}

.con-r-list .li-ft .like {
  display: inline-block;
  margin-left: 20px;
  width: 40px;
  text-align: right;
  color: #999;
  background: url(../assets/team-r3-2.png) left center no-repeat;
}

.con-r-list .li-ft .comment {
  display: inline-block;
  margin-left: 20px;
  width: 40px;
  text-align: right;
  color: #999;

  background: url(../assets/team-r3-3.png) left center no-repeat;
}
</style>
