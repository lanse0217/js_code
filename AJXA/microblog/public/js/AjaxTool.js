(function (w){
    function AjaxTool(){}
    AjaxTool.ajaxRequest=function (url,paramsObj,successCallBack,failedCallBack){
            //1.创建一个请求对象
            let xhr=new XMLHttpRequest();
            //2.准备发送
            xhr.open('get',`${url}?${getStrWithObj(paramsObj)}`,true);//没有参数直接调用接口，有参数用拼接的方式
            //3.发送请求
            xhr.send();
            //4.监听服务端相应
            xhr.addEventListener('readystatechange',()=>{
                console.log(xhr.readyState);
                if(xhr.readyState===4){
                    if(xhr.status===200){
                        successCallBack && successCallBack(xhr.response);
                    }
                    else {
                        failedCallBack && failedCallBack(xhr.response);
                    }
                }
            })
    }
    function  getStrWithObj(paramsObj){
         let resArr=[];
         for(let key in paramsObj){
             let str=`${key}=${paramsObj[key]}`;
             resArr.push(str);
         }
         //返回字符串
        return resArr.join("&");
    }
    w.AjaxTool=AjaxTool;
})(window);