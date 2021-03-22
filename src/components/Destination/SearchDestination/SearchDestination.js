import React from 'react'
import './SearchDestination.css';
import {useForm} from 'react-hook-form';

const SearchDestination = ({product, searchHandler, setSearchValue}) => {
  const {register, handleSubmit,} = useForm()
  const onSubmit = (data) => {
    searchHandler(product)
    setSearchValue(data);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="search__form">
        <label className="search__label">Pick From</label>
        <input name="pickfrom" ref={register({required: true})} type="text" className="search__input"/>
        <label className="search__label">Pick To</label>
        <input name="pickto" ref={register({required: true})} type="text" className="search__input"/>
        <label className="search__label">Pick Date</label>
        <input name="date" ref={register} type="date" className="search__input"/>
        <button className="search__btn">Search</button>
      </form>
    </>
  )
}

export default SearchDestination
