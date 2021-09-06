import {Pagination} from "react-custom-pagination";
import cl from "./Pagination.module.css"
import {useSelector} from "react-redux";



const MyPagination = (props) => {

    const {moviesReducer} = useSelector(state => state);
    const {total_results} = moviesReducer;
    const {history, location: {pathname}} = props;
    const paginate = (number) => {
        pathname.includes('page') ? history.push(`${number}`) : history.push(`${pathname}page/${number}`)
    };
    return (
        <>
            <div className={cl.pagination}>
                <Pagination
                    totalPosts={total_results}
                    postsPerPage={20}
                    paginate={paginate}
                    view={10}
                    showLast={true}
                    showFirst={true}
                    showIndex={true}
                />
            </div>
        </>
    );
};
export default MyPagination;