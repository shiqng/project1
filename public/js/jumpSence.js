//设置全局messages事件
const content = window;
//全景触发页面出现方法
content['messageBtns'] = function (e){
    //发送postMessage消息
    content.parent.postMessage({
        e,
        type: 1
    }, content.parent.location.origin);
    //处理跨域问题
};

//全景触发存储当前场
content['nowSence'] = function (e){
    //发送postMessage消息
    content.parent.postMessage({
        e,
        type: 2
    }, content.parent.location.origin);
    //处理跨域问题
};

