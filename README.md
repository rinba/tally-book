# 准备工作<br/>
**本项目需要的npm包如下所示：**<br/>
![image](https://user-images.githubusercontent.com/106224527/233843424-3c4db5f3-7bc5-475b-8c62-c64283310f5a.png)<br/>
**bilibili数据库存储着默认的“列表页”信息**<br/>
![image](https://user-images.githubusercontent.com/106224527/233845652-c75a3aff-c3c0-4e45-80cf-0378762b47ce.png)<br/>

# 记账本介绍<br/>
**1.在命令行中输入mongod打开bilibili数据库的服务端，如下所示：**<br/>
![image](https://user-images.githubusercontent.com/106224527/233841882-816082f2-dad4-49e3-8b18-cd3e0cde6ed3.png)<br/>
**2.在vscode的终端中输入npm start运行express工程（默认监听3000端口）**<br/>
![image](https://user-images.githubusercontent.com/106224527/233843649-0f163441-ee71-4571-8776-1d8fa29f6e14.png)<br/>

## 注册页<br/>
**3.我们在浏览器中输入127.0.0.1:3000/reg，进入项目的“注册页”**<br/>
![image](https://user-images.githubusercontent.com/106224527/233845206-f6ac0fe7-eb8b-4449-a49a-c61bf9b703c2.png)<br/>
**4.输入用户名（jack）和密码（1234），点击注册**<br/>
![image](https://user-images.githubusercontent.com/106224527/233845245-1ee14bc8-3695-44a4-b886-2ddcdf672c8a.png)<br/>
**此时bilibili数据库中会出现一个users集合，里面放着我们的用户名和密码**<br/>
![image](https://user-images.githubusercontent.com/106224527/233845462-bae30994-3c35-4336-ab0f-312de7f90024.png)<br/>
**5.注册成功后，点击跳转，跳转到“登录页”**<br/>
![image](https://user-images.githubusercontent.com/106224527/233845257-90978bcc-3271-4833-a0aa-c767cc2f7651.png)<br/>
![image](https://user-images.githubusercontent.com/106224527/233845725-c491c146-41a6-4990-94b2-b7a46c120dcd.png)<br/>


## 登录页<br/>
**6.我们也可以重新打开浏览器中输入127.0.0.1:3000，它会自动跳转到127.0.0.1:3000/login（已做重定向处理）**<br/>
![image](https://user-images.githubusercontent.com/106224527/233842854-8043dfca-ac53-4354-84fc-1da3d8f4a49c.png)<br/>
![image](https://user-images.githubusercontent.com/106224527/233842995-4674290a-bd06-4ee7-8073-751ce5e35371.png)<br/>
**7.1当我们输入错误的用户名和密码，如下所示：**<br/>
![image](https://user-images.githubusercontent.com/106224527/233843727-df913fb6-59c6-4d44-b219-3f8a2f856692.png)<br/>
![image](https://user-images.githubusercontent.com/106224527/233843739-937abc5c-dddb-4abb-9ed8-6d6f9d206cac.png)<br/>
**7.2当我们输入正确的用户名和密码，如下所示，接着点击跳转，进入“列表页”**<br/>
![image](https://user-images.githubusercontent.com/106224527/233843779-325bd46a-4356-4199-acc6-ea72481571df.png)<br/>
![image](https://user-images.githubusercontent.com/106224527/233843786-0e58160d-4a8d-4af5-a665-8562f1f0042e.png)<br/>

## 列表页<br/>
![image](https://user-images.githubusercontent.com/106224527/233843877-759ce4e0-6512-48c0-840e-a21f7104ad3e.png)<br/>
**8.在列表页中点击任意一项后面的叉号，可以将任意一项账单删除**<br/>
![image](https://user-images.githubusercontent.com/106224527/233843922-f9dcd401-accd-49f5-9bf3-abb6985ff677.png)<br/>
![image](https://user-images.githubusercontent.com/106224527/233843993-238c67f0-6967-4410-8256-97d852a36af0.png)<br/>
**9.删除成功后，点击跳转，如下所示：**<br/>
![image](https://user-images.githubusercontent.com/106224527/233844031-a0979fc3-9b56-40c8-b7a2-67be266a4a78.png)<br/>
**10.点击右上角的添加账单按钮，进入“添加页”**<br/>

## 添加页<br/>
![image](https://user-images.githubusercontent.com/106224527/233844107-8e7e6f05-b92f-444a-979a-9ab60a61947e.png)<br/>
**11.填写表单，点击添加按钮，添加成功后，点击跳转，回到“列表页”**<br/>
![image](https://user-images.githubusercontent.com/106224527/233844159-a5d514ab-f962-4e6e-a23e-7db0c52089ba.png)<br/>
![image](https://user-images.githubusercontent.com/106224527/233844221-24c0ef27-c454-43e5-85ae-9385579f51c3.png)<br/>
**此时列表页新增逛商场的账单记录**<br/>
![image](https://user-images.githubusercontent.com/106224527/233844355-ce9a419e-e91d-469a-ada7-a5a55066992f.png)<br/>
**12.点击右上角的退出按钮，接着点击跳转，回到“登录页”**<br/>
![image](https://user-images.githubusercontent.com/106224527/233844392-87fb934f-5693-4962-b8bc-1207d6d41287.png)<br/>
![image](https://user-images.githubusercontent.com/106224527/233844422-b7280552-7257-4f78-af4f-58749080b483.png)<br/>





