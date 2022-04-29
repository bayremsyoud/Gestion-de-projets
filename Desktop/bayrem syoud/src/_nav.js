import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAddressBook,
  cilAppsSettings,
  cilChartPie,
  cilFolderOpen,
  cilGraph,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Acceuil',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,

  },
  {
    component: CNavItem,
    name: 'Repartition',
    to: '/dashboard',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

  },
  {
    component: CNavItem,
    name: 'Suivi',
    to: '/dashboard',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,

  },
  {
    component: CNavGroup,
    name: 'Gestion Utilisateur',
    to: '/gestion/viewUsers',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Consultation',
        to: '/gestion/viewUsers',
      },
      {
        component: CNavItem,
        name: 'Desactivation',
        to: '/gestion/deleteUser',
      },
      {
        component: CNavItem,
        name: 'Ajouter un Utilisateur',
        to: '/gestion/addUser',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Gestion Clients',
    to:'' ,
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ajouter Clients',
        to: '',
      },
      
      {
        component: CNavItem,
        name: 'Consulter list clients',
        to: '',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Gestion Projets',
    to:'' ,
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ajouter projet',
        to: '',
      },
      
      {
        component: CNavItem,
        name: 'Consulter list projets',
        to: '',
      }
    ],
  },
  {
    component: CNavItem,
    name: 'Rapport',
    to: '/dashboard',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,

  },
]

export default _nav
