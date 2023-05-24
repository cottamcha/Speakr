import { JSXElement, ParentComponent } from "solid-js";
import { Glide } from "../../types/Glide";
import MainSidebar from "../sidebars/Main";
import TrendSidebar from "../sidebars/Trends";

type Props = {
  pageTitle: JSXElement;
  onGlideAdded: (glide?: Glide) => void
  selectedGlide?: Glide;
}


const MainLayout: ParentComponent<Props> = (props) => {

    return(
    <div class="w-full min-h-screen text-gray-100">
        <div class="flex h-full min-h-252">
          <MainSidebar 
            selectedGlide={props.selectedGlide}
            onGlideAdded={props.onGlideAdded}/>
          <main class="flex-it flex-grow flex-shrink items-start">
            <div class="flex md:w-248 w-full h-full">
              <div class="flex-it flex-grow flex-shrink">
                <div class="flex-it flex-row justify-between min-h-full">
                  <div class="flex-it md:max-w-152 w-full">
                    <div class="sticky z-10 flex-it top-0">
                      <div class="flex-it h-14 p-4 xl:text-2xl text-md font-bold z-10 backdrop-blur-md bg-opacity-70">
                        {props.pageTitle}
                      </div>
                    </div>
                    {props.children}
                    </div>
                <div class="flex-it lg:w-92 w-0 mt-4">
                  <TrendSidebar />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    )
}

export default MainLayout;