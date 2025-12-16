// PartA.js - Решение всех упражнений части A

import React from 'react';

// Упражнение A1 – Простой заголовок
export const ExerciseA1 = () => {
  const element = React.createElement('h1', null, 'Hello, React!');
  return element;
};

// Упражнение A2 – Обертка с двумя детьми
export const ExerciseA2 = () => {
  const element = React.createElement(
    'div',
    { className: 'card' },
    React.createElement('h2', null, 'Profile'),
    React.createElement('p', null, 'Welcome to your profile page.')
  );
  return element;
};

// Упражнение A3 – Использование переменных внутри JSX
export const ExerciseA3 = () => {
  const name = "Nurlan";
  const age = 42;

  const element = React.createElement(
    'p',
    null,
    name + ' is ' + age + ' years old.'
  );
  return element;
};

// Упражнение A4 – Возвращаемое значение компонента
export function Greeting({ name }) {
  return React.createElement(
    'div',
    { className: 'greeting' },
    React.createElement('h1', null, 'Hello, ' + name + '!')
  );
}

// Упражнение A5 – Отображение списка
export function TopicList() {
  const items = ["JSX", "Components", "Hooks"];

  return React.createElement(
    'ul',
    null,
    items.map((topic, index) => 
      React.createElement('li', { key: index }, topic)
    )
  );
}

// Упражнение A6 – Вложенные компоненты
// Компонент Button
export function Button({ label }) {
  return React.createElement(
    'button',
    { className: 'btn' },
    label
  );
}

// Компонент App
export function App() {
  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement('h1', null, 'My App'),
    React.createElement(Button, { label: 'Click me' })
  );
}

// Упражнение A7 – Встроенные стили
export const ExerciseA7 = () => {
  const element = React.createElement(
    'div',
    { 
      style: { 
        padding: "10px", 
        borderRadius: "8px" 
      } 
    },
    'Inline styled box'
  );
  return element;
};

// Упражнение A8 – Фрагмент
export function Info() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h2', null, 'Title'),
    React.createElement('p', null, 'Description text here.')
  );
}

// Главный компонент для демонстрации всех упражнений
export const PartA = () => {
  return React.createElement(
    'div',
    { className: 'part-a-container' },
    React.createElement('h1', null, 'Часть A: Переписываем JSX на React.createElement'),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A1. Простой заголовок'),
      React.createElement(ExerciseA1)
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A2. Обертка с двумя детьми'),
      React.createElement(ExerciseA2)
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A3. Использование переменных'),
      React.createElement(ExerciseA3)
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A4. Возвращаемое значение компонента'),
      React.createElement(Greeting, { name: 'Nurlan' })
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A5. Отображение списка'),
      React.createElement(TopicList)
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A6. Вложенные компоненты'),
      React.createElement(App)
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A7. Встроенные стили'),
      React.createElement(ExerciseA7)
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'A8. Фрагмент'),
      React.createElement(Info)
    )
  );
};

export default PartA;