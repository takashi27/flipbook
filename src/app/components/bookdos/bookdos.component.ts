import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';
import { VisitasService } from '../../services/visitas.service';

@Component({
  selector: 'app-bookdos',
  templateUrl: './bookdos.component.html',
  styleUrls: ['./bookdos.component.css']
})
export class BookdosComponent implements OnInit {

  public mostrar = false;
  

  constructor(private modalService: NgbModal, config: NgbModalConfig, private visitas: VisitasService) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  

  ngOnInit(): void {
    const modal = this.modalService.open(ModalComponent,{ centered: true });
    modal.componentInstance.passEntry.subscribe((resp)=>{
      console.log(resp);
      if (resp === 'unsolocorazon2020'){        
        this.visitas.enviarVisita();
        this.mostrar = true;
        this.modalService.dismissAll();
        function theKingIsBlackPageCallback(n) {
          return {
            type: 'image',
            src: 'books/libro2/TEL_LIBRO_BALANCE-RECURSOS-HUMANOS_V1_'+(n+1)+'.png',
            interactive: true
          };
        }
        ($('.flip-book-container') as any).FlipBook({
          pageCallback: theKingIsBlackPageCallback,
          pages: 36,
          propertiesCallback: function(props) {
            props.cover.color = 0x000000;
            props.cssLayersLoader = function(n, clb) {         
              if(!n) {
                console.log('Hola' + n);
                clb([{
                  css: [
                    '.flip-book-container {',
                      'margin-top: 1rem;',
                      'height: 550px;',
                  '}',
                    '.center-page {',
                      'position: absolute;',
                      'left: 50%;',
                      'top: 50px;',
                      'transform: translate(-50%, 0);',
                      'visibility:hidden',
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<iframe class="center-page" src="https://www.youtube.com/embed/0vrdgDdPApQ" allowfullscreen width="800" height="450"></iframe>'
                }]);
              }              
              if(n == 6){
                clb([{
                  css: [
                    '.audio1 {',
                      'position: absolute;',
                      'left: 57%;',
                      'top: 520px;',
                      'transform: translate(-50%, 0);',                      
                    '}',
                    '.audio2 {',
                      'position: absolute;',
                      'left: 57%;',
                      'top: 780px;',
                      'transform: translate(-50%, 0);',                      
                    '}',
                    '.audio3 {',
                      'position: absolute;',
                      'left: 57%;',
                      'top: 1050px;',
                      'transform: translate(-50%, 0);',                      
                    '}',
                    '.audio4 {',
                      'position: absolute;',
                      'left: 57%;',
                      'top: 1320px;',
                      'transform: translate(-50%, 0);',                      
                    '}',
                     'audio::-webkit-media-controls-panel,',
                     'audio::-webkit-media-controls-mute-button,',
                     'audio::-webkit-media-controls-play-button,',
                     'audio::-webkit-media-controls-timeline-container,',
                     'audio::-webkit-media-controls-current-time-display,',
                     'audio::-webkit-media-controls-time-remaining-display,',
                     'audio::-webkit-media-controls-timeline,',
                     'audio::-webkit-media-controls-volume-slider-container,',
                     'audio::-webkit-media-controls-volume-slider,',
                     'audio::-webkit-media-controls-seek-back-button,',
                     'audio::-webkit-media-controls-seek-forward-button,',
                     'audio::-webkit-media-controls-fullscreen-button,',
                     'audio::-webkit-media-controls-rewind-button,',
                     'audio::-webkit-media-controls-return-to-realtime-button,',
                     'audio::-webkit-media-controls-toggle-closed-captions-button{',                    
                      'background-color: #03A9F4;',
                  '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<audio class="audio1" controls><source src="../../../assets/25-Sep.mp3" type="audio/mpeg"></audio> <audio class="audio2" controls> <source src="../../../assets/05-Oct.mp3" type="audio/mpeg"></audio><audio class="audio3" controls><source src="../../../assets/29-Oct.mp3" type="audio/mpeg"></audio><audio class="audio4" controls><source src="../../../assets/16-Dic.mp3" type="audio/mpeg"></audio>'
                }]);
              }
              if(n == 31){
                clb([{
                  css: [
                    '.audio8 {',
                      'position: absolute;',
                      'left: 72%;',
                      'top: 1165px;',
                      'transform: translate(-50%, 0);',                      
                    '}',
                    '.audio9 {',
                      'position: absolute;',
                      'left: 75%;',
                      'top: 1230px;',
                      'transform: translate(-50%, 0);',                      
                    '}',
                    'audio::-webkit-media-controls-panel,',
                     'audio::-webkit-media-controls-mute-button,',
                     'audio::-webkit-media-controls-play-button,',
                     'audio::-webkit-media-controls-timeline-container,',
                     'audio::-webkit-media-controls-current-time-display,',
                     'audio::-webkit-media-controls-time-remaining-display,',
                     'audio::-webkit-media-controls-timeline,',
                     'audio::-webkit-media-controls-volume-slider-container,',
                     'audio::-webkit-media-controls-volume-slider,',
                     'audio::-webkit-media-controls-seek-back-button,',
                     'audio::-webkit-media-controls-seek-forward-button,',
                     'audio::-webkit-media-controls-fullscreen-button,',
                     'audio::-webkit-media-controls-rewind-button,',
                     'audio::-webkit-media-controls-return-to-realtime-button,',
                     'audio::-webkit-media-controls-toggle-closed-captions-button{',                    
                      'background-color: #03A9F4;',
                  '}'
                  ].join(''),
                  html: '<audio class="audio8" controls><source src="../../../assets/cali.mp3" type="audio/mpeg"></audio> <audio class="audio9" controls> <source src="../../../assets/bogota.mp3" type="audio/mpeg"></audio>'
                }]);
              }
              if(n == 16){
                clb([{
                  css: [
                    '.eje {',
                      'position: absolute;',
                      'left: 58%;',
                      'top: 413px;',
                      'width: 400px;',
                      'height: 50px;',
                      'border: blueviolet 1px;',                      
                  '}',
                    '.eje1 {',
                      'position: absolute;',
                      'left: 58%;',
                      'top: 480px;',
                      'width: 400px;',
                      'height: 50px;',
                      'border: blueviolet 1px;',                      
                  '}',
                    '.eje3 {',
                      'position: absolute;',
                      'left: 58%;',
                      'top: 600px;',
                      'width: 400px;',
                      'height: 400px;',
                      'border: blueviolet 1px;',                      
                  '}'                    
                  ].join(''),
                  html: '<a href="https://ao.adecco.com.co/" target="_blank"><div style="cursor: pointer;" class="eje"></div></a><a href="https://directvco.turecibo.com/e/login" target="_blank"><div style="cursor: pointer;" class="eje1"></div></a><a href="https://directvla.jira.com/servicedesk/customer/portal/33/user/login?destination=portal%2F33" target="_blank"><div style="cursor: pointer;" class="eje3"></div></a>'
                }]);                
              }                            
            
            };
            return props;
          },
          template: {
            html: 'depen/templates/default-book-view.html',
            styles: [
              'depen/css/short-white-book-view.css'
            ],
            links: [
              {
                rel: 'stylesheet',
                href: 'depen/css/font-awesome.min.css'
              }
            ],
            script: 'depen/js/default-book-view.js',
            sounds: {
              startFlip: 'depen/sounds/start.mp3',
              endFlip: 'depen/sounds/end.mp3'
            }
          }
        });
      }
    });   
  }
  ngAfterViewInit(): void {
   
    
  }

}
