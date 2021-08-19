import courses from './components/courses.vue';
import LoginStudent from './components/LoginStudent.vue';
import axiosss from './components/axiosss.vue';

export const routes = [
{name: 'courses' , path: '/courses' , component: courses },
{name: 'LoginStudent' , path: '/LoginStudent' , component: LoginStudent },
{name: 'axiosss' , path: '/axiosss' , component: axiosss },

];