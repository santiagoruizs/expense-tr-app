import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home';
import Account from './pages/Account';
import Records from './pages/Records';
import Savings from './pages/Savings';
import { ThemeProvider } from "./components/theme-provider"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route path="/account" element={<Account />} />
      <Route path='/home' element={<Home />}/>
      <Route path='/records' element={<Records />}/>
      <Route path='/savings' element={<Savings />}/>
    </Route>
))

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme' >
      <RouterProvider router={router} /> 
    </ThemeProvider>
  )
}

export default App
