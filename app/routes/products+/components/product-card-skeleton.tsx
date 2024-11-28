import {FC} from 'react';

import {Grid2, Skeleton, Card, CardContent, Stack, Box} from '@mui/material';

export const ProductCardSkeleton: FC = () => {
  return (
    <Grid2 container spacing={2}>
      <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'stretch'}}>
        <Skeleton variant="rectangular" height={300} />
        <CardContent>
          <Box display="flex" justifyContent="space-between" width="100%" mb={2}>
            <Skeleton variant="text" width="60%" height={40} />
          </Box>

          <Skeleton variant="text" width="40%" />

          <Skeleton variant="text" width="40%" />

          <Skeleton variant="text" width="40%" />

          <Skeleton variant="text" width="40%" />

          <Skeleton variant="text" width="40%" />

          <Skeleton variant="text" width="40%" />

          <Stack spacing={1} mt={1}>
            <Skeleton variant="rectangular" width="100%" height={40} />
            <Skeleton variant="rectangular" width="100%" height={40} />
          </Stack>
        </CardContent>
      </Card>
    </Grid2>
  );
};
