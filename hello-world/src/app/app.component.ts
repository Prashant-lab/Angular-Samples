import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `

    <h1>cool<h1>
    <div *ngfor = "let color of colors">
      <h2>{{color}}</h2>
    </div>

    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public colors = ["red","yellow","green","blue"];
}
