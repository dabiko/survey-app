import { createRouter, createWebHistory } from 'vue-router'

import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import DashboardView from "@/views/DashboardView.vue";
import SurveysView from "@/views/SurveysView.vue";
import DefaultLayout from "@/components/Dashboard/DefaultLayout.vue";
import AuthLayout from "@/components/Auth/AuthLayout.vue";
import ProfileView from "@/views/ProfileView.vue";
import SettingsView from "@/views/SettingsView.vue";

import store from "@/store/indexStore";
import ActivitiesView from "@/views/ActivitiesView.vue";




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            component: DefaultLayout,
            meta : {isAuthenticated: true},
            children: [
                { path: '/dashboard', name: 'DashboardView', component: DashboardView},
                { path: '/surveys', name: 'SurveysView', component: SurveysView},
                { path: '/profile', name: 'ProfileView', component: ProfileView},
                { path: '/activities', name: 'ActivitiesView', component: ActivitiesView},
                { path: '/settings', name: 'SettingsView', component: SettingsView},
            ]
        },
        {
            path: '/auth',
            redirect: '/login',
            name: 'AuthView',
            component: AuthLayout,
            meta: {isGuest: true},
            children: [
                {
                    path: '/login',
                    name: 'LoginView',
                    component: LoginView
                },
                {
                    path: '/register',
                    name: 'RegisterView',
                    component: RegisterView
                },
                {
                    path: '/forgot-password',
                    name: 'ForgotPasswordView',
                    component: ForgotPasswordView
                },
                {
                    path: '/reset-password',
                    name: 'ResetPasswordView',
                    component: ResetPasswordView
                },
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.meta.isAuthenticated && !store.state.user.token){
        next({name:'LoginView'})
    }else if(store.state.user.token && (to.meta.isGuest)){
        next({name:'DashboardView'});
    }else{
        next();
    }
})

export default router
