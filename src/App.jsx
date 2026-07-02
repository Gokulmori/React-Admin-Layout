import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import RightNavBar from './components/layout/RightNavBar'
import Header from './components/layout/Header'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background bg-cover bg-fixed bg-center text-body">
      <Sidebar />
      <RightNavBar />
      <div className="flex h-full flex-col overflow-hidden px-3 pb-3 transition-[padding] duration-300 sm:pe-[4.5rem] xl:ps-[4.5rem]">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts/1" replace />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/contacts/:contactId" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/contacts/1" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
