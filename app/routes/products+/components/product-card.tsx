import {formatRelative} from 'date-fns';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {Box, Button, Card, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import {DeleteOutline, EditOutlined} from '@mui/icons-material';

import {AppButton} from '~/global/components/app-button';

import {ApiProduct} from '~/api-client/types';

import {ProductCardRow} from './product-card-row';

const PLACEHOLDER =
  'https://www.mechatronik.de/fileadmin/doc/verkauf/fahrzeugvermarktung/Nissan_GTR/Nissan_GTR-10_Kopie.jpg';

const IMAGE_HEIGHT = 300;

const SPACING = 1;

type ProductCardProps = {
  product: ApiProduct;
  doDeleteItem: (item: ApiProduct) => void;
};

export const ProductCard: FC<ProductCardProps> = ({product, doDeleteItem}) => {
  const {t} = useTranslation(['common', 'products']);

  const title = product.title.en || product.title.ar;

  const formattedPrice = `${Number(product.price).toLocaleString() || '---'}`;

  const formattedSalePrice = Number(product.priceSale).toLocaleString() || '---';

  const formattedCreatedDate = formatRelative(new Date(product.createdAt), new Date());

  const formattedUpdatedDate =
    product.updatedAt && product.updatedAt !== product.createdAt
      ? formatRelative(new Date(product.updatedAt), new Date())
      : '---';

  return (
    <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', mb: SPACING}}>
      <CardMedia
        component="img"
        height={IMAGE_HEIGHT}
        image={product?.image || PLACEHOLDER}
        alt={title}
      />
      <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        <Box display="flex" gap={1} mb={SPACING}>
          <Typography variant="body1">{title}</Typography>

          {product.isActive && (
            <Typography variant="body1" color="success.main">
              ({t('common:active')})
            </Typography>
          )}
        </Box>

        <ProductCardRow label={t('products:sku')} value={product.sku} />

        <ProductCardRow label={t('products:quantity')} value={product.quantity} />

        <ProductCardRow label={t('products:price')} value={formattedPrice} />

        <ProductCardRow label={t('products:priceSale')} value={formattedSalePrice} />

        <ProductCardRow label={t('common:createdAt')} value={formattedCreatedDate} />

        <ProductCardRow label={t('common:updatedAt')} value={formattedUpdatedDate} />

        <Stack direction="column" spacing={SPACING} alignItems="stretch" mt={SPACING}>
          <AppButton variant="outlined" size="medium" to={`/products/${product.productId}`}>
            <EditOutlined />
          </AppButton>

          <Button
            variant="contained"
            size="medium"
            onClick={() => doDeleteItem(product)}
            color="error"
          >
            <DeleteOutline />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
