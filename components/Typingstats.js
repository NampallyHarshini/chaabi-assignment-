const TypingStats = ({ correct, incorrect }) => (
  <>
    <div className="container flex-container">
      <div className="stat">
        <h2>Word per Minute</h2>
        <h1>{correct}</h1>
      </div>
      <div className="stat">
        <h2>Percentage</h2>
        <h1>{Math.round((correct / (correct + incorrect)) * 100)}%</h1>
      </div>
    </div>
  </>
);

export default TypingStats;
