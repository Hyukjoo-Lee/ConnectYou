import {
  Box,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CustomButton from './CustomButton';

const LandingBody = () => {
  const MOBILE = useMediaQuery('(max-width: 767px)');

  return (
    <Container size="lg" pt={120} pb={80}>
      <Grid align="center" gutter="xl">
        <Grid.Col span={12} md={6}>
          <Stack spacing="md">
            <Text size={MOBILE ? 26 : 40} fw={500}>
              결혼 준비를 하고 계십니까?
            </Text>
            <Text size={MOBILE ? 28 : 42} fw={700}>
              모바일 청첩장을 직접 만들어보세요.
            </Text>
            <CustomButton
              to="/start"
              children="체험하기"
              color="yellow"
              mt={10}
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: MOBILE ? 'column' : 'row',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <Image
              src={require('../assets/images/mockup_1.png')}
              width={MOBILE ? 160 : 220}
              fit="contain"
            />
          </Box>
        </Grid.Col>
      </Grid>

      {/* BENEFIT 1 */}
      <Grid align="center" gutter="xl" mt={100}>
        <Grid.Col span={12} md={6}>
          <Image
            src={require('../assets/images/figure.png')}
            fit="contain"
          />
        </Grid.Col>

        <Grid.Col span={12} md={6}>
          <Stack spacing="lg">
            <Text size={14} fw={600} color="dimmed">
              OUR BENEFIT 1
            </Text>
            <Text size={MOBILE ? 24 : 36} fw={700}>
              모든 템플릿은 커스터마이징 가능합니다.
            </Text>
            <Text size={MOBILE ? 16 : 20}>
              색상부터 문구까지 직접 디자인하여
              세상에 단 하나뿐인 청첩장을 만들어보세요.
            </Text>
            <CustomButton
              to="/create"
              children="제작하기"
              color="yellow"
            />
          </Stack>
        </Grid.Col>
      </Grid>

      {/* BENEFIT 2 */}
      <Grid align="center" gutter="xl" mt={100}>
        <Grid.Col span={12} md={6}>
          <Stack spacing="lg">
            <Text size={14} fw={600} color="dimmed">
              OUR BENEFIT 2
            </Text>
            <Text size={MOBILE ? 24 : 36} fw={700}>
              하객을 간편하게 관리하세요.
            </Text>
            <Text size={MOBILE ? 16 : 20}>
                저희의 모바일 청첩장은 참여 예정인 하객들을 직접
                관리 할 수 있습니다.
            </Text>
            <CustomButton
              to="/preview"
              children="미리보기"
              color="yellow"
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={12} md={6}>
          <Image
            src={require('../assets/images/figure.png')}
            fit="contain"
          />
        </Grid.Col>
      </Grid>

      {/* TEMPLATE SECTION */}
      <Box mt={120}>
        <Title order={2} align="center" mb={60}>
          모바일 웨딩 청첩장 템플릿
        </Title>

        <Grid gutter="xl">
          {[1, 2, 3, 4].map((item) => (
            <Grid.Col key={item} span={12} sm={6} md={3}>
              <Box>
                <Image
                  src={require('../assets/images/figure.png')}
                  fit="cover"
                  radius="md"
                />
              </Box>

              <Stack spacing={4} mt={10}>
                <Text fw={700}>청첩장 템플릿 제목</Text>
                <Text size="sm" color="dimmed">
                  청첩장 설명
                </Text>
                <Text fw={700}>₩29,000</Text>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Box>

    </Container>
  );
};

export default LandingBody;