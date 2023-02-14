const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

const express = require('express');
const app = express();
const port = 8081;
const cors = require('cors');
app.use(cors());
const axios = require('axios');
axios.defaults.withCredentials = true

app.get('/getRecommend', async function (req, res) {
  const {
    data
  } = await axios({
    method: 'GET',
    url: 'https://api.bilibili.com/x/web-interface/index/top/rcmd?version=1&ps=8',
    headers: {
      "Cookie": "buvid3=505AE63C-E225-4A3B-661F-8D527D98981308929infoc; _uuid=8B449F69-84410-DE1D-C8EA-318DAAD51DD900927infoc; buvid4=07210793-0020-1E49-0242-DBD154F0A4C009737-022020813-tUhSdmSTAj2my8K4sWEt5A%3D%3D; LIVE_BUVID=AUTO3816442990183020; buvid_fp_plain=undefined; nostalgia_conf=-1; CURRENT_BLACKGAP=0; fingerprint3=99f405f1cfb53549cfd2d303fdad67de; hit-dyn-v2=1; blackside_state=0; is-2022-channel=1; i-wanna-go-feeds=-1; b_nut=100; i-wanna-go-back=-1; go_old_video=-1; hit-new-style-dyn=0; rpdid=|(u)~mRmm)u~0J'uYY)~JlklY; CURRENT_QUALITY=120; fingerprint=0ecb6697c0f5d8c9bba29056be6c0fd4; CURRENT_FNVAL=4048; DedeUserID=698939896; DedeUserID__ckMd5=ba8986f2293c1bb4; b_ut=5; SESSDATA=4d9f250c%2C1688377326%2C14adb%2A12; bili_jct=7a909ab50b244b1492d744f7171ffed2; sid=6zy3jhh9; bsource=search_bing; bp_video_offset_698939896=747543365916033000; buvid_fp=0ecb6697c0f5d8c9bba29056be6c0fd4; b_lsid=10DF7F25D_18580B67BA9; innersign=0; PVID=3"
    }
  })
  res.send(data)

})
app.get('/getPopularize', async function (req, res) {
  const {
    data
  } = await axios({
    method: 'GET',
    url: 'https://api.bilibili.com/x/web-interface/popular?ps=6&pn=1',
    // headers: {
    //   "Cookie": "buvid3=505AE63C-E225-4A3B-661F-8D527D98981308929infoc; _uuid=8B449F69-84410-DE1D-C8EA-318DAAD51DD900927infoc; buvid4=07210793-0020-1E49-0242-DBD154F0A4C009737-022020813-tUhSdmSTAj2my8K4sWEt5A%3D%3D; LIVE_BUVID=AUTO3816442990183020; buvid_fp_plain=undefined; nostalgia_conf=-1; CURRENT_BLACKGAP=0; fingerprint3=99f405f1cfb53549cfd2d303fdad67de; hit-dyn-v2=1; blackside_state=0; is-2022-channel=1; i-wanna-go-feeds=-1; b_nut=100; i-wanna-go-back=-1; go_old_video=-1; hit-new-style-dyn=0; rpdid=|(u)~mRmm)u~0J'uYY)~JlklY; CURRENT_QUALITY=120; fingerprint=0ecb6697c0f5d8c9bba29056be6c0fd4; CURRENT_FNVAL=4048; DedeUserID=698939896; DedeUserID__ckMd5=ba8986f2293c1bb4; b_ut=5; SESSDATA=4d9f250c%2C1688377326%2C14adb%2A12; bili_jct=7a909ab50b244b1492d744f7171ffed2; sid=6zy3jhh9; bsource=search_bing; bp_video_offset_698939896=747543365916033000; buvid_fp=0ecb6697c0f5d8c9bba29056be6c0fd4; b_lsid=10DF7F25D_18580B67BA9; innersign=0; PVID=3"
    // }
  })
  res.send(data)

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))