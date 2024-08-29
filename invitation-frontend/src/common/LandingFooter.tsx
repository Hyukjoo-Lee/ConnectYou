import {
    Text,
    Container,
    createStyles,
    Box,
    Anchor,
    Stack,
    MantineProvider,
} from '@mantine/core';

import { Link } from 'react-router-dom';
import * as ConstantStyle from '../common/Constant';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((_theme, _params, _getRef) => ({
    logo: {
        margin: 0,
        fontSize: 25,
        fontWeight: 400,
        color: ConstantStyle.COLOR_BLACK,
    },
}));

const LandingFooter = () => {
    const { classes } = useStyles();
    const RESPONSIVE_MOBILE = useMediaQuery('(max-width: 767px)');

    return (
        <>
            <MantineProvider
                theme={{
                    globalStyles: (_theme) => ({
                        '*, *::before, *::after': {
                            boxSizing: 'border-box',
                        },
                        body: {
                            color: ConstantStyle.COLOR_BLACK,
                        },
                        a: {
                            color: 'inherit!important',
                        },
                    }),
                }}
            >
                <Container py={80} fluid>
                    <Container size={1400}>
                        <Stack>
                            <Anchor
                                component={Link}
                                underline={false}
                                className={classes.logo}
                                to="/"
                                align="center"
                            >
                                <Text weight={700} component="span">
                                    Connect
                                </Text>
                                You
                            </Anchor>
                            <Box my={20}>
                                <Text
                                    size={RESPONSIVE_MOBILE ? 14 : 16}
                                    color="grey"
                                    align="center"
                                >
                                    주소. 서울특별시 강남구 테헤안로 0000,
                                    강남빌딩 000호
                                </Text>
                                <Text
                                    size={RESPONSIVE_MOBILE ? 14 : 16}
                                    color="grey"
                                    align="center"
                                >
                                    Tel. 010-0000-0000 Fax. 02-0000 0000 Mail.
                                    hjjaydon.lee@gmail.com
                                </Text>
                            </Box>
                            <Text size={14} color="grey" align="center">
                                ⓒ2024 ConnectYou
                            </Text>
                        </Stack>
                    </Container>
                </Container>
            </MantineProvider>
        </>
    );
};

export default LandingFooter;
