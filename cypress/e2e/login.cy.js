describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю, что цвет кнопки совподает
         cy.get('.link').should('be.visible'); // проверяю, что футер кнопка видна пользователю 

         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввледи верный пароль
         cy.get('#loginButton').click(); //нажала ввойти 

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после аторизации вижу такой текст
         cy.get('#messageHeader').should('be.visible'); // приверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // проверяю, что крестик виден пользователю
    
     })

        it('Верный логин и НЕверный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю, что цвет кнопки совподает
         cy.get('.link').should('be.visible'); // проверяю, что футер кнопка видна пользователю 

         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('ABCD123'); // ввели неверный пароль
         cy.get('#loginButton').click(); //нажала ввойти 
         
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после аторизации вижу такой текст
         cy.get('#messageHeader').should('be.visible'); // приверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // проверяю, что крестик виден пользователю
    
     })

        it('НЕверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю, что цвет кнопки совподает
         cy.get('.link').should('be.visible'); // проверяю, что футер кнопка видна пользователю 

         cy.get('#mail').type('German@Dolnikov.ru'); //ввели неверный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); //нажала ввойти 
         
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после аторизации вижу такой текст
         cy.get('#messageHeader').should('be.visible'); // приверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // проверяю, что крестик виден пользователю
    
     })

        it('ошибка валидации', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю, что цвет кнопки совподает
         cy.get('.link').should('be.visible'); // проверяю, что футер кнопка видна пользователю 

         cy.get('#mail').type('germandolnikov.ru'); //ввели НЕвалидный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); //нажала ввойти 
         
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после аторизации вижу такой текст
         cy.get('#messageHeader').should('be.visible'); // приверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // проверяю, что крестик виден пользователю
    
     })

        it('восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю, что цвет кнопки совподает
         cy.get('.link').should('be.visible'); // проверяю, что футер кнопка видна пользователю 

         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#forgotEmailButton').click(); // нажали кнопку забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели логин
         cy.get('#restoreEmailButton').click(); // нажаль на кнопку отправить код  

         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, что после отправки вижу такой текст
         cy.get('#messageHeader').should('be.visible'); // приверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // проверяю, что крестик виден пользователю
     })   
     
         it('приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю, что цвет кнопки совподает
         cy.get('.link').should('be.visible'); // проверяю, что футер кнопка видна пользователю 

         cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин с верхним регистром 
         cy.get('#pass').type('iLoveqastudio1'); // ввледи верный пароль
         cy.get('#loginButton').click(); //нажала ввойти 

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после аторизации вижу такой текст
         cy.get('#messageHeader').should('be.visible'); // приверяю, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // проверяю, что крестик виден пользователю
     }) 
 })    

