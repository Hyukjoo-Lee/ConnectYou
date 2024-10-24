import {
    Header,
    Grid,
    Text,
    Container,
    createStyles,
    Button,
    Group,
    Anchor,
    MantineProvider,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { IconFriends } from '@tabler/icons';
import CustomButton from './CustomButton';

const useStyles = createStyles((_theme, _params, _getRef) => ({
    header: {
        border: 'none',
        position: 'fixed',
        width: '100%',
        left: 0,
        top: 0,
        backgroundColor: 'transparent',
    },
    headerLeft: {
        display: 'flex',
        flexWrap: 'nowrap',
    },
    headerRight: {
        display: 'flex',
        flexWrap: 'nowrap',
    },
    logo: {
        fontSize: 25,
        fontWeight: 400,
    },
    gnbLists: {
        display: 'flex',
        alignItem: 'center',
        fontSize: 16,
        whiteSpace: 'nowrap',
        gap: 10,
        marginLeft: 30,
    },
    gnbList: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 16,
        fontWeight: 600,
    },
}));

const LandingHeader = () => {
    const { classes } = useStyles();
    const RESPONSIVE_MOBILE = useMediaQuery('(max-width: 767px)');

    return (
        <>
            <MantineProvider
                theme={{
                    fontFamily: 'Roboto',
                    globalStyles: (_theme) => ({
                        '*, *::before, *::after': {
                            boxSizing: 'border-box',
                        },
                        body: {},
                        a: {
                            color: 'inherit!important',
                        },
                    }),
                }}
            >
                {/* HEADER */}
                <Header
                    height={RESPONSIVE_MOBILE ? 60 : 90}
                    className={classes.header}
                    py={RESPONSIVE_MOBILE ? 10 : 25}
                >
                    <Container size={1400}>
                        <Grid justify="space-between" align="center">
                            <Grid.Col span={6}>
                                <Container
                                    className={classes.headerLeft}
                                    px={RESPONSIVE_MOBILE ? 0 : 20}
                                >
                                    <Anchor
                                        component={Link}
                                        underline={false}
                                        className={classes.logo}
                                        to="/"
                                    >
                                        <Text weight={700} component="span">
                                            Connect
                                        </Text>
                                        You
                                    </Anchor>
                                    <Group
                                        className={classes.gnbLists}
                                        style={{
                                            display: RESPONSIVE_MOBILE
                                                ? 'none'
                                                : 'block',
                                        }}
                                    >
                                        <Anchor
                                            fz="lg"
                                            component={Link}
                                            underline={false}
                                            className={classes.gnbList}
                                            color="dark"
                                            to="/"
                                        >
                                            고객센터
                                        </Anchor>
                                        <Anchor
                                            fz="lg"
                                            component={Link}
                                            underline={false}
                                            className={classes.gnbList}
                                            color="dark"
                                            to="/"
                                        >
                                            템플렛
                                        </Anchor>
                                        <CustomButton
                                            to={''}
                                            children={'제작하기'}
                                            color="yellow"
                                            ml={15}
                                        />
                                    </Group>
                                </Container>
                            </Grid.Col>
                            <Grid.Col span="content">
                                <Container
                                    className={classes.headerRight}
                                    px={RESPONSIVE_MOBILE ? 0 : 20}
                                >
                                    <Group
                                        className={classes.gnbLists}
                                        style={{
                                            display: RESPONSIVE_MOBILE
                                                ? 'none'
                                                : 'block',
                                        }}
                                    >
                                        <CustomButton
                                            to={'Login'}
                                            children={'로그인'}
                                            variant="default"
                                            mr={10}
                                            p={12}
                                        />
                                        <CustomButton
                                            to={'Login'}
                                            children={'회원가입'}
                                            variant="default"
                                            mr={10}
                                            p={12}
                                        />
                                    </Group>
                                    <Group className={classes.gnbLists} ml={20}>
                                        <CustomButton
                                            leftIcon={<IconFriends />}
                                            to={'Login'}
                                            children={'마이페이지'}
                                            variant="white"
                                            mr={10}
                                            p={12}
                                        />
                                    </Group>
                                </Container>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Header>
            </MantineProvider>
        </>
    );
};

export default LandingHeader;
