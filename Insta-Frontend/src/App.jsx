import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./features/auth/auth.context"
import "./style.scss"

function App() {


  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}

export default App
