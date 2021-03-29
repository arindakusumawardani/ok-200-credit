import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

export const PaginationButton = (props) => {
    return (
        <Pagination size="lg" aria-label="page navigation example">
            <PaginationItem>
                {props.currentPage !== 0 ? <PaginationLink first onClick={() => {
                    props.setPage(0)
                }}/> : null}
            </PaginationItem>
            <PaginationItem>
                {((props.currentPage - 2) > 0) ? <PaginationLink style={{marginRight: 5}} onClick={() => {
                    props.setPage(props.currentPage - 2)
                }}>{props.currentPage - 1}</PaginationLink> : null}
            </PaginationItem>
            <PaginationItem>
                {(props.currentPage - 1) > 0 ? <PaginationLink style={{marginRight: 5}} onClick={() => {
                    props.setPage(props.currentPage - 1)
                }}>{props.currentPage}</PaginationLink> : null}
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink
                    style={{marginRight: 5}}>Page {props.currentPage + 1} of {props.totalPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                {(((props.currentPage) < (props.totalPage - 1)) && ((props.currentPage + 1) < (props.totalPage - 1))) ?
                    <PaginationLink style={{marginRight: 5}} onClick={() => {
                        props.setPage(props.currentPage + 1)
                    }}>{props.currentPage + 2}</PaginationLink> : null}
            </PaginationItem>
            <PaginationItem>
                {(((props.currentPage) < props.totalPage) && ((props.currentPage + 2) < (props.totalPage - 1))) ?
                    <PaginationLink style={{marginRight: 5}} onClick={() => {
                        props.setPage(props.currentPage + 2)
                    }}>{props.currentPage + 3}</PaginationLink> : null}
            </PaginationItem>
            <PaginationItem>
                {props.currentPage < ((props.totalPage - 1) || 0) ? <PaginationLink last onClick={() => {
                    props.setPage(props.totalPage - 1)
                }}/> : null}
            </PaginationItem>
        </Pagination>
    )
}