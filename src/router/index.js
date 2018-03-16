import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import MeetingRoom from '@/components/MeetingRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MeetingRoom',
      component: MeetingRoom
    }
  ]
})
