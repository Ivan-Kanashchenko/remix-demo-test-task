import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useSnackbar} from 'notistack';

import {Grid2} from '@mui/material';

import {useMutationProductsDelete} from '~/services/products';

import {ApiProduct} from '~/api-client/types';

import {ProductCard} from './product-card';
import {ProductCardSkeleton} from './product-card-skeleton';

type ProductCardsListProps = {
  data?: ApiProduct[];
  isLoading: boolean;
};

export const ProductCardsList: FC<ProductCardsListProps> = ({data, isLoading}) => {
  const {enqueueSnackbar} = useSnackbar();
  const {t} = useTranslation(['common']);
  const deleteItem = useMutationProductsDelete();

  const doDeleteItem = (item: ApiProduct) => {
    if (!window.confirm(t('common:deleteConfirm', {item: item.title.en || item.title.ar}))) return;

    deleteItem.mutate(
      {id: item.productId},
      {
        onSuccess: async result => {
          result?.meta?.message && enqueueSnackbar(result?.meta?.message, {variant: 'success'});
        },
        onError: err => {
          enqueueSnackbar(err?.message || 'unknown error', {variant: 'error'});
        },
      },
    );
  };

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  if (!data?.length) {
    return null;
  }

  return (
    <Grid2 container spacing={2}>
      {data.map(product => (
        <ProductCard key={product.productId} product={product} doDeleteItem={doDeleteItem} />
      ))}
    </Grid2>
  );
};
