import { useState, useCallback } from "react";

export function useRetryIndicator() {
  const [retries, setRetries] = useState(0);
  const retry = useCallback(() => {
    setRetries(prev => prev + 1);
  }, [setRetries]);
  return [retries, retry];
}
