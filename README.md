## Описание
Проект содержит информацию о временных отрезках, в каждом из которых существует несколько событий. 
При переключении временных отрезков изменяются соответствующие числа и под ними показывается новый слайдер, который содержит подробную информацию по ключевым событиям на активном временном отрезке.

Тестовое задание для компании Only (https://onlydigital.ru/). 

## Технологии
1. React
2. TypeScript
3. Redux (thunk, redux-toolkit)
4. JSON-server
5. CSS modules
6. GSAP
7. Swiper
8. Axious

## Что было сделано
1. Реализована конструкция slider in slider. 

Есть главный слайдер, который отражает временной промежуток и есть вторичный слайдер, который расположен внутри главного, отрабражающий события на данном промежутке. Этим я добилась взаимосвязи между timeline и событиями. Таким образом можно перемещаться внутри главного слайдера по временным промежуткам, а внутри вторичного по событиям.   

2. Можно фильтровать события не только по датам, но и по областям, к которым должны относиться события.

Всего есть 4 секции (Наука, Литература, Музыка, Кино). Например, если выбрать Науку, то будут отображаться события на данном временном промежутке, которые были связанно с данной областью.

3. Анимация созданная с помощью gsap воспроизводится при переключении между временными промежутками и при наведении на секции (круги).

4. JSON-server использовался для создания сервера, к которому будут делаться запросы. Запросы делала с помощью middleware - thunk. Store создавала с помощью Redux-toolkit.

5. Базу данных сформирована в соответствие с потребностями. 

Поле section содержит массив из строк, которые представляют собой секции (Наука, Литература, Музыка, Кино). Данное поле было создана для того, чтобы получать информацию о том, какие секции есть, соответственно, если секции добавятся, то это легко обновится в интерфейсе.

Поле data разделено на периоды: first, second, third, fourth. Каждый из них в свою очередь содержат поле в соответствии с уже названными секциями, которые есть в проекте. Благодаря такому устройству можно легко получить информацию о каждом периоде в соответствии с областью, которая была выбрана. 

6. Сделан адаптив под разные устройства.

Адаптив сделан с помощью mixin, который принимает переменные и в зависимости от значения возвращает нужный @media. 

Мобилная версия: Хук useWindowSize определяет ширину viewport и в соотствии с этим рендерит нужный компонент - slider for mobile.

## Как запустить 
1. Клонируйте репозиторий

``git clone https://github.com/IrinRer/Timeline.git``

2. Устанавливаете зависимости

``npm i``

3. Запускаете проект 

``npm run dev``

Данная команда запустит также JSON-server. 
