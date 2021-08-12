import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';
import Button from '../src/components/commons/Buttons';

import HomeWrapper from './styles/Home';

const Home = () => (
  <HomeWrapper>
    <Menu />

    <div>
      <Text
        tag="h1"
        variant="title"
        color="tertiary.main"
        textAlign={{
          xs: 'center',
          md: 'left',
        }}
      >
        Compartilhe momentos e conecte-se com amigos
      </Text>
      <Text
        tag="p"
        variant="paragraph1"
        color="tertiary.light"
        textAlign={{
          xs: 'center',
          md: 'left',
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      </Text>

      <Button
        display="block"
        variant="primary.main"
        margin={{
          xs: 'auto',
          md: 'initial',
        }}
      >
        Cadastrar
      </Button>
    </div>

    <Footer />
  </HomeWrapper>
)

export default Home;
