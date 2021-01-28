import Chat from './pages/chat';
import Profile from './pages/profile';
// import Post from './pages/post';
// import PostDetail from './pages/post/detail';
import Article from './pages/article';
import ArticleDetail from './pages/article/detail';
import User from './pages/user';
import Doctor from './pages/user/doctor';
import UserDetail from './pages/user/detail';
import Subscribe from './pages/subscribe';
import OneTimePay from './pages/subscribe/onetimepay';
import MonthlyPay from './pages/subscribe/monthlypay';
import Faqs from './pages/faqs';
import Health from './pages/health';
import Activity from './pages/health/activity';
import Weight from './pages/health/weight';
import Step from './pages/health/step';
import Sleep from './pages/health/sleep';
import Alcohol from './pages/health/alcohol';
import BloodPressure from './pages/health/blood-pressure';
import ECG from './pages/health/ecg';
import ECGDetail from './pages/health/ecg_detail';
import LogoManage from './pages/logo';
import CategoryManage from './pages/category';

import Annualpay from './pages/subscribe/annualpay';

import Home from './pages/home';
import About from './pages/about';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Contact from './pages/contact';
import Articles from './pages/homearticle';
import HomeArticleDetail from './pages/homearticle/detail';
import HomePost from './pages/homepost';
import HomePostDetail from './pages/homepost/detail';
import HomeSubscribe from './pages/subscribe/home-subscribe';

export const HomeRoutes = [
	{ path: '/', exact: true, name: 'Home', component: Home },
	{ path: '/about', exact: true, name: "About", component: About },
	{ path: '/contact', exact: true, name: "About", component: Contact },
	{ path: '/faqs', exact: true, name: "FAQ's", component: Faqs },
	{ path: '/privacy-policy', exact: true, name: "Privacy", component: Privacy },
	{ path: '/terms-and-conditions', exact: true, name: "Terms", component: Terms },
	{ path: '/article', exact: true, name: 'Articles', component: Articles },
	{ path: '/article/:id', exact: true, name: 'Article Detail', component: HomeArticleDetail },
	{ path: '/post', exact: true, name: 'Posts', component: HomePost },
	{ path: '/post/:id', exact: true, name: 'Post Detail', component: HomePostDetail },
	{ path: '/subscribe', exact: true, name: "Subscribe", component: HomeSubscribe },
];


export const AdminRoutes = [
	{ path: '/admin', exact: true, name: 'Home' },
	{ path: '/admin/article', exact: true, name: 'Article', component: Article },
	{ path: '/admin/article/:id', exact: true, name: 'Create Article', component: ArticleDetail },
	{ path: '/admin/user', exact: true, name: 'Users', component: User },
	{ path: '/admin/user/:id', exact: true, name: 'Detail', component: UserDetail },
	{ path: '/admin/doctor', exact: true, name: 'Doctors', component: Doctor },
	{ path: '/admin/doctor/:id', exact: true, name: 'Detail', component: UserDetail },
	{ path: '/admin/logo', exact: true, name: 'Logo', component: LogoManage },
	{ path: '/admin/category', exact: true, name: 'Category', component: CategoryManage },
];

export const DoctorRoutes = [
  { path: '/admin', exact: true, name: 'Home' },
  // { path: '/admin/patients', exact: true, name: 'Patients', component: Patients },
  // { path: '/admin/patients/:id', exact: true, name: 'User Status', component: UserDetail },
  { path: '/admin/chat', exact: true, name: 'Chat', component: Chat },
  { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
];

export const PatientRoutes = [
	{ path: '/admin', exact: true, name: 'Home' },
	{ path: '/admin/chat', exact: true, name: 'Chat', component: Chat },
	{ path: '/admin/health', exact: true, name: 'Health', component: Health },
	{ path: '/admin/health/activity', exact: true, name: 'Activity', component: Activity },
	{ path: '/admin/health/weight', exact: true, name: 'Body Weight', component: Weight },
	{ path: '/admin/health/steps', exact: true, name: 'Steps', component: Step },
	{ path: '/admin/health/sleep', exact: true, name: 'Sleep', component: Sleep },
	{ path: '/admin/health/alcohol', exact: true, name: 'Alcohol Use', component: Alcohol },
	{ path: '/admin/health/blood-pressure', exact: true, name: 'Blood Pressure', component: BloodPressure },
	{ path: '/admin/health/ecg', exact: true, name: 'ECG', component: ECG },
	{ path: '/admin/health/ecg/detail', exact: true, name: 'Detail', component: ECGDetail },
  { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
	// { path: '/admin/post', exact: true, name: 'Post', component: Post },
	// { path: '/admin/post/:id', exact: true, name: 'Create Post', component: PostDetail },
	{ path: '/admin/subscribe', exact: true, name: 'Subscribe', component: Subscribe },
	{ path: '/admin/subscribe/one-time', exact: true, name: 'One-Time', component: OneTimePay },
	{ path: '/admin/subscribe/monthly', exact: true, name: 'Monthly', component: MonthlyPay },
	{ path: '/admin/subscribe/annual', exact: true, name: 'Annual', component: Annualpay },
];