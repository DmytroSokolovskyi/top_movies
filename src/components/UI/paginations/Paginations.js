import {Pagination} from "react-custom-pagination";
import cl from "./Pagination.module.css"
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
import React, {memo} from "react";


export default memo(
    function MyPagination() {
        const {moviesReducer} = useSelector(state => state);
        const {total_results} = moviesReducer;
        const history = useHistory();
        const queryString = require('query-string');

        const paginate = (number) => {
            history.push(queryString.stringify({page: number}))
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
    }
);
