import PreviewCard from "./component/PreviewCard";

function App() {
  const NFTId = "Equilibrium #3429";
  const description = "our Equilibrium collection promotes balance and calm.";
  const price = 0.041;
  const auctionDay = 3;
  const creator = "Jules Wyvern";

  return (
    <PreviewCard
      NFTId={NFTId}
      description={description}
      price={price}
      auction={auctionDay}
      creator={creator}
    />
  );
}

export default App;
