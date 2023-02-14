import {
    getBannerList,
    getRecommendList,
    getPopularizeList
} from '@/api/index.js'
const state = {
    bannerList: [],
    recommendList: [],
    popularizeList: []


};

const mutations = {
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETRECOMMENDLIST(state, recommendList) {
        state.recommendList = recommendList
    },
    GETPOPULARIZELIST(state, popularizeList) {
        state.popularizeList = popularizeList
    }

};
const actions = {
    // 获取轮播图
    async getBannerList({
        commit
    }) {
        const {
            data: res
        } = await getBannerList();
        if (res.code == 200) {
            commit('GETBANNERLIST', res.list)
        } else {
            return Promise(new Error('failed'))
        }



    },
    // 获取推荐视频
    async getRecommend({
        commit
    }) {
        const {
            data: res
        } = await getRecommendList();
        // console.log(res.data.item);
        // console.log(res);
        if (res.code == 0) {
            commit("GETRECOMMENDLIST", res.data.item)
        }
    },
    //推广模块数据
    async getPopularizeList({
        commit
    }) {
        const {
            data: res
        } = await getPopularizeList()
        if (res.code == 0) {
            commit('GETPOPULARIZELIST', res.data.list)
        } else {
            return Promise(new Error('failed'))
        }
    }


};
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}