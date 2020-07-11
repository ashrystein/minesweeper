import React,{useState,useEffect} from 'react';
import {TouchableOpacity,Text,View,Animated,Easing,Dimensions} from 'react-native';
import styles from './styles';
import {animationConfig,messages} from '../../config/config';
const {width,height} = Dimensions.get('window');


const Popup = (props) => {
    if(props.result === 'playing')
        return null;
        
    let animation = new Animated.Value(0);
    let pulse = new Animated.Value(1);
    const maxValue = animationConfig.up;
    const minValue = animationConfig.down;

    const retry = () => {
        slideAnimationDown();
        setTimeout(()=>{
            props.retry();
        },100)
    }

    const slideAnimationUp = () => {
        animation.setValue(0);
        Animated.timing(animation, {
          toValue: -((height*0.5)-(width*(0.3))),
          duration: 1000,
          easing:Easing.out(Easing.exp),
          useNativeDriver:true
        }).start();
    };

    const slideAnimationDown = () => {
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          easing:Easing.out(Easing.exp),
          useNativeDriver:true
        }).start();
    };

    const pulseAnimation = () => {
        pulse.setValue(1)
        Animated.sequence([
            Animated.timing(pulse, {
                toValue: maxValue,
                duration: 250,
                delay:500,
                useNativeDriver:true
            }),
            Animated.timing(pulse, {
                toValue: minValue,
                duration: 250,
                useNativeDriver:true
            })
        ]).start()
    };

    const animate = () => {
        Animated.sequence([
            slideAnimationUp(),
            pulseAnimation()
        ])
    };

    const transformStyle = {
        transform : [
            {translateY : animation},
            {scale: pulse}
        ]
    }

    useEffect(()=>{
        animate();
    },[])

    return(
        <Animated.View style={[styles.container,transformStyle]}>
            <Text style={styles.message}>{messages[props.result]}</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>retry()}>
                <Text style={styles.btnText}>Retry</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Popup;