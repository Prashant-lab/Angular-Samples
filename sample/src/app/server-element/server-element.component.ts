import { Component, OnInit, Input, ViewEncapsulation, OnChanges,  SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() element:{ type:string, name:string, content:string}
  @Input() name:string;
  @ViewChild('heading', {static:true}) header:ElementRef;
  @ContentChild('paragraphContent',{static:true}) paragraph:ElementRef;

  constructor() { console.log('constructor executed'); }

  ngOnChanges (changes: SimpleChanges){
    console.log('ngOnChanges executed');
    console.log(changes);
    console.log(this.name);
  }

  ngOnInit() {
    console.log('ngoninit executed');
    console.log( ' text is:'+ this.header.nativeElement.textContent);
    console.log('text content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck executed');

  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit executed');
    console.log('text content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){

    console.log('ngAfterContentchecked executed');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit executed');
    console.log( ' text is:'+ this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewchecked executed');
  }

  ngOnDestroy(){
    console.log('ondestroycalled!');
  }
}
