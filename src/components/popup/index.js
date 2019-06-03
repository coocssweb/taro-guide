import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss';

export default class Popup extends Component {
    static prefixCls = 'popup';
    constructor () {
        // this.haveOpened = false;
        // css3动画状态
        this.animating = false;
        this.state = {
            hide: false
        };
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.visible && nextProps.visible !== this.props.visible) {
            this.animating = true;
        }
    }

    handleMaskClick = () => {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.setState({
            hide: true
        });
    }

    handleContentAnimationEnd = () => {
        this.animating = false;
        if (!this.state.hide) {
            return;
        }

        this.props.onClose();
        this.setState({
            hide: false
        });
    }

    render () {
        const { visible } = this.props;
        const { hide } = this.state;
        // ##todo， 
        // haveOpened false =>return null
        // 发现有问题，后续可以优化性能
        // this.haveOpened = this.haveOpened || visible;
        let maskCls = `popup-mask `;
        let contentCls = 'popup-content ';
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
                <View className={contentCls} 
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