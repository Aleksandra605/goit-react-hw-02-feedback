export default function FeedbackOptions({
  onLeaveGoodFB,
  onLeaveNeutralFB,
  onLeaveBadFB,
}) {
  return (
    <div>
      <button onClick={onLeaveGoodFB}>Good</button>
      <button onClick={onLeaveNeutralFB}>Neutral</button>
      <button onClick={onLeaveBadFB}>Bad</button>
    </div>
  );
}
