import { useDispatch, useSelector } from 'react-redux';
import { FilterTool, FilterButton } from './Filter.styled';
import { sortList } from 'redux/slice/usersSlice';
import { selectFilterType } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const selectedType = useSelector(selectFilterType);

  return (
    <FilterTool>
      <span>Filter by:</span>
      <FilterButton
        type="button"
        checked={selectedType === 'all'}
        onClick={() => dispatch(sortList('all'))}
      >
        All
      </FilterButton>
      <FilterButton
        type="button"
        checked={selectedType === 'following'}
        onClick={() => dispatch(sortList('following'))}
      >
        Following
      </FilterButton>
    </FilterTool>
  );
};
