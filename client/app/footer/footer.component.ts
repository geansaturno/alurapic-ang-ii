import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rodape',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    
    ano : number = new Date().getFullYear();
    
    constructor(){
        console.log('Footer');
        console.log(this.ano);
        
    }
    

    
}