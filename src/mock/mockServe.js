// 引入插件
import Mock from 'mockjs'
// 引入json数据
import banner from '@/mock/banner.json'


// 调用mock方法 mock(路径,数据)
Mock.mock('/mock/banner', {
    code: 200,
    list: banner
});