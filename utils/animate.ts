/**
 * @作者: Seale
 * @时间: 2022/6/7
 * @版本: V1.0
 * @说明: animate 动画工具类
 */
import {Ref} from "@vue/reactivity";

export const animateCss = (elementRef: Ref<HTMLElement>, animation: string, cb?: Function, delShow: boolean = false) => {
    const htmlNode = elementRef.value;
    animation.split(' ').forEach((value)=>{
        htmlNode.classList.add(value);
    })

    function handleAnimationEnd(event) {
        event.stopPropagation();
        animation.split(' ').forEach(val=>{
            if (val !== 'show') htmlNode.classList.remove(val);
        })
        if (cb != null) cb();
    }
    htmlNode.addEventListener('animationend', handleAnimationEnd, {once: true});
}
