import { Component } from "solid-js";
import MainLayout from "../components/layouts/Main";
import ComingSoon from '../components/utils/ComingSoon'

const DiscoverScreen: Component = () => {

    return(
        <MainLayout
            pageTitle="Discover"
            onGlideAdded={()=>{}}
        >
            <div>
                <ComingSoon />
            </div>
        </MainLayout>
    )
}


export default DiscoverScreen;