import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.scss']
})
export class AppComponent {
  loginData = {
    phone:'',
    pwd:''
  };
  msg = '';
  loginstate = true;

  subLoginAction (data): void {
    console.log(data);
    if(!data.phone && !data.pwd){
      this.msg = '请输入帐号密码';
      return;
    }else if(!data.phone){
      this.msg = '请输入帐号';
      return;
    }else if(!data.pwd){
      this.msg = '请输入密码';
      return;
    }else{
      this.msg = '';
      this.loginstate = false;
      console.log('登陆成功');
    }
  }
}
