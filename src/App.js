import { AppParentContainer, GlobalStyled } from './AppSC';
import Header from './components/header/Header';
import ContentPage from './pages/contentPage/ContentPage';

function App() {
  return (
    <AppParentContainer>
      <GlobalStyled />
      <Header />
      <ContentPage />

    </AppParentContainer>
  );
}

export default App;
