import './styles/index.less';
import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './containers/App';

// 安装路由插件
Vue.use(VueRouter);

// 创建路由实例对象
const router = new VueRouter({
  history: true,
  linkActiveClass: 'active',
});

routes(router);

router.start(App, '#app');
