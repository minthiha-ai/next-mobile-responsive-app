import { Button } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ fontSize, padding, borderRadius, fontWeight, inset, width }) => ({
    boxShadow: `2px 4px 4px 0px #00000040 ${inset ? 'inset' : ''}`,
    fontSize: fontSize || '0.7rem', // Default value if not passed
    padding: padding || '0.4rem 1.5rem', // Default value if not passed
    backgroundColor: '#2694E5',
    borderRadius: borderRadius || '20px', // Default value if not passed
    fontWeight: fontWeight || 'bold',
    width: width || '',
    '&:hover': {
        backgroundColor: '#2694E5',
        boxShadow: `2px 4px 4px 0px #00000040 ${inset ? '' : 'inset'}`,
    },
    '&:active': {
        backgroundColor: '#2694E5',
        boxShadow: `2px 4px 4px 0px #00000040 ${inset ? '' : 'inset'}`,
    },
    '&:focus': {
        backgroundColor: '#2694E5',
        boxShadow: `2px 4px 4px 0px #00000040 ${inset ? '' : 'inset'}`,
    },
}));

const InsetShadowButton = ({ text, fontSize, padding, borderRadius, fontWeight, width, inset = false }) => {
    return (
        <StyledButton
            fontSize={fontSize}
            padding={padding}
            borderRadius={borderRadius}
            fontWeight={fontWeight}
            variant="contained"
            width={width}
            inset={inset}
            disableRipple
        >
            {text}
        </StyledButton>
    );
};

export default InsetShadowButton;
