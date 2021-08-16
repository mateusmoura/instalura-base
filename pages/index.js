import React from 'react';

import Head from 'next/head';

import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';
import Button from '../src/components/commons/Buttons';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';

// import HomeWrapper from './styles/Home';

const Home = () => (
  <Box
    flex={1}
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    backgroundRepeat="no-repeat"
    justifyContent="space-between"
    backgroundPosition="bottom right"
    backgroundImage="url(/images/bubbles.svg)"
  >
    <Head>
      <title>Mateus Moura</title>

    </Head>

    <Menu />

    <Grid.Container>
      <Grid.Row>
        <Grid.Col
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          margin={{
            xs: '32px 0 40px',
          }}
          offset={{ md: 1, xs: 0 }}
          value={{ md: 5, xs: 12 }}
        >
          <div>
            <Text
              tag="h1"
              variant="title"
              color="tertiary.main"
              margin={{
                xs: '0 0 12px',
                md: ' 0 0 16px',
              }}
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
              margin={{
                xs: '0 0 24px',
                md: '0 0 40px 0',
              }}
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
          margin={{
            xs: '0 auto 34px',
            md: '75px auto 40px',
          }}
          value={{
            xs: 12,
            md: 6,
          }}
        >
          <img
            style={{ display: 'block', margin: 'auto' }}
            alt="Imagem ilustrativa apresentando o projeto no Celular"
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>

    <Footer />
  </Box>
);

export default Home;
