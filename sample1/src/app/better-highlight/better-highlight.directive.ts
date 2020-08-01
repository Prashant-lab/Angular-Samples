import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = 'blue';


  @HostBinding('style.backgroundColor') backgroundColor:string ;//default value to not get any error
 
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    //ngOnInit execute before anything is render
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}

//when we are using @HostBinding we don't need to pass the element reference inside a constructor and pass renderer only when we are using it.