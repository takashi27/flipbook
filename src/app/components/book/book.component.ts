import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {  
  public mostrar = false;
  

  constructor(private modalService: NgbModal, config: NgbModalConfig) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  

  ngOnInit(): void {
    const modal = this.modalService.open(ModalComponent,{ centered: true });
    modal.componentInstance.passEntry.subscribe((resp)=>{
      console.log(resp);
      if (resp === 'unsolocorazon2020'){
        this.mostrar = true;
        this.modalService.dismissAll();
        function theKingIsBlackPageCallback(n) {
          return {
            type: 'image',
            src: 'books/theKingIsBlack/TEL_TRANSFORMACCION_V1_INDIVIDUAL-'+(n+1)+'.png',
            interactive: true
          };
        }
        ($('.flip-book-container') as any).FlipBook({
          pageCallback: theKingIsBlackPageCallback,
          pages: 34,
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
              if(n == 2){
                clb([{
                  css: [
                    '.pagina-1 {',
                      'position: absolute;',
                      'left: 50%;',
                      'top: 495px;',
                      'transform: translate(-50%, 0);',
                      'background-color: black;',                  
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-1" width="890" height="820" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-1.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Video-Editorial-Fabian.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 8){
                clb([{
                  css: [
                    '.pagina-2 {',
                      'position: absolute;',
                      'left: 48%;',
                      'top: 787px;',
                      'transform: translate(-50%, 0);',     
                      'background-color: black;',               
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-2" width="780" height="710" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-2.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Video-traslado-casa-marzo-2020.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 10){
                clb([{
                  css: [
                    '.pagina-3 {',
                      'position: absolute;',
                      'left: 48%;',
                      'top: 690px;',
                      'transform: translate(-50%, 0);',   
                      'background-color: black;',   
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-3" width="800" height="710" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-3.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Video-HR-Bienestar-Anita.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 16){
                clb([{
                  css: [
                    '.pagina-4 {',
                      'position: absolute;',
                      'left: 33%;',
                      'top: 330px;',
                      'transform: translate(-50%, 0);',  
                      'background-color: black;',                   
                      
                    '}',
                    '.pagina-5 {',
                      'position: absolute;',
                      'left: 63%;',
                      'top: 960px;',
                      'transform: translate(-50%, 0);', 
                      'background-color: black;',                    
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-4" width="645" height="590" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-4.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Mara-Alejandra-Hija-Erika-Torres-HRBP.mp4 " type="video/mp4"></video> <video class="pagina-5" width="590" height="540" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-5.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Danna-Valeria-Hija-Liliana-Riveros-Spv-servicio-cliente.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 21){
                clb([{
                  css: [                
                    '.pagina-6 {',
                      'position: absolute;',
                      'left: 76%;',
                      'top: 1190px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                 
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-6" width="410" height="370" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-6.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Giovanni-Moya-Site-Bogota-Televentas.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 22){
                clb([{
                  css: [                
                    '.pagina-7 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 615px;',
                      'transform: translate(-50%, 0);',   
                      'background-color: black;',                 
                      
                    '}',
                    '.pagina-8 {',
                      'position: absolute;',
                      'left: 69%;',
                      'top: 700px;',
                      'transform: translate(-50%, 0);',  
                      'background-color: black;',                  
                      
                    '}',
                    '.pagina-9 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 1100px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',
                    '.pagina-10 {',
                      'position: absolute;',
                      'left: 69%;',
                      'top: 1190px;',
                      'transform: translate(-50%, 0);',            
                      'background-color: black;',       
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-7" width="410" height="370" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-7.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Darly-Lourido-Retencion-Colombia-Cali.mp4" type="video/mp4"></video> <video class="pagina-8" width="410" height="370" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-8.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Hija-Patricia-Cupitra-Analista-Senior-Vendors.mp4" type="video/mp4"></video> <video class="pagina-9" width="410" height="370" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-9.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Hijo-Arleydher-Viveros-Retencion-Peru-Cali.mp4" type="video/mp4"></video> <video class="pagina-10" width="410" height="370" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-10.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Sandra-Ariza-Analista-Outbound.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 30){
                clb([{
                  css: [                
                    '.pagina-11 {',
                      'position: absolute;',
                      'left: 49%;',
                      'top: 300px;',
                      'transform: translate(-50%, 0);',       
                      'background-color: black;',              
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-11" width="685" height="630" poster="https://flip-book-telecenter.web.app/assets/CAPTURA-11.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/Video-Ingreso-100-Digital-Oct-2020-TLC-COL.mp4" type="video/mp4"></video>'
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



