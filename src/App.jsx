import { useState } from 'react'
import './App.css'
import Boxs from './components/boxs'
import Config from './components/config'
import Caixalogo from './components/cxlogo'

function App() {

  const [modelo, mudaModelo] = useState([
    {
      id: 1,
      logo: "/gerenciador/images/logo-devlens.svg",
      name: "DevLens",
      description: "Quickly inspect page layouts and visualize element boundaries.",
      isActive: false,
      type:"all"
    },
    {
      id: 2,
      logo: "/gerenciador/images/logo-style-spy.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: false,
      type:"all"
    },
    {
      id: 3,
      logo: "/gerenciador/images/logo-speed-boost.svg",
      name: "SpeedBoost",
      description: "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
      type:"all"
    },
    {
      id: 4,
      logo: "/gerenciador/images/logo-json-wizard.svg",
      name: "JSONWizard",
      description: "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: false,
      type:"all"
    },
    {
      id: 5,
      logo: "/gerenciador/images/logo-tab-master-pro.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: false,
      type:"all"
    },
    {
      id: 6,
      logo: "/gerenciador/images/logo-viewport-buddy.svg",
      name: "ViewportBuddy",
      description: "Simulates various screen resolutions directly within the browser.",
      isActive: false,
      type:"all"
    },
    {
      id: 7,
      logo: "/gerenciador/images/logo-markup-notes.svg",
      name: "Markup Notes",
      description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: false,
      type:"all"
    },
    {
      id: 8,
      logo: "/gerenciador/images/logo-grid-guides.svg",
      name: "GridGuides",
      description: "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
      type:"all"
    },
    {
      id: 9,
      logo: "/gerenciador/images/logo-palette-picker.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: false,
      type:"all"
    },
    {
      id: 10,
      logo: "/gerenciador/images/logo-link-checker.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: false,
      type:"all"
    },
    {
      id: 11,
      logo: "/gerenciador/images/logo-dom-snapshot.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
      type:"all"
    },
    {
      id: 12,
      logo: "/gerenciador/images/logo-console-plus.svg",
      name: "ConsolePlus",
      description: "Enhanced developer console with advanced filtering and logging.",
      isActive: false,
      type:"all"
    }
  ])

  const [cxinfos, mudaInfo] = useState([
    { 
      id: 1,
      logo: "/gerenciador/images/logo-devlens.svg",
      name: "DevLens",
      description: "Quickly inspect page layouts and visualize element boundaries.",
      isActive: false,
      type:"all"
    },
    {
      id: 2,
      logo: "/gerenciador/images/logo-style-spy.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: false
    },
    {
      id: 3,
      logo: "/gerenciador/images/logo-speed-boost.svg",
      name: "SpeedBoost",
      description: "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
      type:"all"
    },
    {
      id: 4,
      logo: "/gerenciador/images/logo-json-wizard.svg",
      name: "JSONWizard",
      description: "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: false,
      type:"all"
    },
    {
      id: 5,
      logo: "/gerenciador/images/logo-tab-master-pro.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: false,
      type:"all"
    },
    {
      id: 6,
      logo: "/gerenciador/images/logo-viewport-buddy.svg",
      name: "ViewportBuddy",
      description: "Simulates various screen resolutions directly within the browser.",
      isActive: false,
      type:"all"
    },
    {
      id: 7,
      logo: "/gerenciador/images/logo-markup-notes.svg",
      name: "Markup Notes",
      description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: false,
      type:"all"
    },
    {
      id: 8,
      logo: "/gerenciador/images/logo-grid-guides.svg",
      name: "GridGuides",
      description: "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
      type:"all"
    },
    {
      id: 9,
      logo: "/gerenciador/images/logo-palette-picker.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: false,
      type:"all"
    },
    {
      id: 10,
      logo: "/gerenciador/images/logo-link-checker.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: false,
      type:"all"
    },
    {
      id: 11,
      logo: "/gerenciador/images/logo-dom-snapshot.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
      type:"all"
    },
    {
      id: 12,
      logo: "/gerenciador/images/logo-console-plus.svg",
      name: "ConsolePlus",
      description: "Enhanced developer console with advanced filtering and logging.",
      isActive: false,
      type:"all"
    }
  ])
 
  

  function ativadosOuNao(idCX, check) {
 
    const newsDateInfo = cxinfos.map((indice) => {
      if (idCX == indice.id) {
        return {...indice, isActive: check}
      }

      return indice
    })

    const newsDateModel = modelo.map((indice) => {
      if (idCX == indice.id) {
        return {...indice, isActive: check}
      }

      return indice
    })
    
    mudaModelo(newsDateModel)
    mudaInfo(newsDateInfo)

  }

  function mostrar(title) {
  
    switch(title) {
      case `active`:{
        mudaInfo(modelo.filter(indice => indice.isActive == true))

        break
      }
      case "inactive":{
        mudaInfo(modelo.filter(indice => indice.isActive == false))
        break
      }
      default :{
        mudaInfo(modelo)
      }
    } 

  }

  function cxremove(id) {
    const newscx = cxinfos.filter(indice => indice.id != id)
    mudaModelo(modelo.filter(indice => indice.id != id))
    mudaInfo(newscx)
  }

  function modeDARK(value) {
    const cxdark = document.getElementById('cxdark')
    
    if (value) {
      cxdark.classList.add('dark')
    } else {
      cxdark.classList.remove('dark')
    }
  }

  return (
    <div id='cxdark'>
      <div className='bg-[#ECF3FD] min-h-screen max-w-screen p-7 dark:bg-linear-[180deg,_#040918_0%,_#091540_100%]'>
        <div className='flex flex-col gap-[40px_0px]'>
          <Caixalogo mode={modeDARK} />
          <Config mostrar={mostrar} />
          <Boxs caixas={cxinfos} remove={cxremove} actives={ativadosOuNao}  />
        </div>
      </div>
    </div>
  )
}

export default App