import React from 'react';
import Home from './components/home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHamburger, faProjectDiagram, faLaptopCode, faBriefcase, faUser, faCircle, faLink, faCloudDownloadAlt,faDownload,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faHamburger, faProjectDiagram, faLaptopCode, faBriefcase, faUser,faCircle, faLink,faCloudDownloadAlt ,faDownload, faPhone,faEnvelope)
function App() {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
