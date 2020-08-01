import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'testserver',content:'just a server!'}];


  onServerAdded(eventData:{serverName :string,serverContent :string}){
    this.serverElements.push({
      type:'server',
      name : eventData.serverName,
      content:eventData.serverContent
    });
  }

  onBlueprintAdded(eventData:{serverName :string,serverContent :string}){
    this.serverElements.push({
      type:'blueprint',
      name : eventData.serverName,
      content:eventData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'changed!';
  }
 
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

}
