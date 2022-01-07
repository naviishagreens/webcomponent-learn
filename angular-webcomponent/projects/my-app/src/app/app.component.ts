import { Component } from '@angular/core';
import { MyMath } from '@navisha/plainjs';
// import { MyMath, OtherMath } from '@navisha/plainjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  myname="hello world";

  sum() {
    let m = new MyMath();
    const s = m.sumnum(10, 20);
    console.log(s);
  }

  mul() {
    // let m = new OtherMath();
    // const s = m.mulnum(10, 20);
    // console.log(s);
  }



}
