export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <span>{`$${payload[0].value}`}</span>;
  }
  return null;
};
