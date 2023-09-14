import './App.css';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { routeConfig } from './config';
import { AppLayout } from './layouts';
import { ContentHeaderProvider } from './providers';

function App() {
  return (
    <HashRouter>
      {/* 
      this context should enable us to dynamically 
      change the ContentHeader at any level of the app 
      */}
      <ContentHeaderProvider>
        <AppLayout date-testid='app-layout'>
          <Routes>
            {routeConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                errorElement={route.errorElement}
              />
            ))}
          </Routes>
        </AppLayout>
      </ContentHeaderProvider>
    </HashRouter>
  );
}

export default App;
