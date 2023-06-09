import { Component } from "solid-js";
import MainLayout from "../components/layouts/Main";
import ComingSoon from '../components/utils/ComingSoon'

const MoreScreen: Component = () => {

    return(
        <MainLayout
            pageTitle="More"
            onGlideAdded={()=>{}}
        >
            <div>
                <ComingSoon />
            </div>
        </MainLayout>
    )
}


export default MoreScreen;