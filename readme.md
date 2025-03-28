# Завдання

Запрограмувати функціонал сторінки перегляду тренерів.

Запланований функціонал на сторінці: перегляд карток, модальне вікно з повною інформацією, сортування та фільтрація карток.

## Технічні вимоги

### Загальні вимоги

- При відкритті сторінки одразу можна побачити тільки логотип та копірайт.
- В файлі `index.html` подана вся потрібна розмітка проєкту. Напряму змінювати структуру в файлі `index.html` не можна.
- Дозволяється за потреби додавати стилі та атрибути елементам, використовуючи javascript.
- Проєкт повинен працювати у всіх сучаних браузеерах без помилок.
- Код проєкту написаний з використанням `суворого режиму в javascript`.

### Картки тренерів

- При завантаженні сторінки вивести картки тренерів на сторінку в середину елементу з класом `trainers-cards__container`. Дані для заповнення карток тренерів знаходяться в змінній `DATA` в файлі `index.js`. В якості зразка розмітки картки тренера брати темплейт з id `trainer-card`.
- Після виведення всіх карток на екран - ппоказати блоки фільтрів та сортування. Щоб показати блок фільтрів та блок сортування треба видалити в них атрибут `hidden`.

### Модальне вікно з інформацією про тренера

- Модальне вікно з даними про конкретного тренера з'являється при натисканні на кнопку `ПОКАЗАТИ`.
- При показі модального вікна заборонити скрол сторінки.
- Інформація для заповнення знаходиться в об'єкті з інформацією про тренера.
- Шаблон модального вікна знаходиться в темплейті `modal-template`.
- Клік по хрестику в модальному вікні повинен видаляти модальне вікно з DOM. Одночасно в DOM повиннен знаходитись тільки один екземпляр модального вікна.
- Після закриття модального вікна скрол сторінки зному має бути доступним.

### Сортування карток тренерів

- При завантаженні сторінки картики виводяться в тому порядку, в якому вони записані в змінній `DATA`.
- При натисканні на кнопку сортування `за прізвищем` картки на сторінці повинні відсортуватися по призвищу `від А до Я`.
- При натисканні на кнопку сортування `за досвідом` картки на сторінці повинні відсортуватися за досвідом `від більшого до меншого`.
- Коли будь-яка кнопка сортування стає активною - до неї додається клас `sorting__btn--active`. З інших кнопок цей клас повинен прибратися. Одночасно може бути тільки один вид сортування.

### Фільтрація карток тренерів

- При завантаженні сторінки виводяться всі картки. В блоках `НАПРЯМИ` та `КАТЕГОРІЇ` вибрано пункти `ВСІ`. Фільтарція повинна спрацьовувати при натисканні кнопки `ПОКАЗАТИ`.
- При виборі будь-якого напряму, крім `ВСІ`, масив карток повинен фільтруватися і на сторінці повинні бути показані лише ті тренери, що відносяться до даного напряму.
- При виборі будь-якої категорії, крім `ВСІ`, масив карток повинен фільтруватися і на сторінці повинні бути показані лише ті тренери, що відносяться до даної категорії.
- Якщо змінюється і напрям і категорія, на сторінці повинні показатися картки тільки тих тренерів, що відповідають і вибраному напряму, і вибраній категорії одночасно.
- При фільтрації сторінка не повинна перезавантажуватись.

#### Необов'язкове завдання підвищеної складності

- При початковому завантаженні карток тренерів та при фільтрації показувати прелоадер, і прибирати його після виведення карток на сторінку.
- При оновленні сторінки зберігати параметри фільтрації та сортування. Якщо користувач змінить вихідні параметри фільтрів та сортування, при оновленні сторінки до карток повинні застосовуватись ті параметри сортування та фільтарції, які користувач встановлював останніми. Картки тренерів повинні видобразитись на сторінці, враховуючи ці останні параметри.
