import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home';
import Account from './pages/Account';
import { ThemeProvider } from "./components/theme-provider"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route path="/account" element={<Account />} />
      <Route path='/home' element={<Home />}/>
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
