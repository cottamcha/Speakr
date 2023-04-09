import { Component } from "solid-js";
import MainLayout from "../components/layouts/Main";
import ComingSoon from '../components/utils/ComingSoon'

const NotificationsScreen: Component = () => {

    return(
        <MainLayout
            pageTitle="Notifications"
            onGlideAdded={()=>{}}
        >
            <div>
                <ComingSoon />
            </div>
        </MainLayout>
    )
}


export default NotificationsScreen;