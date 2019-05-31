import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';

export default class Popup extends Component {
    static prefixCls = 'popup';
    constructor () {
        // this.haveOpened = false;
        this.state = {
            
        };
    }

    handleMaskClick = () => {
        this.props.onClose();
    }

    render () {
        const { visible } = this.props;
        // ##todo， 
        // haveOpened false =>return null
        // 发现有问题，后续可以优化性能
        // this.haveOpened = this.haveOpened || visible;
        console.log(visible);
        return (
            <View className={`popup ${visible ? 'popup--open' : ''}`}>
                <View onClick={this.handleMaskClick}
                  className={`popup-mask ${visible ? 'popup-mask--open' : ''}`}></View>
                <View className={`popup-content ${visible ? 'popup-content--open' : ''}`}>
                    { this.props.children }
                </View>
            </View>
        );
    }
}

Popup.defaultProps = {
    visible: false,
    onClose: () => {}
};