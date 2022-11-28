import React from 'react';

interface ProviderProps {
  valueStart: number;
  valueEnd: number;
  children: any;
}

const ProgressProvider: React.FC<ProviderProps> = ({
  valueStart,
  valueEnd,
  children,
}) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setTimeout(() => {
      setValue(valueEnd);
    }, 500);
  }, [valueEnd]);

  return children(value);
};
export default ProgressProvider;
