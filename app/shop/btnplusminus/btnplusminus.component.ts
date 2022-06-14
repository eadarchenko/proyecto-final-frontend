import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btnplusminus',
  templateUrl: './btnplusminus.component.html',
  styleUrls: ['./btnplusminus.component.scss']
})
export class BtnplusminusComponent implements OnInit {

   i=1;
  counterValue = 0;
  @Output() counterChange = new EventEmitter<number>();
  @Input()
  get counter() {return this.counterValue;}

  constructor() { }

  ngOnInit(): void { }

  set counter(value) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }
  plus(){
    if(this.i !=100){
      this.i++;
      this.counter=this.i;
    }
  }
  minus(){
    if(this.i !=0){
      this.i--;
      this.counter=this.i;
    }
  }
}
