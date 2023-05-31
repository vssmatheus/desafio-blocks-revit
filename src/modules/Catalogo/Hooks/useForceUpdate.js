import { useState } from "react";

const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  const forceUpdate = () => {
    setValue(value + 1);
  };

  return forceUpdate;
};

export default useForceUpdate;
