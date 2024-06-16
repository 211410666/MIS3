import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';
import './App_66.css';
import {
  HomePage,
  Selection,
  All_topic,
  Exam,
  ReviewWrong,
  Rank
} from './pages/index'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/selection',
    element: <Selection />,
  },
  {
    path: '/all_topics',
    element: <All_topic />,
  },
  {
    path: '/exam',
    element: <Exam />,
  },
  {
    path: '/review',
    element: <ReviewWrong />,
  },
  {
    path: '/rank',
    element: <Rank />,
  },
]);

function App_66() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <RouterProvider router={router} />
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 4000,
            },
            styles: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-70)',
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App_66;
