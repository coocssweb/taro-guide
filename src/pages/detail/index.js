import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text, Image, RichText, Button } from '@tarojs/components'
import Share from '../../components/share';
import './index.scss';

export default class Detail extends Component {
    onShareAppMessage = (res) => {
        return {
            title: '好莱坞人像布光课',
            path: '/pages/detail/index',
            imageUrl: 'https://c.static-nike.com/a/images/f_auto/w_1536,c_limit/wt0kiegic12tbxzphe0g/nikecom-homepage-cn-527.jpg'
        };
    }

    render () {
        return (
            <ScrollView scroll-y className='detail-scrollview'>
                <View className='detail-cover'>
                    <Image mode='aspectFill' className='detail-photo' src='https://c.static-nike.com/a/images/f_auto/w_1536,c_limit/wt0kiegic12tbxzphe0g/nikecom-homepage-cn-527.jpg' />
                </View>
                <View className='detail-placeholder'></View>
                <View className='detail-body'>
                    <View className='detail-title'>
                        <Text>好莱坞人像布光课</Text>
                    </View>
                    <View className='detail-content'>
                        <RichText nodes='<div>苏克·梅德斯维奇（Suki Medencevic）<br />美国电影摄影师协会会员，<br />著名国际摄影师和制片人。<br />代表作有《美国恐怖故事之旅馆》《隐形姐妹》《柏林计划》《乐在其中》《皮克斯的故事》《我希望在地狱里仍有酒喝》等。</div>' />
                    </View>
                </View>

                <View className='detail-footer'>
                    <Share />
                </View>
            </ScrollView>
        );
    }
}