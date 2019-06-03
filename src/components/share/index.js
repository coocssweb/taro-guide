import Taro, { Component } from '@tarojs/taro'
import { Button, View } from '@tarojs/components'
import Popup from '../popup';
import './index.scss';

export default class Share extends Component {
    constructor () {
        this.state = {
            visible: false
        };


    }

    handleGeneratePoster = () => {
        this.props.onGeneratePoster();
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
                <View onClick={this.handleOpenShare}>
                {
                    this.props.children
                }
                </View>
                <Popup visible={this.state.visible} onClose={this.onCloseShare}>
                    <View className='share-content'>
                        <View className='share-title'># 分享 #</View>
                        <View className='share-body'>
                            <Button className='share-btn' onClick={this.handleGeneratePoster}>
                                <View className='share-icon share-icon--download' />
                                生成分享海报
                            </Button>
                            <Button openType='share' className='share-btn'>
                                <View className='share-icon share-icon--wechat' />
                                转发给好友
                            </Button>
                        </View>
                    </View>
                </Popup>
            </View>
        );
    }
}

Share.defaultProps = {
    name: '去分享',
    render: () => {}
};