import s from './component.module.css';

export default function FeedbackOptions({
  onLeaveGoodFB,
  onLeaveNeutralFB,
  onLeaveBadFB,
}) {
  return (
    <div>
      <button onClick={onLeaveGoodFB} className={s.good}>
        Good
      </button>
      <button onClick={onLeaveNeutralFB} className={s.neutral}>
        Neutral
      </button>
      <button onClick={onLeaveBadFB} className={s.bad}>
        Bad
      </button>
    </div>
  );
}
