
import './TodoList.css'

function TodoList(props){
    return(
        <section className="TodoList-container">
            <ul>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmpty()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

            {props.searchedTodos.map(todo => props.render(todo))}
             {props.children}
            </ul>
        </section>
    );
}

export { TodoList };