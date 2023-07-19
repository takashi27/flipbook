import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public pass = '';  
  public show = false;  
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor( config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  comprobar(){
    if (this.pass === 'unsolocorazon2020'){
      this.passEntry.emit(this.pass);
    }
    else{
      this.show = true;
    }
    
  } 

  ngOnInit(): void {
  }

}
