export const delay = (milliseconds: number) => {
  return new Promise<void>((resolve) => {
    const startTime = Date.now();
    const endTime = startTime + milliseconds;

    // Keep checking if the specified time has elapsed
    function checkTime() {
      if (Date.now() >= endTime) {
        resolve();
      } else {
        requestAnimationFrame(checkTime);
      }
    }

    checkTime();
  });
};
