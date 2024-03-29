import { EmptyTasks } from '../../../../assets/Icons/EmptyTasks';
import { FilterIcon } from '../../../../assets/Icons/FIlterIcon';
import { InputSearch } from '../../../../components/InputSearch';
import { Spinner } from '../../../../components/Spinner';
import { FilterTaskModal } from '../Modals/FilterTaskModal';

import Card from './Card';
import { SearchNotFound } from './SearchNotFound';
import { Container, Header } from './style';
import { TypeTaskDropdown } from './TypeTaskDropdown';
import { useTasks } from './useTasks';

export function Tasks() {
  const {
    initialLoading,
    isLoading,
    tasks,
    handleOpenEditTaskModal,
    searchInput,
    handleChangeSearchInput,
    tasksFiltered,
    openFilterModal,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleApplyFilterCategoryId,
    handleApplyFilterTypeTask,
    filters,
  } = useTasks();

  const hasTasks = tasks.length > 0;
  const isEmptyList = tasks.length > 0 && tasksFiltered.length < 1;

  return (
    <Container>
      {initialLoading && (
        <div className="isInitialLoading">
          <Spinner width="40" height="40" />
        </div>
      )}

      {!initialLoading && (
        <>
          <Header>
            {!isEmptyList && (
              <FilterTaskModal
                open={openFilterModal}
                handleCloseModal={handleCloseFilterModal}
                handleApplyFilterCategoryId={handleApplyFilterCategoryId}
              />
            )}

            <InputSearch
              value={searchInput}
              onChange={handleChangeSearchInput}
              placeholder="Pesquisar tarefas..."
            />

            <button onClick={handleOpenFilterModal} type="button">
              <FilterIcon />
            </button>
          </Header>

          {!searchInput && (
            <TypeTaskDropdown
              handleApplyFilterTypeTask={handleApplyFilterTypeTask}
              typeTask={filters.type}
            />
          )}

          {isEmptyList && <SearchNotFound searchValue={searchInput} />}

          <div className="content">
            {isLoading && (
              <div className="isLoading">
                <Spinner width="28" height="28" />
              </div>
            )}

            {!isLoading && !hasTasks && (
              <div className="notTasks">
                <EmptyTasks width="85" height="85" />
                <span>Nenhuma tarefa foi encontrada!</span>
              </div>
            )}

            {!isLoading && hasTasks && (
              <Card
                taskFiltered={tasksFiltered}
                handleOpenEditTaskModal={handleOpenEditTaskModal}
              />
            )}
          </div>
        </>
      )}
    </Container>
  );
}
