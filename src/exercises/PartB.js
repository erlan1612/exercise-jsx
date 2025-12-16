// PartB.js - Исправление ошибок JSX

import React from 'react';

// Упражнение B1 – Неправильные названия атрибутов
export function Header() {
  const handleClick = () => {
    alert('Hello');
  };

  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement('h1', { onClick: handleClick }, 'Welcome')
  );
}

// Упражнение B2 – Множественные корневые элементы
export function BadComponent() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'Title'),
    React.createElement('p', null, 'Subtitle')
  );
}

// Упражнение B3 – Незакрытые теги
export function ImageCard() {
  return React.createElement(
    'div',
    { className: 'card' },
    React.createElement('img', { src: '/logo.png', alt: 'Logo' }),
    React.createElement('p', null, 'Logo of our app')
  );
}

// Упражнение B4 – Использование if внутри JSX
export function Status({ isOnline }) {
  return React.createElement(
    'div',
    null,
    isOnline ? 
      React.createElement('p', null, 'User is online') : 
      React.createElement('p', null, 'User is offline')
  );
}

// Упражнение B5 – Путаница между названием компонента и HTML-тегом
export function UserCard(props) {
  return React.createElement(
    'div',
    { className: 'user-card' },
    React.createElement('h3', null, props.name)
  );
}

// Упражнение B6 – for и class в форме
export function LoginForm() {
  return React.createElement(
    'form',
    null,
    React.createElement('label', { htmlFor: 'email', className: 'label' }, 'Email'),
    React.createElement('input', { id: 'email', type: 'email' })
  );
}

// Упражнение B7 – Отсутствующие элементы key в списке
export function TodoList({ todos }) {
  return React.createElement(
    'ul',
    null,
    todos.map((todo, index) => 
      React.createElement('li', { key: todo.id || index }, todo.text)
    )
  );
}

// Упражнение B8 – Неправильное использование стиля
export function Box() {
  return React.createElement(
    'div',
    { 
      style: { 
        backgroundColor: 'red', 
        padding: '10px' 
      } 
    },
    'Warning'
  );
}

// Упражнение B9 – Обработчик событий в виде строки
export function Counter() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return React.createElement(
    'button',
    { onClick: handleClick },
    'Click me'
  );
}

// Упражнение B10 – dangerouslySetInnerHTML неправильное использование
export function HtmlBlock({ html }) {
  return React.createElement(
    'div',
    { dangerouslySetInnerHTML: { __html: html } }
  );
}

// Главный компонент для демонстрации всех исправлений
export const PartB = () => {
  const sampleTodos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Fix JSX errors' },
    { id: 3, text: 'Build projects' }
  ];

  const sampleHtml = '<strong>This is bold text</strong> and <em>italic text</em>';

  return React.createElement(
    'div',
    { className: 'part-b-container' },
    React.createElement('h1', null, 'Часть B: Исправление ошибок JSX'),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B1. Неправильные названия атрибутов'),
      React.createElement(Header),
      React.createElement('p', { className: 'note' }, 'Исправлено: class → className, onclick → onClick')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B2. Множественные корневые элементы'),
      React.createElement(BadComponent),
      React.createElement('p', { className: 'note' }, 'Исправлено: используется Fragment (React.Fragment)')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B3. Незакрытые теги'),
      React.createElement(ImageCard),
      React.createElement('p', { className: 'note' }, 'Исправлено: img тег закрыт, добавлен alt атрибут')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B4. Использование if внутри JSX'),
      React.createElement('div', { className: 'status-examples' },
        React.createElement(Status, { isOnline: true }),
        React.createElement(Status, { isOnline: false })
      ),
      React.createElement('p', { className: 'note' }, 'Исправлено: if заменен на тернарный оператор')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B5. Путаница компонента и HTML-тега'),
      React.createElement(UserCard, { name: 'John Doe' }),
      React.createElement('p', { className: 'note' }, 'Исправлено: usercard → UserCard, использование div вместо кастомного тега')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B6. for и class в форме'),
      React.createElement(LoginForm),
      React.createElement('p', { className: 'note' }, 'Исправлено: for → htmlFor, class → className')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B7. Отсутствующие key в списке'),
      React.createElement(TodoList, { todos: sampleTodos }),
      React.createElement('p', { className: 'note' }, 'Исправлено: добавлен key для элементов списка')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B8. Неправильное использование стиля'),
      React.createElement(Box),
      React.createElement('p', { className: 'note' }, 'Исправлено: style использует объект вместо строки')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B9. Обработчик событий в виде строки'),
      React.createElement(Counter),
      React.createElement('p', { className: 'note' }, 'Исправлено: onClick использует функцию вместо строки')
    ),
    
    React.createElement('section', { className: 'exercise' },
      React.createElement('h2', null, 'B10. Неправильное использование dangerouslySetInnerHTML'),
      React.createElement(HtmlBlock, { html: sampleHtml }),
      React.createElement('p', { className: 'note' }, 'Исправлено: dangerouslySetInnerHTML получает объект с __html')
    )
  );
};

export default PartB;