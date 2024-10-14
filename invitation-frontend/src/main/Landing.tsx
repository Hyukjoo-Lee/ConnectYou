import { MantineProvider } from '@mantine/core';
import LandingHeader from '../common/LandingHeader';
import LandingFooter from '../common/LandingFooter';
import * as ConstantStyle from '../common/Constant';
import LandingBody from '../common/LandingBody';

const Landing = () => {
    return (
        <MantineProvider
            theme={{
                fontFamily: 'Roboto',
                globalStyles: (_theme) => ({
                    '*, *::before, *::after': {
                        boxSizing: 'border-box',
                    },
                    a: {
                        color: 'inherit!important',
                    },
                    body: {
                        color: ConstantStyle.COLOR_BLACK,
                    },
                }),
            }}
        >
            {/* 헤더 */}
            <LandingHeader />
            {/* 바디 */}
            <LandingBody />
            {/* 푸터 */}
            <LandingFooter />
        </MantineProvider>
    );
};

export default Landing;
