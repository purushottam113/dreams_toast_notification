import './App.css';
import Body from './components/Body'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

const appRouter = createBrowserRouter([{
   path: '/',
   element: <Body/>,
   children: [
    {
      path: '/',
      element: <Component1 />
    },
    {
      path: 'component2',
      element: <Component2 />
    },
    {
      path: 'component3',
      element: <Component3 />
    },
   ]  
}])

function App() {
  return (
    <RouterProvider router={appRouter}>
      <div className="App">
        <appRouter/>
      </div>
      </RouterProvider>
  );
}

export default App;
