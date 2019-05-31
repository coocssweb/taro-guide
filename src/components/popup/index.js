import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';

export default class Popup extends Component {
    static prefixCls = 'popup';
    constructor () {
        // this.haveOpened = false;
        this.state = {
            hide: false
        };
    }

    handleMaskClick = () => {
        this.props.onClose();
    }

    handleContentAnimationEnd = () => {

    }

    render () {
        const { visible } = this.props;
        const { hide } = this.state;
        // ##todo， 
        // haveOpened false =>return null
        // 发现有问题，后续可以优化性能
        // this.haveOpened = this.haveOpened || visible;
        console.log(visible);
        const maskCls = `popup-mask `;
        const contentCls = 'popup-content';
        if (visible) {
            maskCls += 'popup-mask--open ';
            contentCls += 'popup-content--open ';
        }
        if (hide) {
            maskCls += 'popup-mask--hide ';
            contentCls += 'popup-content--hide ';
        }

        return (
            <View className={`popup ${visible ? 'popup--open' : ''}`}>
                <View onClick={this.handleMaskClick}
                  className={maskCls}></View>
                <View className={`popup-content ${visible ? 'popup-content--open' : ''}`} 
                  onAnimationEnd={this.handleContentAnimationEnd}>
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