(function (w){

    function ajaxRequest(url,paramsObj={},isLoad=true,successCallBack,failedCallBack){
        //1.创建一个请求对象
        let xhr=new XMLHttpRequest();
        //2.
        xhr.open("get",`${url}?${getStrWithObj(paramsObj,isLoad)}`,successCallBack,failedCallBack)
        //3
        xhr.send();
        //4
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState===4){
                if(xhr.status===200){
                    successCallBack && successCallBack(xhr.response);
                }
                else {
                    failedCallBack && failedCallBack(xhr);
                }
            }
        })

    }
    function  getStrWithObj(paramsObj,isLoad){
        let Arr=[];
        for( let key in paramsObj){
            let str=`${key}=${paramsObj[key]}`;
            Arr.push(str);
        }
        if(!isLoad){
            //拼接一个字符串时间戳
            Arr.push(`like=${getRandomStr()}`)
        }
        return Arr.join("&");
    }
    //生成时间戳随机字符串
    function  getRandomStr(){
        return Math.random()+(new Date().getTime());
    }
    //只暴露出这个函数
    w.AjaxTool={
        ajaxRequest:ajaxRequest

    }
})(window);