import {FC} from 'react';

import {Box, Typography} from '@mui/material';

//
//

interface ProductCardRowProps {
  label: string;
  value?: number | string | null;
}

export const ProductCardRow: FC<ProductCardRowProps> = ({label, value}) => {
  return (
    <Box display="flex" gap={1}>
      <Typography variant="body2" fontWeight={500}>
        {label}:
      </Typography>
      {value ? <Typography variant="body2">{value}</Typography> : '---'}
    </Box>
  );
};
