import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Text, Image, RichText, Button, Canvas } from '@tarojs/components';
import Share from '../../components/share';
import './index.scss';

const shareImage = 'https://c.static-nike.com/a/images/f_auto/w_1536,c_limit/wt0kiegic12tbxzphe0g/nikecom-homepage-cn-527.jpg';

export default class Detail extends Component {
    shareFilePath: null;

    onShareAppMessage = () => {
        return {
            title: '好莱坞人像布光课',
            path: '/pages/detail/index',
            imageUrl: shareImage
        };
    }

    handleGeneratePoster = () => {
        const getImageInfo = (src) => {
            return new Promise ((resolve, reject) => {
                Taro.getImageInfo({
                    src, 
                    success: (imageInfo) => {
                        resolve(imageInfo)
                    },
                    fail: (error) => {
                        reject(error);
                    }
                })
            });
        };

        const generator = () => {
            return new Promise((resolve, reject) => {
                if (this.shareFilePath) {
                    resolve(this.shareFilePath);
                }
                const ctx = Taro.createCanvasContext('detail-canvas');
                getImageInfo(shareImage).then((imageInfo) => {
                    console.log(imageInfo);
                    ctx.drawImage(shareImage.path, 0, 0, imageInfo.width, imageInfo.height);
                    try {
                        ctx.draw(false, () => {
                            console.log(222);
                            Taro.canvasToTempFilePath({
                                canvasId: 'detail-canvas',
                                quality: 1,
                                width: 750,
                                height: 1078,
                                destWidth: 750,
                                destHeight: 1078,
                                success: res => {
                                    resolve(res.tempFilePath);
                                },
                                fail(e){
                                    reject(e);
                                }
                            });
                        });
                    } catch (e) {
                        console.log(e);
                    }
                    
                }, (error) => {
                    reject(error);
                });
            });
        }

        generator().then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });
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
                    <Canvas id='detail-canvas' style='width:750px;height:1078px; position: absolute; z-index: -1; top: -2078px;' />
                    <Share onGeneratePoster={this.handleGeneratePoster}>
                        <Button className='detail-share'>分享给朋友</Button>
                    </Share>
                </View>
            </ScrollView>
        );
    }
}