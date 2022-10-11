import { Typography } from "@mui/material";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  position: absolute;
  top: 180vh;
  left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .text {
    font-size: 25px;
    font-family: GangwonEdu-Bold;
  }
`;

export default function DataCard() {
  return (
    <Wrapper>
      <div>
        <Typography>
          <div className="text">
            우리가 먹는 식품들을 생산하고 유통하는데 만들어지는 온실가스량이
            어마어마하다는 사실, 알고 계신가요?
          </div>
        </Typography>
        <img
          src="https://picsum.photos/500/500"
          alt=""
          style={{ margin: 30 }}
        />
        <Typography>
          <div className="text">
            고기소비가 많아지고 축산업 규모가 더욱 커지면서 우리의 하나뿐인
            지구는 더더욱 생명력을 잃고있어요.
          </div>
        </Typography>
      </div>
    </Wrapper>
  );
}
