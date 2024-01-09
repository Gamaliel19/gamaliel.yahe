import 'swiper/swiper-bundle.css'
import { CSSReset, ColorModeProvider, ThemeProvider} from '@chakra-ui/react'
import Router from './Router';
import theme from './Components/Theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Router />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;


