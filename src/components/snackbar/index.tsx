import { IoCloseCircle } from "solid-icons/io";
import { Component, createEffect, createSignal, mergeProps, onMount } from "solid-js";
import { SnackbarMessage } from "../../context/ui";

type Props = {
  onClose: () => void;
  autoHideDuration?: number;
} & SnackbarMessage;

export const Snackbar: Component<Props> = (initialProps) => {  
  let props = mergeProps({autoHideDuration: 2000}, initialProps);

  const [startTime, setStartTime] = createSignal(0);
  const [progress, setProgress] = createSignal(0);

  onMount(() => {
    setStartTime(performance.now());
    animate();
  });


  const animate = () => {
    const elapsedTime = performance.now() - startTime();
    const remainingTime = props.autoHideDuration - elapsedTime;

    if (remainingTime <= 0) {
      props.onClose();
    } else {
      setProgress(((props.autoHideDuration - remainingTime) / props.autoHideDuration) * 100);
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div

      class="min-w-68 text-white flex-it font-bold rounded-md md:max-w-xs w-full text-sm shadow-md"
      classList={{
        "bg-blue-500": props.type === "success",
        "bg-red-700": props.type === "error",
        "bg-yellow-500": props.type === "warning",
        "opacity-0": progress() === 0, // start with opacity 0
        "opacity-100": progress() > 0 // gradually increase opacity
      }}
      style="transition: opacity 0.4s ease-in-out"
    > 
      <div class="flex-it flex-row-reverse p-1">
        <button 
          onClick={props.onClose}
          class="text-xl rounded-full"
        >
          <IoCloseCircle />
        </button>
      </div>
      <div class="bottom-1 flex-it px-2 pb-3 text-lg [text-shadow:_2px_1.5px_0_rgb(0_0_0_/_40%)]">
        {props.message}
      </div>
      <div 
        style={{width: `${100 - progress()}%`}}
        class="bg-black opacity-40 text-right h-2"
      >
      </div>
    </div>
  );
}




  // let animationId: number;

  // onMount(() => {
  //   const startTime = performance.now();

  //   const animate = (currentTime: number) => {
  //     const elapsedTime = currentTime - startTime;

  //     if (elapsedTime >= props.autoHideDuration) {
  //       props.onClose();
  //       return;
  //     }

  //     setDuration(props.autoHideDuration - elapsedTime);
  //     animationId = window.requestAnimationFrame(animate);
  //   };

  //   animationId = window.requestAnimationFrame(animate);
  // });

  // createEffect(() => {
  //   if (duration() <= 0) {
  //     window.cancelAnimationFrame(animationId);
  //     props.onClose();
  //   }
  // });

  //  const completed = () => Math.floor((duration() / props.autoHideDuration) * 100);
  //  const [duration, setDuration] = createSignal(props.autoHideDuration);