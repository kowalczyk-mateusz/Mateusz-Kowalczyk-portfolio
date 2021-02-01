import React from 'react'
import MainImage from './Assets/Images/MainImage.jpg'
import styled from 'styled-components'
import About from './Pages/About'
import Projects from './Pages/Project'
import Contact from './Pages/Contact'
import Experience from './Pages/Experience'
import Stack from './Pages/Stack'
function App() {
  return (
    <div className="App">
      <About/>
      <Projects/>
      <Contact/>
      <Experience/>
      <Stack/>
    </div>
  );
}

export default App;
