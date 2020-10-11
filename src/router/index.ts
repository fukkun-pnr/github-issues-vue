import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import IssueListView from '@/views/IssueListView.vue';
import IssueDetailView from '@/views/IssueDetailView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/issues',
    name: 'issueList',
    component: IssueListView
  },
  {
    path: '/issues/:id',
    name: 'issueDetail',
    component: IssueDetailView,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
