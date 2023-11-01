Для запуску проекту потрібно:
- Встановити "Node.js"
- Встановити  утиліту командного рядка "gulp" (npm install --global gulp-cli)
- В командному рядку відкрити проект
- Запустити команду npm instal
- gulp dev - запускає сервер та відстежує зміни (включає команди: serverRun, watchAll) 
- gulp build - видаляє папку dist, потім копіює тути нові скомпільовані файли (включає команди: cleanAll, styles, scripts, img, cloneHtml)

В цьому проекті використана адаптивна верстка (контент на сторінці змінює своє положення в залежності від ширина екрану)
Динамічний елемент тільки один - "Бургер-меню", що зявляється при ширині екрану до 480px.
В проекті використовувались наступні технології: "Gulp", "Preprocessor SCSS", Міксини, "Variables",  "Flexbox", "JavaScript", "NPM", "Deployment GitHub Pages".

To start the project, you need:
- Install "Node.js"
- Install the "gulp" command line utility (npm install --global gulp-cli)
- Open the project in the command line
- Run the npm instal command
- gulp dev - starts the server and monitors changes (includes commands: serverRun, watchAll)
- gulp build - deletes the dist folder, then copies new compiled files here (includes commands: cleanAll, styles, scripts, img, cloneHtml)

This project uses adaptive layout (the content on the page changes its position depending on the screen width)
There is only one dynamic element - the "Burger menu", which appears when the screen width is up to 480px.
The following technologies were used in the project: "Gulp", "Preprocessor SCSS", Mixins, "Variables", "Flexbox", "JavaScript", "NPM", "Deployment GitHub Pages".