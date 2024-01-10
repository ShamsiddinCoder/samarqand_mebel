import React, {useRef, useState, useCallback} from "react";

export default function ResizeFunction(responce = null){
    let container = useRef();
    let target = useRef();
    let observ = useRef();
    const [boxWidth, setBoxWidth] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);

    let itemx = 0;
    function resizeSlider(){
        if(responce !== null){
            responce.forEach(elem => {
                if(window.innerWidth > elem.breakpoint.width){
                    itemx = elem.breakpoint.item;
                    setItemsCount(itm => itm = elem.breakpoint.item);
                }
            });
        }
        
        let containerWidth = container.current?.offsetWidth;        
        let boxesWidth = Math.floor(containerWidth / itemx);
        setBoxWidth(boxes => boxes = responce !== null ? boxesWidth : containerWidth);
    }
    
    target = useCallback(elem => {
        if(elem){
            observ.current = new ResizeObserver(resizeSlider).observe(elem);
        }
    }, []);

    return [container, target, boxWidth, itemsCount];
};