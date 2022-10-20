import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  // 총 페이지 수
  const numPages = Math.ceil(total / limit);
  // 1~5 (1그룹), 6~10(2그룹)
  const pageCount = 5;
  const pageGroup = Math.ceil(page / pageCount);
  
  // 페이지그룹 내 왼쪽 & 오른쪽 숫자
  let rightNum = pageGroup * pageCount;
  let leftNum = rightNum - pageCount + 1;
  if (rightNum > numPages) {rightNum = numPages}

  return (
      <div
        style={{
          display: "flex",
          padding : '30px',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          &lt;
        </Button>
        <Button
          onClick={() => setPage(leftNum)}
          aria-current={page === leftNum ? "page" : null}
        >
        {leftNum}
        </Button>

        {Array(rightNum-leftNum)
          .fill()
          .map((_, i) => {
            if (i <= 2) {
              return (
                <Button
                  border="true"
                  key={i + 1}
                  onClick={() => {
                    setPage(leftNum + 1 + i);
                  }}
                  aria-current={page === leftNum + 1 + i ? "page" : null}
                >
                  {leftNum + 1 + i}
                </Button>
              );
            } else if (i >= 3) {
              return (
                <Button
                  border="true"
                  key={i + 1}
                  onClick={() => setPage(rightNum)}
                  aria-current={page === rightNum ? "page" : null}
                >
                  {rightNum}
                </Button>
              );
            }
          })
        }

        <Button
          onClick={() => { if (page < numPages) {
                                          setPage(page + 1);
                                          }}}
          disabled={page === numPages}
        >
          &gt;
        </Button>
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

export default Pagination;
