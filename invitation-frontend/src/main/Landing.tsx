import { MantineProvider } from '@mantine/core';
import LandingHeader from '../common/LandingHeader';

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
                    body: {},
                }),
            }}
        >
            {/* 헤더 */}
            <LandingHeader />
        </MantineProvider>
    );
};

export default Landing;
