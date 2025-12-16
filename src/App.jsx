import React, { useState } from 'react'
import PartA from './exercises/PartA.js'
import PartB from './exercises/PartB.js'
import PartC from './exercises/PartC.js'

function App() {
  const [currentPage, setCurrentPage] = useState('parta')

  const handleNavigate = (page) => {
    console.log('Navigate to:', page)
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <h1>Главная страница</h1>
            <p>Выберите раздел:</p>
            <button onClick={() => setCurrentPage('parta')}>Part A</button>
            <button onClick={() => setCurrentPage('partb')}>Part B</button>
            <button onClick={() => setCurrentPage('partc')}>Part C</button>
          </div>
        )
      case 'parta':
        return React.createElement(PartA, { onNavigate: handleNavigate })
      case 'partb':
        return React.createElement(PartB, { onNavigate: handleNavigate })
      case 'partc':
        return React.createElement(PartC, { onNavigate: handleNavigate })
      default:
        return React.createElement(PartA, { onNavigate: handleNavigate })
    }
  }

  const Navigation = () => React.createElement('div', { style: { marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' } },
    React.createElement('button', { 
      onClick: () => setCurrentPage('home'),
      style: { marginRight: '10px' }
    }, '🏠 Home'),
    React.createElement('button', { 
      onClick: () => setCurrentPage('parta'),
      style: { marginRight: '10px' }
    }, '📘 Part A'),
    React.createElement('button', { 
      onClick: () => setCurrentPage('partb'),
      style: { marginRight: '10px' }
    }, '📗 Part B'),
    React.createElement('button', { 
      onClick: () => setCurrentPage('partc') 
    }, '📙 Part C')
  )

  return React.createElement('div', null,
    React.createElement(Navigation),
    React.createElement('hr'),
    renderPage()
  )
}

export default App