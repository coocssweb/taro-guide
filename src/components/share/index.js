import Taro, { Component } from '@tarojs/taro'
import { Button, View } from '@tarojs/components'
import Popup from '../popup';
import './index.scss';

export default class Share extends Component {
    constructor () {
        this.state = {
            visible: false
        }
    }

    handleGeneratePoster = () => {

    }

    handleOpenShare = () => {
        this.setState({
            visible: true
        });
    }

    onCloseShare = () => {
        this.setState({
            visible: false
        });
    }

    render () {
        return (
            <View>
                <Button onClick={this.handleOpenShare} className='share-name'>{this.props.name}</Button>
                <Popup visible={this.state.visible} onClose={this.onCloseShare}>
                    <View className='share-content'>
                        <View className='share-title'># 分享 #</View>
                        <View className='share-body'>
                            <Button className='share-btn' onClick={this.handleGeneratePoster}>生成海报</Button>
                            <Button openType='share' className='share-btn'>转发给好友</Button>
                        </View>
                    </View>
                </Popup>
            </View>
        );
    }
}

Share.defaultProps = {
    name: '去分享'
};