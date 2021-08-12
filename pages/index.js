import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';
import Button from '../src/components/commons/Buttons';
import Grid from '../src/components/foundation/layout/Grid';

import HomeWrapper from './styles/Home';

const Home = () => (
  <HomeWrapper>
    <Menu />

    <Grid.Container>
      <Grid.Row>
        <Grid.Col
          offset={{ md: 1, xs: 0 }}
          value={{
            md: 5,
            xs: 12
          }}
        >
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
        </Grid.Col>

        <Grid.Col
          value={{
            xs: 12,
            md: 6
          }}
        >
          <img
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>

    <Footer />
  </HomeWrapper>
)

export default Home;
