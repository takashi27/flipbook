import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-booktres',
  templateUrl: './booktres.component.html',
  styleUrls: ['./booktres.component.css']
})
export class BooktresComponent implements OnInit {
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
            src: 'books/libro3/TEL_LIBRO VOL 3_BALANCE RECURSOS HUMANOS_V1_'+(n+1)+'.jpg',
            interactive: true
          };
        }
        ($('.flip-book-container') as any).FlipBook({
          pageCallback: theKingIsBlackPageCallback,
          pages: 30,
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
                      'top: 720px;',
                      'transform: translate(-50%, 0);',
                      'background-color: black;',                  
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-1" width="890" height="430" poster="books/libro3/CAPTURAS/1.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/1-Videos-Lideres/Telecenter.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 4){
                clb([{
                  css: [
                    '.pagina-2 {',
                      'position: absolute;',
                      'left: 48%;',
                      'top: 387px;',
                      'transform: translate(-50%, 0);',     
                      'background-color: black;',                      
                    '}',
                    '.pagina-n2 {',
                      'position: absolute;',
                      'left: 48%;',
                      'top: 987px;',
                      'transform: translate(-50%, 0);',     
                      'background-color: black;',                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-2" width="900" height="500" poster="books/libro3/CAPTURAS/2.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/2-Incentivos/TELE-Puntos-Mayerlin-Vasquez-Ejecutiva-de-Retencion.mp4" type="video/mp4"></video> <video class="pagina-n2" width="900" height="500" poster="books/libro3/CAPTURAS/3.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/2-Incentivos/TELE-Puntos-Robert-Bernate-Ejecutivo-de-Televentas-Puerto-Rico.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 5){
                clb([{
                  css: [
                    '.pagina-3 {',
                      'position: absolute;',
                      'left: 38%;',
                      'top: 970px;',
                      'transform: translate(-50%, 0);',   
                      'background-color: black;',   
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-3" width="580" height="520" poster="books/libro3/CAPTURAS/4.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/3-Administracion/Premio-BPro-Mejor-Contribucion-en-Responsabilidad-Social/Andres-Duque-Jefe-de-Administracion.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 6){
                clb([{
                  css: [
                    '.pagina-4 {',
                      'position: absolute;',
                      'left: 33%;',
                      'top: 730px;',
                      'transform: translate(-50%, 0);',  
                      'background-color: black;',                   
                      
                    '}',
                    '.pagina-5 {',
                      'position: absolute;',
                      'left: 66%;',
                      'top: 1170px;',
                      'transform: translate(-50%, 0);', 
                      'background-color: black;',                    
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-4" width="580" height="400" poster="books/libro3/CAPTURAS/5.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/3-Administracion/Entrega-de-sillas/Ingrid-Valencia-Ejecutiva-Retencion-Ecuador.mp4" type="video/mp4"></video> <video class="pagina-5" width="580" height="400" poster="books/libro3/CAPTURAS/6.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/3-Administracion/Entrega-de-sillas/Maritza-Acosta-Monito-calidad.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 8){
                clb([{
                  css: [                
                    '.pagina-6 {',
                      'position: absolute;',
                      'left: 49%;',
                      'top: 670px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                 
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-6" width="800" height="710" poster="books/libro3/CAPTURAS/7.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/1-Videos-Lideres/Reconocimiento-GPTW-2020-Pablo-Tarulla-Director-Ejecutivo-Operation-Support-CC-LATAM.mp4" type="video/mp4"></video>'
                }]);
              }
              if(n == 9){
                clb([{
                  css: [                
                    '.pagina-7 {',
                      'position: absolute;',
                      'left: 51%;',
                      'top: 560px;',
                      'transform: translate(-50%, 0);',   
                      'background-color: black;',                 
                      
                    '}',
                    '.pagina-8 {',
                      'position: absolute;',
                      'left: 31%;',
                      'top: 1110px;',
                      'transform: translate(-50%, 0);',  
                      'background-color: black;',                  
                      
                    '}',
                    '.pagina-9 {',
                      'position: absolute;',
                      'left: 73%;',
                      'top: 1140px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-7" width="340" height="320" poster="books/libro3/CAPTURAS/8.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/1-Concurso-de-la-amistad/Johnathan-Turmeque-Ejecutivo-Retencion-Peru.mp4" type="video/mp4"></video> <video class="pagina-8" width="340" height="320" poster="books/libro3/CAPTURAS/9.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/5-Conferencia-Volver-a-empezar/Jhon-Rojas-Ejecutivo-Televentas-Regional.mp4" type="video/mp4"></video> <video class="pagina-9" width="340" height="320" poster="books/libro3/CAPTURAS/10.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/5-Conferencia-Volver-a-empezar/Juliana-Pedroza-Auxiliar-Administracion.mp4" type="video/mp4"></video>'
                }]);
              }             
              if(n == 10){
                clb([{
                  css: [                
                    '.pagina-10 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 240px;',
                      'transform: translate(-50%, 0);',   
                      'background-color: black;',                 
                      
                    '}',
                    '.pagina-11 {',
                      'position: absolute;',
                      'left: 66%;',
                      'top: 160px;',
                      'transform: translate(-50%, 0);',  
                      'background-color: black;',                  
                      
                    '}',
                    '.pagina-12 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 640px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-13 {',
                      'position: absolute;',
                      'left: 66%;',
                      'top: 550px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-14 {',
                      'position: absolute;',
                      'left: 31%;',
                      'top: 1200px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-15 {',
                      'position: absolute;',
                      'left: 67%;',
                      'top: 1220px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-10" width="320" height="300" poster="books/libro3/CAPTURAS/11.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/2-Concurso-dia-del-nino/Ingrid-Ruiz-Ejecutiva-Televentas-Uruguay.mp4" type="video/mp4"></video> <video class="pagina-11" width="320" height="300" poster="books/libro3/CAPTURAS/12.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/3-Chef-Juan-Cocina/Oscar-Quesada-Ejecutivo-Cobranzas-Colombia.mp4" type="video/mp4"></video> <video class="pagina-12" width="320" height="300" poster="books/libro3/CAPTURAS/13.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/4-Diversion-en-vacaciones/Jacobo-Hijo-Katherine-Ruano-Analista-Sr-Adquisicion-Talento.mp4" type="video/mp4"></video> <video class="pagina-13" width="320" height="300" poster="books/libro3/CAPTURAS/14.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/4-Diversion-en-vacaciones/Martin-Hijo-Meriyem-Otalvaro-Gerente-Vendor-Management-Puerto-Rico.mp4" type="video/mp4"></video> <video class="pagina-14" width="320" height="300" poster="books/libro3/CAPTURAS/15.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/6-Entrenamiento-Funcional-con-Ricardo-Montano/Madeline-Fierro-Retencion-Chile-Cali.mp4" type="video/mp4"></video> <video class="pagina-15" width="320" height="300" poster="books/libro3/CAPTURAS/16.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/6-Entrenamiento-Funcional-con-Ricardo-Montano/video-output-646AD928-AB76-4648-AB45-822AE9CF0F44.mp4" type="video/mp4"></video>'
                }]);
              }             
              if(n == 11){
                clb([{
                  css: [                
                    '.pagina-n10 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 320px;',
                      'transform: translate(-50%, 0);',   
                      'background-color: black;',                 
                      
                    '}',
                    '.pagina-n11 {',
                      'position: absolute;',
                      'left: 66%;',
                      'top: 260px;',
                      'transform: translate(-50%, 0);',  
                      'background-color: black;',                  
                      
                    '}',
                    '.pagina-n12 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 750px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-n13 {',
                      'position: absolute;',
                      'left: 66%;',
                      'top: 670px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-n14 {',
                      'position: absolute;',
                      'left: 29%;',
                      'top: 1240px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-n15 {',
                      'position: absolute;',
                      'left: 65%;',
                      'top: 1260px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-n10" width="320" height="300" poster="books/libro3/CAPTURAS/17.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/7-Comparte-tu-pasion/Brayan-Rodriguez-Back-Office-Retencion-Colombia.mp4" type="video/mp4"></video> <video class="pagina-n11" width="320" height="300" poster="books/libro3/CAPTURAS/18.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/7-Comparte-tu-pasion/Dania-Rodriguez-Ejecutiva-Servicio-Cliente-Integral-Chile.mp4" type="video/mp4"></video> <video class="pagina-n13" width="320" height="300" poster="books/libro3/CAPTURAS/20.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/8-Dias-diferentes/Diana-Abril-Ejecutiva-Televentas-Uruguay.mp4" type="video/mp4"></video> <video class="pagina-n14" width="320" height="300" poster="books/libro3/CAPTURAS/21.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/9-Semana-de-la-salud/Angie-Rincon-Ejecutiva-RetenciOn-Chile.mp4" type="video/mp4"></video> <video class="pagina-n15" width="320" height="300" poster="books/libro3/CAPTURAS/22.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/9-Semana-de-la-salud/Jose-Alirio-Hernandez-Auxiliar-Execution-Team.mp4" type="video/mp4"></video>'
                }]);
              }             
              if(n == 12){
                clb([{
                  css: [                
                      
                    '.pagina-16 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 450px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-17 {',
                      'position: absolute;',
                      'left: 71%;',
                      'top: 390px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-18 {',
                      'position: absolute;',
                      'left: 31%;',
                      'top: 1060px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-19 {',
                      'position: absolute;',
                      'left: 71%;',
                      'top: 1080px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-16" width="340" height="320" poster="books/libro3/CAPTURAS/23.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/10-Celebracion-Halloween/John-Arias-Supervisor-de-Ventas-Net-Colombia.mp4" type="video/mp4"></video> <video class="pagina-17" width="340" height="320" poster="books/libro3/CAPTURAS/24.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/10-Celebracion-Halloween/Ricardo-Meneses-Auxiliar-de-Incentivos-Customer-Care.mp4" type="video/mp4"></video> <video class="pagina-18" width="340" height="320" poster="books/libro3/CAPTURAS/25.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/11-Quinquenios/Carina-Bonilla-Supervisora-de-Retencion-Colombia.mp4" type="video/mp4"></video> <video class="pagina-19" width="340" height="320" poster="books/libro3/CAPTURAS/26.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/11-Quinquenios/Pilar-Perez-Analista-de-salud-y-seguridad-en-el-trabajo.mp4" type="video/mp4"></video>'
                }]);
              }             
              if(n == 13){
                clb([{
                  css: [                
                      
                    '.pagina-20 {',
                      'position: absolute;',
                      'left: 27%;',
                      'top: 440px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-21 {',
                      'position: absolute;',
                      'left: 71%;',
                      'top: 520px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-22 {',
                      'position: absolute;',
                      'left: 31%;',
                      'top: 990px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-23 {',
                      'position: absolute;',
                      'left: 70%;',
                      'top: 1040px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-20" width="340" height="320" poster="books/libro3/CAPTURAS/27.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/12-Dia-de-Agradecimiento/Flor-Gonzalez-Apoyo-personal-de-servicios-generales.mp4" type="video/mp4"></video> <video class="pagina-21" width="340" height="320" poster="books/libro3/CAPTURAS/28.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/12-Dia-de-Agradecimiento/Jhon-Gutierrez-Quick-Mensajeria.mp4" type="video/mp4"></video> <video class="pagina-22" width="340" height="320" poster="books/libro3/CAPTURAS/29.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/12-Dia-de-Agradecimiento/Luis-Rodriguez-Brillaseo.mp4" type="video/mp4"></video> <video class="pagina-23" width="340" height="320" poster="books/libro3/CAPTURAS/30.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/12-Dia-de-Agradecimiento/Yamil-Barrera-G4S-Seguridad.mp4" type="video/mp4"></video>'
                }]);
              }             
              if(n == 14){
                clb([{
                  css: [                
                      
                    '.pagina-24 {',
                      'position: absolute;',
                      'left: 29%;',
                      'top: 340px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-25 {',
                      'position: absolute;',
                      'left: 73%;',
                      'top: 430px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-26 {',
                      'position: absolute;',
                      'left: 50%;',
                      'top: 1030px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                               
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-24" width="360" height="330" poster="books/libro3/CAPTURAS/31.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/13-Cuento-Navideno/Javier-Gonzalez-Analista-Senior-Incentivos-Customer-Care.mp4" type="video/mp4"></video> <video class="pagina-25" width="360" height="330" poster="books/libro3/CAPTURAS/32.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/13-Cuento-Navideno/Kelly-Osorno-Analista-de-Outbound.mp4" type="video/mp4"></video> <video class="pagina-26" width="600" height="320" poster="books/libro3/CAPTURAS/33.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/14-Concurso-Ninos/Mariana-Carmen-Angelica-Sandoval-Ejecutiva-Servicio-Cliente-Integral-Peru.mp4" type="video/mp4"></video>'
                }]);
              } 
              if(n == 16){
                clb([{
                  css: [                
                      
                    '.pagina-27 {',
                      'position: absolute;',
                      'left: 31%;',
                      'top: 620px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-28 {',
                      'position: absolute;',
                      'left: 70%;',
                      'top: 720px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-29 {',
                      'position: absolute;',
                      'left: 31%;',
                      'top: 1090px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-30 {',
                      'position: absolute;',
                      'left: 70%;',
                      'top: 1190px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-27" width="400" height="200" poster="books/libro3/CAPTURAS/34.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/15-Caja-Sorpresa-Regalo-fin-de-ano/Ana-Zea-Analista-Senior-Planeacion-Financiera.mp4" type="video/mp4"></video> <video class="pagina-28" width="400" height="200" poster="books/libro3/CAPTURAS/35.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/15-Caja-Sorpresa-Regalo-fin-de-ano/Olga-Monterroza-Ejecutiva-retencion-Peru.mp4" type="video/mp4"></video> <video class="pagina-29" width="400" height="200" poster="books/libro3/CAPTURAS/36.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/16-Regalo-navidad-ninos/Jared-Gomez-CS-Integral-Uruguay-Cali.mp4" type="video/mp4"></video> <video class="pagina-30" width="400" height="200" poster="books/libro3/CAPTURAS/37.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/4-Bienestar/16-Regalo-navidad-ninos/Pablo-Rey-Analista-de-performance-Management.mp4" type="video/mp4"></video>'
                }]);
              }      
              if(n == 17){
                clb([{
                  css: [                
                    '.pagina-31 {',
                      'position: absolute;',
                      'left: 49%;',
                      'top: 520px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                 
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-31" width="800" height="710" poster="books/libro3/CAPTURAS/38.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/1-Videos-Lideres/Trasformacion-Digital-Diego-Menutti-Director-Ejecutivo-Planning-Customer-Care-Digital-Transformation.mp4" type="video/mp4"></video>'
                }]);
              }         
              if(n == 18){
                clb([{
                  css: [                
                      
                    '.pagina-32 {',
                      'position: absolute;',
                      'left: 29%;',
                      'top: 510px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-33 {',
                      'position: absolute;',
                      'left: 73%;',
                      'top: 580px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-34 {',
                      'position: absolute;',                      
                      'left: 24%;',
                      'top: 1010px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-35 {',
                      'position: absolute;',                      
                      'left: 72%;',
                      'top: 1120px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-32" width="380" height="340" poster="books/libro3/CAPTURAS/39.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/5-Atraccion-de-talento/Claudia-Rueda-Analista-Seguridad-Salud-Trabajo.mp4" type="video/mp4"></video> <video class="pagina-33" width="380" height="340" poster="books/libro3/CAPTURAS/40.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/5-Atraccion-de-talento/Juan-Solano-Ejecutivo-Integral-Colombia.mp4" type="video/mp4"></video> <video class="pagina-34" width="380" height="340" poster="books/libro3/CAPTURAS/41.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/5-Atraccion-de-talento/Laura-Bustos-Ejecutiva-Integral-Peru.mp4" type="video/mp4"></video> <video class="pagina-35" width="380" height="340" poster="books/libro3/CAPTURAS/42.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/5-Atraccion-de-talento/Luz-Guasca-Ejecutiva-Integral-Peru.mp4" type="video/mp4"></video>'
                }]);
              }       
              if(n == 19){
                clb([{
                  css: [                
                      
                    '.pagina-36 {',
                      'position: absolute;',
                      'left: 28%;',
                      'top: 490px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-37 {',
                      'position: absolute;',
                      'left: 73%;',
                      'top: 520px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-38 {',
                      'position: absolute;',                      
                      'left: 62%;',
                      'top: 1110px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                                       
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-36" width="400" height="380" poster="books/libro3/CAPTURAS/43.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/6-Beneficios/Francia-Gonzalez-Ejecutiva-servicio-cliente-Integral-Chile.mp4" type="video/mp4"></video> <video class="pagina-37" width="400" height="380" poster="books/libro3/CAPTURAS/44.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/6-Beneficios/VID-20210311-WA0070.mp4" type="video/mp4"></video> <video class="pagina-38" width="430" height="400" poster="books/libro3/CAPTURAS/45.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/6-Beneficios/Lizeth-Solis-Ejecutiva-Retencion-Peru.mp4" type="video/mp4"></video> '
                }]);
              }    
              if(n == 23){
                clb([{
                  css: [                
                    '.pagina-39 {',
                      'position: absolute;',
                      'left: 50%;',
                      'top: 590px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                 
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-39" width="700" height="610" poster="books/libro3/CAPTURAS/46.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/talent-services/Club-Estrellas.mp4" type="video/mp4"></video>'
                }]);
              }     
              if(n == 24){
                clb([{
                  css: [                
                    '.pagina-40 {',
                      'position: absolute;',
                      'left: 50%;',
                      'top: 590px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                 
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-40" width="700" height="610" poster="books/libro3/CAPTURAS/47.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/talent-services/Diana-Escobar-Analista-Senior-de-entrenamiento.mp4" type="video/mp4"></video>'
                }]);
              }     
              if(n == 25){
                clb([{
                  css: [                
                      
                    '.pagina-41 {',
                      'position: absolute;',
                      'left: 64%;',
                      'top: 480px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                    
                    '.pagina-42 {',
                      'position: absolute;',
                      'left: 29%;',
                      'top: 1070px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                
                      
                    '}',                                                                              
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-41" width="500" height="480" poster="books/libro3/CAPTURAS/48.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/talent-services/Orgullo-2.mp4" type="video/mp4"></video> <video class="pagina-42" width="450" height="430" poster="books/libro3/CAPTURAS/49.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/talent-services/Orgullo.mp4" type="video/mp4"></video>'
                }]);
              }    
              if(n == 26){
                clb([{
                  css: [                
                    '.pagina-43 {',
                      'position: absolute;',
                      'left: 48%;',
                      'top: 520px;',
                      'transform: translate(-50%, 0);',    
                      'background-color: black;',                 
                      
                    '}',
                    'iframe {',
                      'border: 0;',
                    '}'
                  ].join(''),
                  html: '<video class="pagina-43" width="800" height="710" poster="books/libro3/CAPTURAS/50.png" controls><source src="https://conectadirectv.co/uploads/encoded/videos/2021/1-Videos-Lideres/Pilares-de-Cultura-Andres-Ronderos-Director-Operations-Support.mp4" type="video/mp4"></video>'
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
