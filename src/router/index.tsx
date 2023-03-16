import { Routes, Route } from "@solidjs/router"
import { lazy } from "solid-js";

import GlideDetailScreen from "../screens/GlideDetail";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

const LoginScreen = lazy(()=> import("../screens/Login"));
const RegisterScreen = lazy(()=> import("../screens/Register") );


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" component={MainLayout}>
                <Route path="" component={HomeScreen}/>
                <Route path="/:userId/glide/:id" component={GlideDetailScreen}/>
                <Route path="profile" component={ProfileScreen}/>
            </Route>
            <Route path="/auth" component={AuthLayout}>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/register" component={RegisterScreen}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;