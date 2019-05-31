import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss';

export default class Banner extends Component {
    constructor () {
      this.state = {
        autoplay: true,
        swiperIndex: 0
      };
    }
    handleSwiperChange = (e) => {
        const currentIndex = e.detail.current;
        if (currentIndex === 2) {
          this.setState({
            autoplay: false
          });
        }
    
        this.setState({
          swiperIndex: currentIndex
        });
      }
    
      render () {
        const { autoplay, swiperIndex } = this.state;
        return (
            <View className='swiperWrapper'>
              <Swiper
                className='swiper'
                onChange={this.handleSwiperChange}
                interval='5000'
                autoplay={autoplay}>
                <SwiperItem>
                    <Image mode='aspectFill' src='https://img.nike.com.hk/resources/mobileTemplate/mobileHeroProductRotatingModule/20190529175954.jpg' />
                    <View className='swiperItem-content'>
                      <Text className='swiperItem-title'>独家福利 会员专享</Text>
                      <Text className='swiperItem-desc'>独享装备、专业指导和各种独家体验</Text>
                    </View>
                </SwiperItem>
                <SwiperItem>
                  <Image mode='aspectFill' src='https://img.nike.com.hk/resources/mobileTemplate/mobileKvModule/20190522141703.png' />
                  <View className='swiperItem-content'>
                      <Text className='swiperItem-title'>独家福利 会员专享</Text>
                      <Text className='swiperItem-desc'>独享装备、专业指导和各种独家体验</Text>
                    </View>
                </SwiperItem>
                <SwiperItem>
                  <Image mode='aspectFill' src='https://img.nike.com.hk/mobile/images/memberShip/nikeplus-hub/kv.png' />
                  <View className='swiperItem-content'>
                      <Text className='swiperItem-title'>独家福利 会员专享</Text>
                      <Text className='swiperItem-desc'>独享装备、专业指导和各种独家体验</Text>
                    </View>
                </SwiperItem>
              </Swiper>
              <View className='swiperIndicator'>
                <View className={swiperIndex === 0 ? 'active' : ''}></View>
                <View className={swiperIndex === 1 ? 'active' : ''}></View>
                <View className={swiperIndex === 2 ? 'active' : ''}></View>
              </View>
            </View>
        );
      }
}