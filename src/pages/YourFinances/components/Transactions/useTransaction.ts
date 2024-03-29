import { useEffect, useState } from 'react';

import { useTheme } from '../../../../contexts/useTheme';
import { useTransactions } from '../../../../hooks/useTransactions';
import { TransactionFilter } from '../../../../services/transactionsService/getAll';
import { ITransactions } from '../../../../types/Transaction';
import { useYourFinancesContext } from '../YourFinancesContext/useYourFinancesContext';

export function useTransaction() {
  const { arValuesVisible } = useYourFinancesContext();
  const { theme } = useTheme();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const [openEditTransactionModal, setOpenEditTransactionModal] =
    useState<boolean>(false);

  const [transactionIsBeingEdited, setTransactionIsBeingEdited] =
    useState<null | ITransactions>(null);

  const [filters, setFilters] = useState<TransactionFilter>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);

  const { transactions, isInitialLoading, isLoading, refetchTransactions } =
    useTransactions(filters);

  function handleOpenFilterModal() {
    setOpenFilterModal(true);
  }

  function handleCloseFilterModal() {
    setOpenFilterModal(false);
  }

  function handleChangeFilters<TFilter extends keyof TransactionFilter>(
    filter: TFilter,
  ) {
    return (value: TransactionFilter[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  function handleApplyFilters({
    bankAccountId,
    year,
  }: {
    bankAccountId: string | undefined;
    year: number;
  }) {
    handleChangeFilters('bankAccountId')(bankAccountId);
    handleChangeFilters('year')(year);
    handleCloseFilterModal();
  }

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

  function handleOpenEditTransactionModal(transaction: ITransactions) {
    setOpenEditTransactionModal(true);
    setTransactionIsBeingEdited(transaction);
  }

  function handleCloseEditTransactionModal() {
    setOpenEditTransactionModal(false);
    setTransactionIsBeingEdited(null);
  }

  return {
    activeIndex,
    setActiveIndex,
    isInitialLoading,
    isLoading,
    transactions,
    arValuesVisible,
    openEditTransactionModal,
    handleOpenEditTransactionModal,
    handleCloseEditTransactionModal,
    transactionIsBeingEdited,
    filters,
    handleChangeFilters,
    openFilterModal,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleApplyFilters,
    theme,
    sliderState,
    setSliderState,
  };
}
