// PartC.js - Практика JSX

import React, { useState } from 'react';

// ========== Упражнения простого уровня сложности ==========

// Упражнение 1 – Простой заголовок JSX
const titleElement = <h1>Welcome to Engineering College</h1>;

// Упражнение 2 – JSX с встроенным выражением
const firstName = "Nurlan";
const lastName = "Shaidullaev";
const greetingElement = <p>Hello, {firstName} {lastName}!</p>;

// Упражнение 3 – Исправление названий атрибутов
function Header() {
  const handleClick = () => {
    alert('Hi');
  };
  
  return (
    <div className="header">
      <h1 onClick={handleClick}>Click me</h1>
    </div>
  );
}

// Упражнение 4 – Корневой элемент с одним корнем
function Greeting() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to the course</p>
    </div>
  );
}

// Упражнение 5 – Самозакрывающиеся теги
function Avatar() {
  return (
    <div>
      <img src="/avatar.png" alt="Avatar" />
      <br />
      <span>Student</span>
    </div>
  );
}

// Упражнение 13 – Синтаксис обработчика событий
function Clicker() {
  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// Упражнение 22 – Именование компонентов и регистр символов
function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h3>{props.name}</h3>
    </div>
  );
}

// Упражнение 23 – Комментарии JSX
function Title() {
  return (
    <div>
      {/* Main title of the page */}
      <h1>JSX Practice</h1>
    </div>
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
  return (
    <div className="student-card">
      <h3>{props.name}</h3>
      <p>Group: {props.group}</p>
    </div>
  );
}

// Упражнение 8 – Деструктуризация опорных конструкций
function CourseInfo({ title, credits }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Credits: {credits}</p>
    </div>
  );
}

// Упражнение 9 – Условная отрисовка с использованием тернарного синтаксиса
function Status({ isOnline }) {
  return (
    <div>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
}

// Упражнение 10 – Условная отрисовка с &&
function Notification({ count }) {
  return (
    <div>
      <h2>Notifications</h2>
      {count > 0 && <p>You have {count} new notifications</p>}
    </div>
  );
}

// Упражнение 11 – Отображение списков с ключами
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

// Упражнение 14 – Передача аргументов обработчикам
function StudentSelector() {
  function handleSelect(id) {
    console.log("Selected id:", id);
  }

  return (
    <button onClick={() => handleSelect(5)}>
      Select student
    </button>
  );
}

// Упражнение 15 – Встроенные стили
function WarningBox() {
  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
      Warning!
    </div>
  );
}

// Упражнение 16 – Фрагменты вместо дополнительных элементов <div>
function Info() {
  return (
    <>
      <h2>About the course</h2>
      <p>This course teaches React basics.</p>
    </>
  );
}

// Упражнение 17 – Детская реквизитная работа
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
}

const cardUsage = (
  <Card title="JSX Topic">
    <p>We are learning JSX today.</p>
  </Card>
);

// Упражнение 18 – Распределение опор
const user = {
  name: "Aida",
  age: 19,
  group: "FE-01"
};

function UserProfile({ name, age, group }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Group: {group}</p>
    </div>
  );
}

const userProfileWithSpread = <UserProfile {...user} />;
const userProfileExplicit = <UserProfile name={user.name} age={user.age} group={user.group} />;

// Упражнение 19 – Выражения против операторов в JSX
function Access({ isAdmin }) {
  return (
    <div>
      {isAdmin ? (
        <p>Welcome, admin!</p>
      ) : (
        <p>Access denied</p>
      )}
    </div>
  );
}

// Упражнение 20 – Контролируемый ввод
function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'Stranger'}!</p>
    </div>
  );
}

// Упражнение 24 – Сложное форматирование JSX
function Dashboard({ user, notifications }) {
  return (
    <div>
      <h1>{user.name}'s Dashboard</h1>
      {notifications.length > 0 && (
        <p>You have {notifications.length} new notifications.</p>
      )}
    </div>
  );
}

// Упражнение 25 – Спрогнозируйте результат рендеринга
function Example() {
  const a = 2;
  const b = 3;

  return (
    <div>
      <p>{a + b}</p>
      <p>{a > b ? "a is bigger" : "b is bigger or equal"}</p>
      <p>{false && "This text"}</p>
    </div>
  );
}

// Ответ на Упражнение 25:
// 1. <p>5</p>
// 2. <p>b is bigger or equal</p>
// 3. <p></p> (ничего не отобразится, так как false && что-либо = false)

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
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
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

  return (
    <div className="part-c-container">
      <h1>Часть C: Практика JSX</h1>
      
      <section className="exercise-group">
        <h2>Простые упражнения</h2>
        
        <div className="exercise">
          <h3>Упражнение 1: Простой заголовок JSX</h3>
          {titleElement}
        </div>
        
        <div className="exercise">
          <h3>Упражнение 2: JSX с встроенным выражением</h3>
          {greetingElement}
        </div>
        
        <div className="exercise">
          <h3>Упражнение 3: Исправление названий атрибутов</h3>
          <Header />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 4: Корневой элемент с одним корнем</h3>
          <Greeting />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 5: Самозакрывающиеся теги</h3>
          <Avatar />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 13: Синтаксис обработчика событий</h3>
          <Clicker />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 22: Именование компонентов</h3>
          <ProfileCard name="Test User" />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 23: Комментарии JSX</h3>
          <Title />
        </div>
      </section>
      
      <section className="exercise-group">
        <h2>Средние упражнения</h2>
        
        <div className="exercise">
          <h3>Упражнение 6: JSX vs React.createElement</h3>
          <p>См. исходный код: elementExercise6 создан через React.createElement</p>
        </div>
        
        <div className="exercise">
          <h3>Упражнение 7: Использование свойств в JSX</h3>
          <StudentCard name="Alice" group="CS-101" />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 8: Деструктуризация</h3>
          <CourseInfo title="React Basics" credits={3} />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 9: Условная отрисовка (тернарный оператор)</h3>
          <Status isOnline={true} /> <Status isOnline={false} />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 10: Условная отрисовка (&&)</h3>
          <Notification count={3} /> <Notification count={0} />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 11: Отображение списков с ключами</h3>
          <TaskList tasks={sampleTasks} />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 14: Передача аргументов обработчикам</h3>
          <StudentSelector />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 15: Встроенные стили</h3>
          <WarningBox />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 16: Фрагменты</h3>
          <Info />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 17: Детская реквизитная работа</h3>
          {cardUsage}
        </div>
        
        <div className="exercise">
          <h3>Упражнение 18: Распределение опор</h3>
          <UserProfile {...user} />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 19: Выражения vs операторы</h3>
          <Access isAdmin={true} /> <Access isAdmin={false} />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 20: Контролируемый ввод</h3>
          <NameInput />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 24: Сложное форматирование</h3>
          <Dashboard user={sampleUser} notifications={sampleNotifications} />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 25: Прогноз результата рендеринга</h3>
          <Example />
          <p>Результаты: 1) 5, 2) "b is bigger or equal", 3) пустой параграф</p>
        </div>
      </section>
      
      <section className="exercise-group">
        <h2>Сложные упражнения</h2>
        
        <div className="exercise">
          <h3>Упражнение 12: Отображение без JSX</h3>
          <StudentList />
        </div>
        
        <div className="exercise">
          <h3>Упражнение 21: Безопасность JSX и XSS</h3>
          <HtmlBlock html="<strong>Safe HTML</strong> <em>content</em>" />
        </div>
      </section>
    </div>
  );
};

export default PartC;