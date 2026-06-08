interface Props {
  label: string;
  variant?: 'purple' | 'cyan';
}

export default function TechTag({ label, variant = 'purple' }: Props) {
  return <span className={`tech tech--${variant}`}>{label}</span>;
}
