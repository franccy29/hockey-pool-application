import React from 'react';
import { styled } from '@mui/system';

export const TopBannerStyled = styled('div')({
  display: 'flex',
  backgroundColor: 'blue',
  padding: '0 20px',
  justifyContent: 'space-between',
  color: 'white',

  '.top-bar-right': {
    display: 'flex',
    gap: '10px'
  },
});
