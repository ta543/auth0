import { Navbar } from "@/sections/Navbar";
import { Sidebar } from "@/sections/Sidebar";
import { AIAssistant } from "@/sections/AIAssistant";
import { FloatingActions } from "@/components/FloatingActions";

export const App = () => {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter">
      <div className="box-border caret-transparent hidden"></div>
      <div className="relative text-neutral-500 box-border caret-transparent">
        <div className="box-border caret-transparent contents w-auto md:flex md:w-full">
          <div className="box-border caret-transparent contents basis-auto grow-0 min-h-0 overflow-x-visible md:block md:basis-[0%] md:grow md:min-h-[auto] md:overflow-x-clip">
            <Navbar />
            <Sidebar />
          </div>
          <AIAssistant />
        </div>
      </div>
      <FloatingActions />
      <div className="absolute box-border caret-transparent block"></div>
      <div className="box-border caret-transparent">
        <dialog
          role="dialog"
          className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
        ></dialog>
        <dialog
          role="dialog"
          className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
        ></dialog>
        <dialog
          role="dialog"
          className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
        ></dialog>
        <dialog
          role="dialog"
          className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
        ></dialog>
        <dialog
          role="dialog"
          className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
        ></dialog>
        <dialog
          role="dialog"
          className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
        ></dialog>
        <dialog
          role="dialog"
          className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]"
        ></dialog>
      </div>
    </div>
  );
};
