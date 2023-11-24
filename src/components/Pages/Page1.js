//THIS COMMENT CONTAINS PAGINATION, COLUMN FILTERING, GLOBAL FILTERING

import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import MOCK_DATA from "../MOCK_DATA (1).json";
// import { GROUPED_COLUMNS} from "./columns";  //for grouping purposes use this
import { COLUMNS } from "../columns";
import "../table.css";

function Page1() {
  //here usememo hook make sure that the colums and data is not creted every time the component is rendered because dependency is an empty array
  //   const columns = useMemo(() => GROUPED_COLUMNS, []); //for grouping purposes use this
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    // rows,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <>
       
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}

                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th> //header is from COLUMNS section from "./columns"
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ============== PAGINATION PART============ */}

      <div>
        {/* ==================== PAGE NUMBERS ========== */}
        <span>
          Page:
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        {/* =========== GO TO FIRST PAGE BUTTON  ==========*/}
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>

        {/* ======== previous page button */}

        <button
          style={{
            padding: "10px",
            margin: "10px",
            border: "none",
            backgroundColor: "lightpink",
            borderRadius: "5px",
          }}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>

        {/* ========== NEXT PAGE =========== */}

        <button
          style={{
            padding: "10px",
            margin: "10px",
            border: "none",
            backgroundColor: "lightpink",
            borderRadius: "5px",
          }}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>

        {/* ============ GO TO LAST PAGE ========== */}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>

        {/* ============== PAGINATION PART============ */}
    </>
  );
}

export default Page1;

function GlobalFilter({ filter, setFilter }) {
  return (
    <span>
      Search: {""}
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
        placeholder="Search..."
      />
    </span>
  );
}

