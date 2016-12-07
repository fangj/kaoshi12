/**
 * 用于导出试卷的工具函数
 */

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return ia;
}



/**
 * 取得图片内容
 * obj:{gid,w,h}
 * gid为图片节点id,也是img dom元素id
 * w,h分别为宽与高
 * 图片内容和尺寸会记录到全局变量imgs和imgsSize中
 * 供Docxgen的imageModule使用
 * 详见manage.html中的saveAsDocx相关代码
 */
window.imgs={};//暴露给全局
window.imgsSize={};//暴露给全局
function getImgBlob(obj){ //收集图片到imgs中
  var imgID=obj.gid;
  var img = document.getElementById(imgID),
  canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d');
  var imgBlob;
  canvas.width=img.width;
  canvas.height=img.height;
  ctx.drawImage(img,0,0,img.width,img.height);
  var dataURL = canvas.toDataURL();
  imgBlob=dataURItoBlob(dataURL);
  imgs[imgID]=imgBlob;
  imgsSize[imgID]=[obj.w,obj.h];
  canvas=null;
  console.log(imgs,imgsSize);
}

module.exports={
  getImgBlob
}