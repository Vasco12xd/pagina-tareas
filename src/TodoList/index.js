import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList-container">

            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {/* {props.searchedTodos.map(props.render)} */}
            {props.searchedTodos.map(props.render || props.children)}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};