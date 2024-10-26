import {
    Box,
    Container,
    createStyles,
    Grid,
    Image,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import CustomButton from './CustomButton';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((_theme, _params, _getRef) => ({
    trialBtn: {
        maxWidth: 'fit-content',
        textAlign: 'center',
    },
    bannerImg: {
        display: 'flex',
        justifyContent: 'flex-end',
        top: '20%',
    },
}));

const LandingBody = () => {
    const { classes } = useStyles();
    // 데스크탑: max-width: 1200px - 반응형 나중에
    const RESPONSIVE_MOBILE = useMediaQuery('(max-width: 767px');
    // const RESPOSIVE_TABLET = useMediaQuery('(max-width: 900px)');

    return (
        <>
            {/* 헤더 90, */}
            {/* Container 1 */}
            <Container h={790} bg={'#EBEBEB'} fluid>
                <Grid grow justify="space-between" align="center">
                    {/* 첫 번째 열: 텍스트 */}
                    {/* 12 : 행너비의 100%
                        8 : 행너비의 50% */}
                    <Grid.Col span={RESPONSIVE_MOBILE ? 12 : 6} mt={100}>
                        <Stack spacing={5} justify="center" ml={20}>
                            <Text size={40} fw={500}>
                                결혼 준비를 하고 계십니까?
                            </Text>
                            <Text size={40} fw={700}>
                                모바일 초정장을 직접 만들어보세요
                            </Text>
                            <CustomButton
                                to={''}
                                mt={10}
                                children={'체험하기'}
                                color="yellow"
                            />
                        </Stack>
                    </Grid.Col>

                    {/* 두 번째 열: 이미지 1,2*/}
                    <Grid.Col span={6} mt={90}>
                        <Box className={classes.bannerImg}>
                            <Image
                                src={require('../assets/images/mockup_1.png')}
                                alt="mockup1"
                                width={205}
                                height={623}
                                mr={50}
                            />
                            <Image
                                src={require('../assets/images/mockup_2.png')}
                                alt="mockup2"
                                width={205}
                                height={623}
                                mr={20}
                            />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>
            {/* Container 2 */}
            <Container h={700} fluid ml={20}>
                <Grid grow justify="space-between" align="center">
                    <Grid.Col span={6} mt={90}>
                        <Box>
                            <Image
                                src={require('../assets/images/figure.png')}
                                alt="mockup2"
                                width={550}
                                height={600}
                            />
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={RESPONSIVE_MOBILE ? 12 : 6} mt={90}>
                        <Stack spacing={45} justify="center" ml={20}>
                            <Text size={20} fw={500}>
                                OUR BENEFIT 1
                            </Text>
                            <Text size={40} fw={700}>
                                저희의 모든 초청장 템플릿은 커스터마이징이
                                가능합니다.
                            </Text>
                            <Text size={25} fw={400}>
                                마음에 드는 템플렛을 선택한 후 색상부터 문구까지
                                직접 디자인하여 세상에 단 하나뿐인 청첩장을
                                만들어보세요.
                            </Text>
                            <CustomButton
                                to={''}
                                mt={10}
                                children={'제작하기'}
                                color="yellow"
                            />
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
            {/* Container 3 */}
            <Container h={700} fluid>
                <Grid grow justify="space-between" align="center" ml={20}>
                    <Grid.Col span={RESPONSIVE_MOBILE ? 12 : 6} mt={90}>
                        <Stack spacing={45} justify="center" >
                            <Text size={20} fw={500}>
                                OUR BENEFIT 2
                            </Text>
                            <Text size={40} fw={700}>
                                하객들을 관리 해보세요.
                            </Text>
                            <Text size={25} fw={400}>
                                저희의 모바일 청첩장은 참여 예정인 하객들을 직접
                                관리 할 수 있습니다.
                            </Text>
                            <CustomButton
                                to={''}
                                mt={10}
                                children={'미리보기'}
                                color="yellow"
                            />
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={6} mt={90}>
                        <Box>
                            <Image
                                src={require('../assets/images/figure.png')}
                                alt="mockup2"
                                width={550}
                                height={600}
                            />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>
            {/* Container 4 */}
            <Container h={700} fluid mt={150} mb={50} ml={20}>
                <Title size={45} align="center" mb={50}>
                    모바일 웨딩 청첩장 템플릿
                </Title>
                <Grid gutter={20}>
                    <Grid.Col span={3} mb={20}>
                        <Box>
                            <Image
                                src={require('../assets/images/figure.png')}
                                style={{ maxHeight: 625 }}
                                fit="cover"
                                width={'100%'}
                                height={'623px'}
                                alt="template_1"
                            />
                        </Box>
                        <Box>
                            <Grid>
                                <Grid.Col span={6}> 
                                    <Text size={15} weight={700} mt={5}>
                                        청첩장 템플렛 제목
                                    </Text>
                                    <Text>청접장 설명</Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text size={15} mt={5} weight={700} align='right'>
                                        가격
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={3} mb={20}>
                        <Box>
                            <Image
                                src={require('../assets/images/figure.png')}
                                style={{ maxHeight: 625 }}
                                fit="cover"
                                width={'100%'}
                                height={'623px'}
                                alt="template_1"
                            />
                        </Box>
                        <Box>
                            <Grid>
                                <Grid.Col span={6}> 
                                    <Text size={15} weight={700} mt={5}>
                                        청첩장 템플렛 제목
                                    </Text>
                                    <Text>청접장 설명</Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text size={15} mt={5} weight={700} align='right'>
                                        가격
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={3} mb={20}>
                        <Box>
                            <Image
                                src={require('../assets/images/figure.png')}
                                style={{ maxHeight: 625 }}
                                fit="cover"
                                width={'100%'}
                                height={'623px'}
                                alt="template_1"
                            />
                        </Box>
                        <Box>
                            <Grid>
                                <Grid.Col span={6}> 
                                    <Text size={15} weight={700} mt={5}>
                                        청첩장 템플렛 제목
                                    </Text>
                                    <Text>청접장 설명</Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text size={15} mt={5} weight={700} align='right'>
                                        가격
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={3} mb={20}>
                        <Box>
                            <Image
                                src={require('../assets/images/figure.png')}
                                style={{ maxHeight: 625 }}
                                fit="cover"
                                width={'100%'}
                                height={'623px'}
                                alt="template_1"
                            />
                        </Box>
                        <Box>
                            <Grid>
                                <Grid.Col span={6}> 
                                    <Text size={15} weight={700} mt={5}>
                                        청첩장 템플렛 제목
                                    </Text>
                                    <Text>청접장 설명</Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Text size={15} mt={5} weight={700} align='right'>
                                        가격
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Grid.Col>
                   
                </Grid>
            </Container>
        </>
    );
};

export default LandingBody;
