# KanNotify.js

 
## 簡介 

KanNotify係一個簡易的消息提示jquery插件。<br>
KanNotify is a simple jQuery plugin that makes webpage notification easy. <br>



## 用法 usage 
### 引入頁面  <small>Add it to your page </small> 
先引入jQuery。 <br>
引入樣式與JS文件：

```javascript
<link rel="stylesheet" href="../src/kanNotify.css" >
<script src="../src/kanNotify.js"></script>
```

### 使用  <small>How to work? </small> 
添加一個彈出通知：

```javascript
$.kanNotify.add('汝之消息也');
```

或

```javascript
$.kanNotify.add({msg:'汝之消息也'});
```

例：點擊一個按鈕彈出通知：

```HTML
<button onclick="$.kanNotify.add('测试成功','success');"></button>
```

此彈出通知有五種樣式可選，分別為`success`、`error`、`info`、`warning`、`default`，默認為`default`。 使用時，設置在options的type上。例如慾弹出一個success的通知：

```javascript
$.kanNotify.add('汝之消息也',{type:'success'});
```

亦可:

```javascript
$.kanNotify.success('汝之消息也');
```

其它樣式如此類推，

```javascript
$.kanNotify.success('汝之消息也');
$.kanNotify.error('汝之消息也');
$.kanNotify.info('汝之消息也');
$.kanNotify.warning('汝之消息也');
```

*注： 消息之首帶一圖標，根據汝所選之通知樣式不同而不同，默認使用`Font Awesome`字體圖標，汝何於CSS中或本插件之OPTIONS中自行設置。*


## 設置 OPTIONS 

```javascript
$.kanNotify.add('string',{options});
```
### 位置 position

默認于右下角，汝可自行決定具體位置。

```javascript
{position:{"right":5,"bottom":50}} //this is default
```
### 類型 type

有`success`、`error`、`info`、`warning`、`default`、`debug`六種類型，默認為`default`

```javascript
{type:'success'} //default is 'default' 
```

### 消息 msg

要顯示的消息內容

```javascript
{msg:'要顯示的消息內容'}  
```

### 圖標 icon 
彈出的消息開頭，會有一圖標，其默認會根據你所設的類型(type)不同而不同，type所對應的圖標，預設在iconDefault中。

```javascript
iconDefault : {'info':'fa-info-circle','error':'fa-exclamation-circle','success':'fa-check-circle','warning':'fa-warning','default':'fa-chevron-circle-right','debug':'fa-bug'}
} 
```

本作使用`Font Awesome`字體圖標，若單獨指定使用某圖標，可於icon設置中直接書寫對應圖標之class即可，

```javascript
{icon:'fa-fire'} 
```

若你不想使用 `Font Awesome`，可在CSS中自行設置該圖標樣式。

### 容器寬度 wrapperWidth 
設置容器寬度，默認為auto，一行而過，長短不一，若要固定寬度，側設定wrapperWidth之值即可：

```javascript
{wrapperWidth:300} //default is 'auto' 
```
### 允許手動關閉 allow_dismiss 
默認於通知框的右上角有個關閉按鈕`×`，可手動關閉彈出的通知框。设为false時，此按鈕將不會出現。

```javascript
{allow_dismiss:false} //default is true 
```

### 自動關閉時間 auto_dismiss 
彈出的通知框默認4000毫秒將自動關閉。设为0時，彈出的通知框將不會自動關閉。

```javascript
{auto_dismiss:0} //default is 4000 
```


### Callback 
若options中設有callback函路，當執行完彈出通知會，會調用此函數，

```javascript
{callback:function(response){console.log(response);} 
```
返回的参数response为

```javascript
{
  'qid':qid,   //該通知所隨機生成的編碼
  'itemId':itemId, //該通知框所對應的ID，
  'type': msgType //該通知的類型
}
```
## 方法

### add 方法
此方法為添加通知框的基本方法，有三個參數，
msg 為彈出的消息内容,
type 為通知類型，可缺省
options 為設置，可缺省。

```javascript
$.kanNotify.add(msg,type,options);
```
*其中options可在此三个參數中的任一位置，當options寫在第一或第二個參數時，之後參數自動無效。
當第二或第三個參為函數時，完成彈出通知會將執行該函數。当第二個參數為函數時，第三個參數自動無效。*


### success error info warning 方法
此四方法基于add方法，參數msg 為彈出的消息内容, options 为設置，可缺省。

```javascript
$.kanNotify.success(msg,options);
```
*當第二個參數為函數時，完成彈出通知會將執行該函數*


### close 方法
關閉指定ID的彈出框，
參數itemId 指定消息彈出框的ID，
參數fade 是否渐隐離開，缺省時為false。

```javascript
$.kanNotify.close(itemId,fade);
```
### closeAll 方法
關閉所有消息彈出框，

```javascript
$.kanNotify.closeAll();
```
### setting 方法
更改kanNotify之默認設置，

```javascript
$.kanNotify.setting(options);
```


----------
> Website: https://github.com/waterbeside/kanNotify <br>
> QQ: 454831746