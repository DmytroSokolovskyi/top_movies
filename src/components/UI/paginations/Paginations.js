import {Pagination} from "react-custom-pagination";
import cl from "./Pagination.module.css"
import {useDispatch} from "react-redux";
import {getMoviesByPage, getMoviesByPageAndGenre} from "../../../services/movies.service";

const MyPagination = ({state: {total_results, chosenGenre}}) => {

    const dispatch = useDispatch();


    const paginate = (number) => {
        chosenGenre ? dispatch(getMoviesByPageAndGenre(number, chosenGenre)) : dispatch(getMoviesByPage(number))
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