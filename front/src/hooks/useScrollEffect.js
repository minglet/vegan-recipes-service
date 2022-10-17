import { useCallback, useEffect, useRef } from "react";

export default function useScrollEffect(handler) {
  const savedCallback = useRef();

  const callbackHandler = useCallback(() => {
    savedCallback.current();
  }, [handler]);

  useEffect(() => {
    savedCallback.current = handler;
  }, [handler]);

  useEffect(() => {
    callbackHandler();
    window.addEventListener("scroll", callbackHandler);

    return () => {
      window.removeEventListener("scroll", callbackHandler);
    };
  }, [handler]);
}
