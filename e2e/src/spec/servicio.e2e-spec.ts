import { ServicioPagina } from '../pagina/servicio';
import { browser, by, element } from 'protractor';

describe('Testing servicio :', () => {
    const servicio = new ServicioPagina();
    const tipo = 'manicure';
    const precio = 15000;
    const url = 'http://localhost:4200/#/servicio/listar';



    it('Crear servicio', () => {
        servicio.navigateTo('http://localhost:4200/#/servicio/crear');
        element(by.css('input[formControlName=tipo]')).sendKeys(tipo);
        element(by.css('input[formControlName=precio]')).sendKeys(precio);
        element(by.id('GuardarServicioBtn')).click();
        servicio.clicked();
        expect(servicio.isOn).toEqual(true);
        browser.sleep(5000);
    });
});
