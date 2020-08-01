import { Component, OnInit ,EventEmitter,Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() ServerAdded = new EventEmitter<{serverName :string,serverContent :string}>();
  @Output() BlueprintAdded = new EventEmitter<{serverName :string,serverContent :string}>();

  @ViewChild('serverContentInput', {static: false}) serverContentInput:ElementRef;

 // newServerName = '';
 //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement){
   this.ServerAdded.emit({serverName:serverNameInput.value, serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement){
    //this.serverContentInput.nativeElement.value = 'something';
    //"do not do the above thing, you should not access the DOM like this, angular offers us a better way of doing this, we learn this in directive section using string interpolation or property binding, if we want to output something in the DOM"
    this.BlueprintAdded.emit({serverName:serverNameInput.value, serverContent:this.serverContentInput.nativeElement.value});
  }

}
