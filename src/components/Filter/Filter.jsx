import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };
  

  return (
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Enter name for Search"
      />
      
  );
 
}

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter
