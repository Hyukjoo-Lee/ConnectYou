import {
  Header,
  Grid,
  Text,
  Container,
  Group,
  Anchor,
  Menu,
  Drawer,
  Burger,
  Stack,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { IconFriends } from '@tabler/icons';
import CustomButton from './CustomButton';

const LandingHeader = () => {
  const MOBILE = useMediaQuery('(max-width: 767px)');
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Header
        height={MOBILE ? 60 : 90}
        px="md"
        sx={{
          position: 'fixed',
          width: '100%',
          top: 0,
          backgroundColor: 'white',
          borderBottom: '1px solid #eee',
          zIndex: 100,
        }}
      >
        <Container size="lg" h="100%">
          <Grid align="center" justify="space-between" h="100%">

            {/* 로고 */}
            <Grid.Col span="content">
              <Anchor component={Link} underline={false} to="/">
                <Text fw={700} size="xl">
                  Connect<span style={{ fontWeight: 400 }}>You</span>
                </Text>
              </Anchor>
            </Grid.Col>

            {/* 데스크탑 메뉴 */}
            {!MOBILE && (
              <Grid.Col span="content">
                <Group spacing={30}>
                  <Menu trigger="hover" withinPortal>
                    <Menu.Target>
                      <Anchor fw={600} style={{ cursor: 'pointer' }}>
                        템플렛
                      </Anchor>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item component={Link} to="/wedding/jwds">
                        정우형 ♥ 다솜씨
                      </Menu.Item>
                      <Menu.Item component={Link} to="/wedding/sample">
                        샘플 청첩장
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>

                  <Anchor component={Link} to="/" fw={600}>
                    고객센터
                  </Anchor>

                  <CustomButton to="/" children="로그인" variant="default" />
                  <CustomButton to="/" children="회원가입" variant="default" />
                  <CustomButton
                    leftIcon={<IconFriends size={16} />}
                    to="/"
                    children="마이페이지"
                    variant="white"
                  />
                </Group>
              </Grid.Col>
            )}

            {/* 모바일 햄버거 */}
            {MOBILE && (
              <Grid.Col span="content">
                <Burger opened={opened} onClick={toggle} size="sm" />
              </Grid.Col>
            )}
          </Grid>
        </Container>
      </Header>

      {/* 모바일 Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        padding="lg"
        size="80%"
        title="메뉴"
      >
        <Stack spacing="lg">

          <Text fw={600}>템플렛</Text>
          <Anchor component={Link} to="/wedding/jwds" onClick={close}>
            정우형 ♥ 다솜씨
          </Anchor>
          <Anchor component={Link} to="/wedding/sample" onClick={close}>
            샘플 청첩장
          </Anchor>

          <Anchor component={Link} to="/" onClick={close}>
            고객센터
          </Anchor>

          <CustomButton to="/" children="로그인" />
          <CustomButton to="/" children="회원가입" />
          <CustomButton
            leftIcon={<IconFriends size={16} />}
            to="/"
            children="마이페이지"
          />
        </Stack>
      </Drawer>
    </>
  );
};

export default LandingHeader;