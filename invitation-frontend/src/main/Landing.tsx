import { MantineProvider } from '@mantine/core';
import LandingHeader from '../common/LandingHeader';
import LandingFooter from '../common/LandingFooter';
import * as ConstantStyle from '../common/Constant';

const Landing = () => {
    return (
        <MantineProvider
            theme={{
                fontFamily: 'SeoulHangang, sans-serif',
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
            
            {/* 푸터 */}
            <LandingFooter />
        </MantineProvider>
    );
};

export default Landing;
