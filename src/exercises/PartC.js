// PartC.js - Практика JSX

import React from 'react';

// ========== Упражнения простого уровня сложности ==========

// Упражнение 1 – Простой заголовок JSX
const titleElement = React.createElement('h1', null, 'Welcome to Engineering College');

// Упражнение 2 – JSX с встроенным выражением
const firstName = "Nurlan";
const lastName = "Shaidullaev";
const greetingElement = React.createElement('p', null, 'Hello, ' + firstName + ' ' + lastName + '!');

// Упражнение 3 – Исправление названий атрибутов
function Header() {
  const handleClick = () => {
    alert('Hi');
  };

  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement('h1', { onClick: handleClick }, 'Click me')
  );
}

// Упражнение 4 – Корневой элемент с одним корнем
function Greeting() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello'),
    React.createElement('p', null, 'Welcome to the course')
  );
}

// Упражнение 5 – Самозакрывающиеся теги
function Avatar() {
  return React.createElement(
    'div',
    null,
    React.createElement('img', { src: '/avatar.png', alt: 'Avatar' }),
    React.createElement('br', null),
    React.createElement('span', null, 'Student')
  );
}

// Упражнение 13 – Синтаксис обработчика событий
function Clicker() {
  function handleClick() {
    console.log("Clicked!");
  }

  return React.createElement(
    'button',
    { onClick: handleClick },
    'Click me'
  );
}

// Упражнение 22 – Именование компонентов и регистр символов
function ProfileCard(props) {
  return React.createElement(
    'div',
    { className: 'profile-card' },
    React.createElement('h3', null, props.name)
  );
}

// Упражнение 23 – Комментарии JSX
function Title() {
  // Main title of the page
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'JSX Practice')
  );
}

// ========== Упражнения среднего уровня сложности ==========

// Упражнение 6 – JSX против React.createElement
const elementExercise6 = React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h2', null, 'Profile'),
  React.createElement('p', null, 'Welcome to your profile page.')
);

// Упражнение 7 – Использование свойств в JSX
function StudentCard(props) {
  return React.createElement(
    'div',
    { className: 'student-card' },
    React.createElement('h3', null, props.name),
    React.createElement('p', null, 'Group: ' + props.group)
  );
}

// Упражнение 8 – Деструктуризация опорных конструкций
function CourseInfo({ title, credits }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, title),
    React.createElement('p', null, 'Credits: ' + credits)
  );
}

// Упражнение 9 – Условная отрисовка с использованием тернарного синтаксиса
function Status({ isOnline }) {
  return React.createElement(
    'div',
    null,
    isOnline ?
      React.createElement('p', null, 'Online') :
      React.createElement('p', null, 'Offline')
  );
}

// Упражнение 10 – Условная отрисовка с &&
function Notification({ count }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Notifications'),
    count > 0 && React.createElement('p', null, 'You have ' + count + ' new notifications')
  );
}

// Упражнение 11 – Отображение списков с ключами
function TaskList({ tasks }) {
  return React.createElement(
    'ul',
    null,
    tasks.map(task =>
      React.createElement('li', { key: task.id }, task.title)
    )
  );
}

// Упражнение 14 – Передача аргументов обработчикам
function StudentSelector() {
  function handleSelect(id) {
    console.log("Selected id:", id);
  }

  return React.createElement(
    'button',
    { onClick: () => handleSelect(5) },
    'Select student'
  );
}

// Упражнение 15 – Встроенные стили
function WarningBox() {
  return React.createElement(
    'div',
    { style: { backgroundColor: 'yellow', padding: '10px' } },
    'Warning!'
  );
}

// Упражнение 16 – Фрагменты вместо дополнительных элементов <div>
function Info() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h2', null, 'About the course'),
    React.createElement('p', null, 'This course teaches React basics.')
  );
}

// Упражнение 17 – Детская реквизитная работа
function Card({ title, children }) {
  return React.createElement(
    'div',
    { className: 'card' },
    React.createElement('h3', null, title),
    React.createElement('div', { className: 'card-body' }, children)
  );
}

const cardUsage = React.createElement(
  Card,
  { title: "JSX Topic" },
  React.createElement('p', null, 'We are learning JSX today.')
);

// Упражнение 18 – Распределение опор
const user = {
  name: "Aida",
  age: 19,
  group: "FE-01"
};

function UserProfile({ name, age, group }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h3', null, name),
    React.createElement('p', null, 'Age: ' + age),
    React.createElement('p', null, 'Group: ' + group)
  );
}

const userProfileWithSpread = React.createElement(UserProfile, user);
const userProfileExplicit = React.createElement(
  UserProfile,
  { name: user.name, age: user.age, group: user.group }
);

// Упражнение 19 – Выражения против операторов в JSX
function Access({ isAdmin }) {
  return React.createElement(
    'div',
    null,
    isAdmin ?
      React.createElement('p', null, 'Welcome, admin!') :
      React.createElement('p', null, 'Access denied')
  );
}

// Упражнение 20 – Контролируемый ввод
function NameInput() {
  const [name, setName] = React.useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return React.createElement(
    'div',
    null,
    React.createElement('input', {
      type: 'text',
      value: name,
      onChange: handleChange,
      placeholder: 'Enter your name'
    }),
    React.createElement('p', null, 'Hello, ' + (name || 'Stranger') + '!')
  );
}

// Упражнение 24 – Сложное форматирование JSX
function Dashboard({ user, notifications }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, user.name + "'s Dashboard"),
    notifications.length > 0 &&
    React.createElement('p', null, 'You have ' + notifications.length + ' new notifications.')
  );
}

// Упражнение 25 – Спрогнозируйте результат рендеринга
function Example() {
  const a = 2;
  const b = 3;

  return React.createElement(
    'div',
    null,
    React.createElement('p', null, a + b),
    React.createElement('p', null, a > b ? "a is bigger" : "b is bigger or equal"),
    React.createElement('p', null, false && "This text")
  );
}

// ========== Упражнения сложного уровня ==========

// Упражнение 12 – Отображение без JSX
const students = ["Ali", "Aida", "Nurlan"];

function StudentList() {
  return React.createElement(
    'ul',
    null,
    students.map((name, index) =>
      React.createElement('li', { key: index }, name)
    )
  );
}

// Упражнение 21 – Безопасность JSX и XSS
function HtmlBlock({ html }) {
  return React.createElement(
    'div',
    { dangerouslySetInnerHTML: { __html: html } }
  );
}

// Главный компонент для демонстрации всех упражнений
export const PartC = () => {
  const sampleTasks = [
    { id: 1, title: 'Complete JSX exercises' },
    { id: 2, title: 'Learn React hooks' },
    { id: 3, title: 'Build a project' }
  ];

  const sampleUser = {
    name: "John Doe",
    age: 25,
    group: "FE-02"
  };

  const sampleNotifications = [
    { id: 1, message: 'New message' },
    { id: 2, message: 'Assignment due' }
  ];

  return React.createElement(
    'div',
    { className: 'part-c-container' },
    React.createElement('h1', null, 'Часть C: Практика JSX'),

    React.createElement('section', { className: 'exercise-group' },
      React.createElement('h2', null, 'Простые упражнения'),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 1: Простой заголовок JSX'),
        titleElement
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 2: JSX с встроенным выражением'),
        greetingElement
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 3: Исправление названий атрибутов'),
        React.createElement(Header)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 4: Корневой элемент с одним корнем'),
        React.createElement(Greeting)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 5: Самозакрывающиеся теги'),
        React.createElement(Avatar)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 13: Синтаксис обработчика событий'),
        React.createElement(Clicker)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 22: Именование компонентов'),
        React.createElement(ProfileCard, { name: 'Test User' })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 23: Комментарии JSX'),
        React.createElement(Title)
      )
    ),

    React.createElement('section', { className: 'exercise-group' },
      React.createElement('h2', null, 'Средние упражнения'),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 6: JSX vs React.createElement'),
        elementExercise6
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 7: Использование свойств в JSX'),
        React.createElement(StudentCard, { name: 'Alice', group: 'CS-101' })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 8: Деструктуризация'),
        React.createElement(CourseInfo, { title: 'React Basics', credits: 3 })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 9: Условная отрисовка (тернарный оператор)'),
        React.createElement(Status, { isOnline: true }),
        React.createElement(Status, { isOnline: false })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 10: Условная отрисовка (&&)'),
        React.createElement(Notification, { count: 3 }),
        React.createElement(Notification, { count: 0 })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 11: Отображение списков с ключами'),
        React.createElement(TaskList, { tasks: sampleTasks })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 14: Передача аргументов обработчикам'),
        React.createElement(StudentSelector)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 15: Встроенные стили'),
        React.createElement(WarningBox)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 16: Фрагменты'),
        React.createElement(Info)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 17: Детская реквизитная работа'),
        cardUsage
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 18: Распределение опор'),
        userProfileWithSpread
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 19: Выражения vs операторы'),
        React.createElement(Access, { isAdmin: true }),
        React.createElement(Access, { isAdmin: false })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 20: Контролируемый ввод'),
        React.createElement(NameInput)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 24: Сложное форматирование'),
        React.createElement(Dashboard, { user: sampleUser, notifications: sampleNotifications })
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 25: Прогноз результата рендеринга'),
        React.createElement(Example),
        React.createElement('p', null, 'Результаты: 1) 5, 2) "b is bigger or equal", 3) пустой параграф')
      )
    ),

    React.createElement('section', { className: 'exercise-group' },
      React.createElement('h2', null, 'Сложные упражнения'),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 12: Отображение без JSX'),
        React.createElement(StudentList)
      ),

      React.createElement('div', { className: 'exercise' },
        React.createElement('h3', null, 'Упражнение 21: Безопасность JSX и XSS'),
        React.createElement(HtmlBlock, { html: '<strong>Safe HTML</strong> <em>content</em>' })
      )
    )
  );
};

export default PartC;