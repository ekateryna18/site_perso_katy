interface Props {
  num: string;
  title: string;
}

export default function SectionHead({ num, title }: Props) {
  return (
    <div className="section-head">
      <span className="sec-num">{num}</span>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-line" />
    </div>
  );
}
