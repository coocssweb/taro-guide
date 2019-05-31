import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Banner from './banner';
import Stroies from './stroies';

export default class Home extends Component {
  constructor () {
    this.state = {};
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View className='home'>
          <Banner />
          <Stroies />
        </View>
    );
  }
}
