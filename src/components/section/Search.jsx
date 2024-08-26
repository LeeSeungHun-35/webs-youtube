import React from 'react'

const Search = () => {
    return (
        <div id='serch'>
            <div className='serch__inner'>
                <label htmlFor='serchImput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='serch'
                    name='serchInput'
                    id='serchInput'
                    autoComplete='off'
                    className='serch__input'
                    placeholder='검색어를 입력해주세요!'
                />
            </div>
        </div>
    )
}

export default Search