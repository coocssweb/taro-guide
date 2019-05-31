import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Text, Image } from '@tarojs/components'
import './index.scss';

export default class Stroies extends Component {
    render () {
        return (
            <View className='stories'>
                <View className='stories-header'>
                    <Text className='stories-title'>精彩好故事</Text>
                    <Text className='stories-desc'>最好的故事、为你推荐不容错过的好故事。</Text>
                </View>
                <View className='story'>
                    <Image mode='aspectFill' className='story-photo' src='https://c.static-nike.com/a/images/f_auto/w_1536,c_limit/wt0kiegic12tbxzphe0g/nikecom-homepage-cn-527.jpg' />
                    <Navigator url='/pages/detail/index' className='story-cover'></Navigator>
                    <View className='story-content'>
                        <Text className='story-title'>看我多玩会</Text>
                        <Text className='story-desc'>儿童节系列</Text>
                        <Navigator url='/pages/detail/index' className='story-link' hover-class='story-link--hover'>了解更多</Navigator>
                    </View>
                </View>
                <View className='story'>
                    <Image mode='aspectFill' className='story-photo' src='https://c.static-nike.com/a/images/f_auto/w_1536,c_limit/wt0kiegic12tbxzphe0g/nikecom-homepage-cn-527.jpg' />
                    <Navigator url='/pages/detail/index' className='story-cover'></Navigator>
                    <View className='story-content'>
                        <Text className='story-title'>看我多玩会</Text>
                        <Text className='story-desc'>儿童节系列</Text>
                        <Navigator url='/pages/detail/index' className='story-link' hover-class='story-link--hover'>了解更多</Navigator>
                    </View>
                </View>
            </View>
        );
    }
}