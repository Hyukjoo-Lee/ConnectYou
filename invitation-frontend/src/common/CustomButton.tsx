import { Anchor, Button, ButtonProps } from '@mantine/core';
import { Link } from 'react-router-dom';
import { createStyles } from '@mantine/core';
import { ReactNode } from 'react';

const useStyles = createStyles(
    (_theme, { textColor, fontSize, width, height }: any) => ({
        trialBtn: {
            minWidth: 'fit-content',
            width: width || '80px',
            height: height || '42px',
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        anchorStyle: {
            textDecoration: 'none',
            color: textColor || 'white',
            fontSize: fontSize || '16px',
        },
    })
);

interface CustomButtonProps extends ButtonProps {
    to: string;
    children: ReactNode;
    buttonColor?: string;
    textColor?: string;
    width?: string;
    height?: string;
    fontSize?: string;
}

const CustomButton = ({
    to,
    children,
    buttonColor,
    textColor,
    width,
    height,
    fontSize,
    ...props
}: CustomButtonProps) => {
    const { classes } = useStyles({ textColor, width, height, fontSize });

    return (
        <Button className={classes.trialBtn} {...props} uppercase>
            <Anchor
                className={classes.anchorStyle}
                component={Link}
                underline={false}
                to={to}
            >
                {children}
            </Anchor>
        </Button>
    );
};

export default CustomButton;
