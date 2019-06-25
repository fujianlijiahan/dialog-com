## 使用
### *npm i dialog-com*
### *import dialogCom from 'dialog-com'*
#### vue的弹出模态框,dialog,modal
```
<dialog-com 
    :title="title"
    append-to-body
    width="50%"
    :fullScreen="false"
    :closeOnClickModal="true"
    :closeOnPressEscape="true"
    :visible="false">
        <html></html>
    <dialog-com>

```
<table>
<tr>
<th>属性</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
<th>备注</th>
</tr>

<tr>
<td>title</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>标题</td>
</tr>

<tr>
<td>append-to-body</td>
<td>Boolean</td>
<td>true/false</td>
<td>true</td>
<td>将modal添加到body下</td>
</tr>

<tr>
<td>width</td>
<td>String</td>
<td>%/px/vw</td>
<td>50%</td>
<td>-</td>
</tr>

<tr>
<td>fullScreen</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>是否全屏</td>
</tr>

<tr>
<td>closeOnClickModal</td>
<td>Boolean</td>
<td>true/false</td>
<td>true</td>
<td>点击Modal关闭弹出框</td>
</tr>

<tr>
<td>closeOnPressEscape</td>
<td>Boolean</td>
<td>true/false</td>
<td>true</td>
<td>按下ESC关闭弹出框</td>
</tr>

<tr>
<td>visible</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>显示弹出框</td>
</tr>

</table>


