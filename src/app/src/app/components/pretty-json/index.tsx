import React from 'react';

export const PrettyJSON: React.FC<PrettyJSONProps> = (props) => {
  return <pre {...props}>{JSON.stringify(props.data, null, 2)}</pre>;
};
