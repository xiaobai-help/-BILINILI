<template>
  <div>
      <div class="animation-list">
          <div class="animation-list-top">
            <h1>排行榜</h1>
            <button>更多 ></button></button>
          </div>

          <div class="animation-list-bottom">
              
            <div @mouseenter="chuxian1(one=true)" @mouseleave="yincang2(one=false)">
              <span><i><b class="one1">1</b></i></span>
              <div>
                <img src="https://i1.hdslb.com/bfs/archive/8e91870e81f598365274587708482569f7fc072b.jpg@192w_108h_1c.avif" alt="">
                <h3>666666666</h3>
              </div>
              <transition name="hello"> 
                <div class="xianshi" v-show="one">
                    <Xianshi id="坤哥"></Xianshi>
                </div>
              </transition>
            </div>

            <div class="grey-list" v-for="(item,index) in 8" :key="index" @mouseenter="chuxian(index)" @mouseleave="yincang(index)">
              <span><i><b :class="'b'+index" class="grey">{{index+2}}</b></i></span>
              <h3>{{xianshi[index]}}</h3>    
              <transition name="hello">  
              <div class="xianshi" v-show="xianshi[index]" >
                    <Xianshi :id="index"></Xianshi>
              </div>
              </transition>       
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import Xianshi from "../xianshi/xianshi.vue";
export default {
  props: ["state"],
  data() {
    return {
      one: false,
      xianshi: [],
    };
  },
  components: {
    Xianshi,
  },
  methods: {
    chuxian(index) {
      this.$set(this.xianshi, index, true);
      console.log(this.wang[index]);
    },
    yincang(index) {
      this.$set(this.xianshi, index, false);
    },
  },
  created() {
    this.xianshi = this.state;
  },

  mounted() {
    const $ = this.$;

    $(function () {
      $(".grey-list:even").css("backgroundColor", "#f6f7f8");
    });
  },
};
</script>

<style lang='less' scoped>
.animation-list {
  .animation-list-top {
    height: 2.438rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    h1 {
      font-size: 1.714rem;
      font-weight: 400;
    }
    button {
      width: 70px;
      height: 32px;
      padding: 8px 12px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      border: 1px solid #e3e5e7;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.3s;
    }
    button:hover {
      background-color: #e3e5e7;
    }
  }
  .animation-list-bottom {
    width: 100%;
    height: 28rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border-radius: 10px;
    border: 1px solid #e6e8ea;
    :nth-child(1) {
      grid-row: 1 / span 2;
    }
    div {
      padding: 0 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      .xianshi {
        width: 300px;
        height: 100px;
        position: absolute;
        top: -100px;
        left: -20%;
        transition: all 0.3s;
      }
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        i {
          .one1 {
            color: #ff5d55 !important;
          }
          .b0 {
            color: #ff6a29 !important;
          }
          .b1 {
            color: #ff9419 !important;
          }
          .grey {
            color: #c9ccd0;
          }
        }
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        display: -webkit-box;
        // 　　-webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      div {
        display: flex;
        align-items: flex-start;
        img {
          width: 50%;
        }
      }
    }
  }
}
/* 进入的起点、进入的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateY(10px);
}
/* 进入的终点、进入的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateY(0px);
}
</style>