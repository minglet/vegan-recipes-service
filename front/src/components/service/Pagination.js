import { useState } from "react";
import styled from "styled-components";
import Pagination from '@mui/material/Pagination';

// import Button from '@mui/material/Button';

function PaginationFunc({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;

  return (
    <div
        style={{
          display: "flex",
          padding : '30px',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
    {page <= numPages? (
          <>
        <Button
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
        >
          &lt;
        </Button>
          <Button
            onClick={() => setPage(firstNum)}
            aria-current={page === firstNum ? "page" : null}
          >
          {firstNum}
          </Button>

            {Array(4)
              .fill()
              .map((_, i) => {
                if (i <= 2) {
                  return (
                    <Button
                      border="true"
                      key={i + 1}
                      onClick={() => {
                        setPage(firstNum + 1 + i);
                      }}
                      aria-current={page === firstNum + 1 + i ? "page" : null}
                    >
                      {firstNum + 1 + i}
                    </Button>
                  );
                } else if (i >= 3) {
                  return (
                    <Button
                      border="true"
                      key={i + 1}
                      onClick={() => setPage(lastNum)}
                      aria-current={page === lastNum ? "page" : null}
                    >
                      {lastNum}
                    </Button>
                  );
                }
              })
            }
          <Button
            onClick={() => { if (page < numPages) {
                                            setPage(page + 1);
                                            setCurrPage(page);
                                            }}}
            disabled={page === numPages}
          >
            &gt;
          </Button>
        </>
        ):( <></>)
        }
     </div>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 6px;
  margin: 6px;
  // background: lightgrey;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: grey;
    color: white;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: black;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default PaginationFunc;
