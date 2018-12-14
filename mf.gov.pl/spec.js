var page = require('./page.js');
describe('Strona ppuslugi.mf.gov.pl', function() {
    it('powinna się załadować i przejść do podstrony sprawdzania NIP oraz sprawdzić, że GFT jest płatnikiem VAT', function() {
        page.loadPage();
        page.items.inputField.sendKeys('7251947829');
        page.items.checkButton.click();
        expect(page.items.outputMessage.getText()).toContain('jest zarejestrowany');
    })
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        page.items.clearButton.click();
        page.waitForInput();
    })
    it('powinna sprawdzić, że ZUS jest płatnikiem VAT', function() {
        page.items.inputField.sendKeys('5213017228');
        page.items.checkButton.click();
        page.waitForOutput();
        expect(page.items.outputMessage.getText()).toContain('jest zarejestrowany'); 
    })
    it('powinna sprawdzić, że fake NIP nie jest płatnikiem VAT', function() {
        page.items.inputField.sendKeys('7473137775');
        page.items.checkButton.click();
        page.waitForOutput();
        expect(page.items.outputMessage.getText()).toContain('nie jest zarejestrowany'); 
    })
    it('powinna sprawdzić, że fake NIP nie jest płatnikiem VAT', function() {
        page.items.inputField.sendKeys('7331184612');
        page.items.checkButton.click();
        page.waitForOutput();
        expect(page.items.outputMessage.getText()).toContain('nie jest zarejestrowany'); 
    })

})