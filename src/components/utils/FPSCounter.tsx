import { createEffect, createSignal, onCleanup } from 'solid-js';

const FPSCounter = () => {
  const [fps, setFps] = createSignal(0);

  createEffect(() => {
    let frameCount = 0;
    let startTime = performance.now();

    const calculateFPS = () => {
      frameCount++;
      const elapsedTime = performance.now() - startTime;
      if (elapsedTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        startTime = performance.now();
      }
      requestAnimationFrame(calculateFPS);
    };

    const animationFrameId = requestAnimationFrame(calculateFPS);

    onCleanup(() => {
      cancelAnimationFrame(animationFrameId);
    });
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: '5px 10px',
        "border-radius": '5px',
        "z-index": 10000,
      }}
    >
      {fps()} FPS
    </div>
  );
};

export default FPSCounter;