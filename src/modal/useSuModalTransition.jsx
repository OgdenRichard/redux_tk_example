import { useEffect, useState } from 'react';

export const useSuModalTransition = (isRendered) => {
  const [hasTransition, sethasTransition] = useState(false);

  useEffect(() => {
    if (isRendered && !hasTransition) {
      sethasTransition(true);
    } else if (!isRendered && hasTransition) {
      sethasTransition(false);
    }
  }, [isRendered, hasTransition]);

  return hasTransition;
};
