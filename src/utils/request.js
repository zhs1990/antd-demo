let httpUrl = "http://subsidiary.ncdev.chuangshiqilin.cn/";

function request( url , data = {} , doSuccess , doFail ){
    fetch(httpUrl+url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((res)=>{
        res.json().then((data) => {
            doSuccess&&doSuccess(data);
        })
    }).catch((res)=>{
        console.log(res,"请求失败")
        //doFail&&doFail(res);
    })
}
export default request;