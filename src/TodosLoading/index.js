import React from 'react'
import './TodosLoading.css'

function TodosLoading() {
      return  (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>Cargando, no desespere</p>
            <span className='LoadingTodo-deleIcon'></span>
        </div>
       );
    }
export {TodosLoading}