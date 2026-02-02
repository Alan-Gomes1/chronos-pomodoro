import { MainRouter } from './routers/MainRouter';
import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/globals.css';
import './styles/theme.css';

export function MyApp() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
