import React from 'react';

// Упражнение B1 – Неправильные названия атрибутов
export function Header() {
  const handleClick = () => {
    alert('Hello');
  };

  return (
    <div className="header">
      <h1 onClick={handleClick}>Welcome</h1>
    </div>
  );
}

// Упражнение B2 – Множественные корневые элементы
export function BadComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Subtitle</p>
    </>
  );
}

// Упражнение B3 – Незакрытые теги
export function ImageCard() {
  return (
    <div className="card">
      <img src="/logo.png" alt="Logo" />
      <p>Logo of our app</p>
    </div>
  );
}

// Упражнение B4 – Использование if внутри JSX
export function Status({ isOnline }) {
  return (
    <div>
      {isOnline ? (
        <p>User is online</p>
      ) : (
        <p>User is offline</p>
      )}
    </div>
  );
}

// Упражнение B5 – Путаница между названием компонента и HTML-тегом
export function UserCard(props) {
  return (
    <div className="user-card">
      <h3>{props.name}</h3>
    </div>
  );
}

// Упражнение B6 – for и class в форме
export function LoginForm() {
  return (
    <form>
      <label htmlFor="email" className="label">
        Email
      </label>
      <input id="email" type="email" />
    </form>
  );
}

// Упражнение B7 – Отсутствующие элементы key в списке
export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id || index}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Упражнение B8 – Неправильное использование стиля
export function Box() {
  return (
    <div style={{ backgroundColor: 'red', padding: '10px' }}>
      Warning
    </div>
  );
}

// Упражнение B9 – Обработчик событий в виде строки
export function Counter() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// Упражнение B10 – dangerouslySetInnerHTML неправильное использование
export function HtmlBlock({ html }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
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

  return (
    <div className="part-b-container">
      <h1>Часть B: Исправление ошибок JSX</h1>
      
      <section className="exercise">
        <h2>B1. Неправильные названия атрибутов</h2>
        <Header />
        <p className="note">Исправлено: class → className, onclick="alert('Hello')" → onClick={handleClick}</p>
      </section>
      
      <section className="exercise">
        <h2>B2. Множественные корневые элементы</h2>
        <BadComponent />
        <p className="note">Исправлено: используется Fragment (короткий синтаксис {'<> </>'})</p>
      </section>
      
      <section className="exercise">
        <h2>B3. Незакрытые теги</h2>
        <ImageCard />
        <p className="note">Исправлено: {'<img src="/logo.png">'} → {'<img src="/logo.png" alt="Logo" />'}</p>
      </section>
      
      <section className="exercise">
        <h2>B4. Использование if внутри JSX</h2>
        <div className="status-examples">
          <Status isOnline={true} />
          <Status isOnline={false} />
        </div>
        <p className="note">Исправлено: if заменен на тернарный оператор</p>
      </section>
      
      <section className="exercise">
        <h2>B5. Путаница компонента и HTML-тега</h2>
        <UserCard name="John Doe" />
        <p className="note">Исправлено: usercard → UserCard (компоненты с большой буквы), {'<usercard>'} → {'<div className="user-card">'}</p>
      </section>
      
      <section className="exercise">
        <h2>B6. for и class в форме</h2>
        <LoginForm />
        <p className="note">Исправлено: for="email" → htmlFor="email", class="label" → className="label"</p>
      </section>
      
      <section className="exercise">
        <h2>B7. Отсутствующие key в списке</h2>
        <TodoList todos={sampleTodos} />
        <p className="note">Исправлено: добавлен key={todo.id || index} к каждому {'<li>'}</p>
      </section>
      
      <section className="exercise">
        <h2>B8. Неправильное использование стиля</h2>
        <Box />
        <p className="note">Исправлено: style="background-color: red;" → style={{backgroundColor: 'red', padding: '10px'}}</p>
      </section>
      
      <section className="exercise">
        <h2>B9. Обработчик событий в виде строки</h2>
        <Counter />
        <p className="note">Исправлено: onClick="handleClick()" → onClick={handleClick}</p>
      </section>
      
      <section className="exercise">
        <h2>B10. Неправильное использование dangerouslySetInnerHTML</h2>
        <HtmlBlock html={sampleHtml} />
        <p className="note">Исправлено: dangerouslySetInnerHTML={html} → dangerouslySetInnerHTML={{__html: html}}</p>
      </section>
    </div>
  );
};

export default PartB;