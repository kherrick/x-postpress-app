export default {
  main: {
    apiHost: 'https://content.karlherrick.com',
    numberOfInitialPosts: 3,
    numberOfPostsPerFetch: 100,
  },
  sites: [
    {
      apiHost: 'https://content.karlherrick.com',
      content: [
        {
          id: '4875',
          title: 'React, Redux, and using the WordPress REST API',
          path: '2017/09/27',
          slug: 'react-redux-using-wordpress-rest-api'
        },
        {
          id: '4775',
          title: 'Playing around with the GoPiGo',
          path: '2016/12/03',
          slug: 'playing-around-gopigo'
        },
        {
          id: '1928',
          title: 'Pi Motion - Single Page App',
          path: '2015/04/29',
          slug: 'pi-motion'
        },
        {
          id: '1897',
          title: 'HipChat bot on AWS',
          path: '2015/01/04',
          slug: 'hipchat-bot-aws'
        },
        {
          id: '1819',
          title: '2048 on a Touchscreen Raspberry Pi',
          path: '2014/04/28',
          slug: '2048-touch-enabled-raspberry-pi'
        },
        {
          id: '1330',
          title: 'Observations on HTML',
          path: '2013/02/02',
          slug: 'observations-on-html'
        },
        {
          id: '292',
          title: 'Budget Wireless Distribution',
          path: '2011/06/29',
          slug: 'budget-wireless-distribution'
        },
        {
          id: '199',
          title: 'WDS Bridging Experiences',
          path: '2010/01/07',
          slug: 'wds-bridging-experiences'
        },
        {
          id: '88',
          title: 'Woktenna',
          path: '2006/02/10',
          slug: 'woktenna'
        }
      ]
    },
    {
      apiHost: 'https://herrickdesign.com',
      content: [
        {
          id: '2793',
          title: 'Fireworks',
          path: '2016/07/04',
          slug: 'detroit-river-fireworks'
        },
        {
          id: '2634',
          title: 'Skyline Sunset',
          path: '2016/03/23',
          slug: 'detroit-skyline-sunset'
        },
        {
          id: '2627',
          title: 'Icy River',
          path: '2016/01/10',
          slug: 'icy-detroit-river'
        },
        {
          id: '2482',
          title: 'Architecture',
          path: '2013/08/22',
          slug: 'architecture-in-detroit'
        },
        {
          id: '2331',
          title: 'Walk up Woodward',
          path: '2013/04/22',
          slug: 'walk-up-woodward'
        }
      ]
    }
  ],
  getBouncePath: bouncePath => [
    'x-weather-app/',
    'x-postpress-app/'
  ][bouncePath],
}
