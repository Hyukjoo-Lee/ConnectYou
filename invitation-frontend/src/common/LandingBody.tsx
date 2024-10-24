import {
    Box,
    Container,
    createStyles,
    Grid,
    Image,
    Stack,
    Text,
} from '@mantine/core';
import CustomButton from './CustomButton';

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

    return (
        <>
            <Container h={2800} fluid>
                <Container size={1400} bg={'#EBEBEB'}>
                    <Grid grow justify="space-between" align="center">
                        {/* 첫 번째 열: 텍스트 */}
                        <Grid.Col span={8} pt={150}>
                            <Stack
                                spacing={0}
                                style={{
                                    height: 700,
                                }}
                                justify="center"
                            >
                                <Text size={40} fw={500}>
                                    결혼 준비를 하고 계십니까?
                                </Text>
                                <Text size={40} fw={700}>
                                    모바일 초정장을 직접 만들어보세요
                                </Text>
                                <CustomButton
                                    to={''}
                                    mt={10}
                                    children={'제작하기'}
                                    color="yellow"
                                />
                            </Stack>
                        </Grid.Col>

                        {/* 두 번째 열: 이미지 1 */}
                        <Grid.Col span={1} pt={150}>
                            <Box className={classes.bannerImg}>
                                <Image
                                    src={require('../assets/images/mockup_1.png')}
                                    alt="mockup1"
                                    width={205}
                                    height={623}
                                />
                            </Box>
                        </Grid.Col>

                        {/* 세 번째 열: 이미지 2 */}
                        <Grid.Col span={1} pt={150}>
                            <Box className={classes.bannerImg}>
                                <Image
                                    src={require('../assets/images/mockup_2.png')}
                                    alt="mockup2"
                                    width={205}
                                    height={623}
                                />
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Container>
                <Container size={1400}>
                    <Grid grow justify="space-between" align="center">
                        <Grid.Col span={4} pt={150} style={{ minHeight: 960 }}>
                            <Box className={classes.bannerImg}>
                                <Image
                                    src={require('../assets/images/figure.png')}
                                    alt="mockup2"
                                    width={205}
                                    height={623}
                                />
                            </Box>
                        </Grid.Col>
                        <Grid.Col
                            span={4}
                            pt={150}
                            style={{ minHeight: 960 }}
                        ></Grid.Col>
                    </Grid>
                </Container>
            </Container>
        </>
    );
};

export default LandingBody;
