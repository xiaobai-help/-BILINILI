import mockRequest from '@/api/mockRequest.js'

export const getBannerList = function () {
    return mockRequest({
        method: 'get',
        url: '/mock/banner'
    })
}

export const getRecommendList = function () {
    return mockRequest({
        method: 'get',
        url: 'http://127.0.0.1:8081/getRecommend'
    })
}


export const getPopularizeList = function () {
    return mockRequest({
        method: 'get',
        url: 'http://127.0.0.1:8081/getPopularize'
    })
}