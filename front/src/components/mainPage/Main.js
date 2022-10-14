import AttractionCard from "./AttractionCard";
import DrawPath from "./drawPath/DrawPath";
import DataCard from "./data/DataCard";
import ProposalCard from "./ProposalCard";
import QuestionCard from "./QuestionCard";

export default function Main() {
  return (
    <>
      <AttractionCard />
      <DrawPath />
      <DataCard />
      <QuestionCard />
      <ProposalCard />
    </>
  );
}
