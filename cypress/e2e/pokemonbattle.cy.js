describe('PokemonBattle Shop', function () {

    it('Покупка Аватара', function () {
         cy.visit('https://pokemonbattle.me/login'); //открываем сайт 
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN') //вводим логин
         cy.get('#password').type('USER_PASSWORD'); // вводим пароль
         cy.get('.auth__button').click(); // нажимаем кнопку войти 
         cy.get('.gradient').should('be.visible'); // проверяем, что зашли на сайт
         
         cy.get('.header__btns > [href="/shop"]').click(); //нажимаем кнопку "магазин""
         cy.get('.available > button').first().click(); // нажимаем кнопку "купить"

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('6390020000000000013'); //в инпут водим номер карты

         cy.get(':nth-child(1) > .pay_base-input-v2').type('11/25'); // в инпут вводим срок карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // в инпут вводм код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ILOVEQA'); // в инпут вводим имя
         cy.get('.pay-btn').click(); // нажимаем кнопку "Оплатить" 

         cy.get('#cardnumber').type('56456'); // в инпут вводим код 
         cy.get('.payment__submit-button').click(); // нажимаем кнопку "отправить"
         cy.get('.payment__font-for-success').should('be.visible'); // проверяем, что текст виден пользователю
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно') // проверяем, что после покупки виден такой текст 
         cy.get('.payment__adv').click(); //нажимаем на кнопку "Вернуться в битву покемонов"
         cy.wait(2000); // пожождать 2 секунды 
         cy.get('.header__container > .header__id').click(); // нажимаем на кнопку "Id Тренера" 
         cy.get('.trainer-img').should('be.visible'); // проверяем нашего нового аватара
     })
 }) 



//1. Клик `.click();`
//2. Проверка, что элемент содержит текст: `.contains('текст');` 
//3. Правый клик `.rightclick()` 
//4. Эффект наведения `cy.get('.menu-item').trigger('mouseover');` 
//5. Написать что-то в инпут `.type('как найти работу тестировщиком');`
//6. Нажать энтер `.type('{enter}');`
//7. Проверить css свойство: `.should('have.css', 'color', 'rgb(0, 85, 152)');`
//8. Проверить, что элемент виден пользователю: `.should('be.visible');`

