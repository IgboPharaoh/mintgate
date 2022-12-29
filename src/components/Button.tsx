import React from 'react';
import { Button as CustomButton } from '@chakra-ui/react';

export type ButtonProps = {
    label: string;
    onClick: () => void;
    color?: string;
    icon?: any;
    size?: string;
};

export const Button = (button: ButtonProps) => {
    return (
        <CustomButton
            onClick={button.onClick}
            backgroundColor='black'
            color={button.color || 'white'}
            fontSize={12}
            size={button.size}
            rightIcon={button.icon}
        >
            {button.label}
        </CustomButton>
    );
};
