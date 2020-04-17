import { browser, element, by } from 'protractor';

export class ServicioPagina {
    tipoInput =  element(by.css('input[formControlName=tipo]')).getText;
    precioInput = element(by.css('input[formControlName=precio]')).getText;
    constructor() { }
    isOn = false;
    clicked() { this.isOn = !this.isOn; }
    navigateTo(ruta: string) {
        return browser.get(ruta) as Promise<any>;
    }
}
