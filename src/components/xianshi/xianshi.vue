<template>
  <div>
    <div class="xianshi">
      <div class="xianshi-top">
        <img
          src="https://i1.hdslb.com/bfs/archive/8e91870e81f598365274587708482569f7fc072b.jpg@192w_108h_1c.avif"
          alt=""
        />
        <div>
          <p>{{ id }}</p>
          <p>up</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style lang='less' scoped>
.xianshi {
  width: 300px;
  height: 100px;
  border: 1px solid #dbdddf;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  .xianshi-top {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdddf;
    img {
      width: 90px;
      height: 56px;
      margin-right: 10px;
      border-radius: 5px;
    }
    div {
      height: 56px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>