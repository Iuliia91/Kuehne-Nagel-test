import React from 'react'
import { Provider } from 'react-redux'
import { store, persist } from 'store/initStore'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from 'Layouts/MainLauot'
import GlobalStyledProvide from 'HOC/GlobalStyledProvider'
const App = () => {
  // return <RootRouter />
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <BrowserRouter>
          <GlobalStyledProvide />
          <MainLayout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
