import {
    Component,
    createEffect,
    createSignal,
    Setter,
    Show,
  } from "solid-js";
  import { Portal } from "solid-js/web";

  type ModalProps ={
    setOpen: Setter<boolean>;
  }
  
  type Props = {
    openComonent: Component<ModalProps>;
    children: Component<ModalProps>
  }

  const Modal: Component<Props> = (props) => {
    const [isOpen, setOpen] = createSignal(false)

    let modalRef: HTMLDivElement;


    createEffect(() => {
        isOpen() ? diasableScroll() : enableScroll()
    })

    const enableScroll = () => {
        document.body.classList.remove("no-scroll")
    }

    const diasableScroll = () => {
        document.body.classList.add("no-scroll")
    }

    return (
      <>
        <props.openComonent setOpen={setOpen}/>
        <Show when={isOpen()}>
          <Portal>
            <div 
                onClick={(e) => {
                    if(!modalRef.contains(e.target)){
                        setOpen(false);
                    }
                }}
                class="openModal">
              <div ref={modalRef!} class="modal fixed min-w-160 top-14 left-2/4 p-8 -translate-x-[55%] rounded-2xl">
                {props.children({setOpen})}
              </div>
            </div>
          </Portal>
        </Show>
      </>
    );
  };
  
  export default Modal;
