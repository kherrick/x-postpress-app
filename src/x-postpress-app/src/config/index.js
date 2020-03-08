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
          id: '5479',
          path: '2019/10/08',
          slug: 'xweather-app',
          title: 'XWeather App'
        },
        {
          id: '5446',
          path: '2019/02/26',
          slug: 'racing-with-the-pi',
          title: 'Racing with the Pi'
        },
        {
          id: '5374',
          path: '2019/01/13',
          slug: 'experimenting-with-x-postpress',
          title: 'Experimenting with x-postpress'
        },
        {
          id: '5270',
          path: '2018/11/11',
          slug: 'web-components',
          title: 'Web Components'
        },
        {
          id: '5117',
          path: '2018/03/01',
          slug: 'testing-a-pwa-with-lighthouse',
          title: 'Testing a PWA with Lighthouse'
        },
        {
          id: '5062',
          path: '2018/01/25',
          slug: 'going-offline-with-html',
          title: 'Going offline with HTML'
        },
        {
          id: '4875',
          path: '2017/09/27',
          slug: 'react-redux-using-wordpress-rest-api',
          title: 'React, Redux, and using the WordPress REST API'
        },
        {
          id: '4775',
          path: '2016/12/03',
          slug: 'playing-around-gopigo',
          title: 'Playing around with the GoPiGo'
        },
        {
          id: '1928',
          path: '2015/04/29',
          slug: 'pi-motion',
          title: 'Pi Motion - Single Page App'
        },
        {
          id: '1897',
          path: '2015/01/04',
          slug: 'hipchat-bot-aws',
          title: 'HipChat bot on AWS'
        },
        {
          id: '1819',
          path: '2014/04/28',
          slug: '2048-touch-enabled-raspberry-pi',
          title: '2048 on a Touchscreen Raspberry Pi'
        },
        {
          id: '1330',
          path: '2013/02/02',
          slug: 'observations-on-html',
          title: 'Observations on HTML'
        },
        {
          id: '292',
          path: '2011/06/29',
          slug: 'budget-wireless-distribution',
          title: 'Budget Wireless Distribution'
        },
        {
          id: '199',
          path: '2010/01/07',
          slug: 'wds-bridging-experiences',
          title: 'WDS Bridging Experiences'
        },
        {
          id: '88',
          path: '2006/02/10',
          slug: 'woktenna',
          title: 'Woktenna'
        }
      ]
    },
    {
      apiHost: 'https://herrickdesign.com',
      content: [
        {
          id: '2793',
          path: '2016/07/04',
          slug: 'detroit-river-fireworks',
          title: 'Fireworks'
        },
        {
          id: '2634',
          path: '2016/03/23',
          slug: 'detroit-skyline-sunset',
          title: 'Skyline Sunset'
        },
        {
          id: '2627',
          path: '2016/01/10',
          slug: 'icy-detroit-river',
          title: 'Icy River'
        },
        {
          id: '2482',
          path: '2013/08/22',
          slug: 'architecture-in-detroit',
          title: 'Architecture'
        },
        {
          id: '2331',
          path: '2013/04/22',
          slug: 'walk-up-woodward',
          title: 'Walk up Woodward'
        }
      ]
    }
  ],
  getBouncePath: bouncePath => [
    'pwgen/',
    'x-weather-app/',
    'tfjs-component-playground/',
    'x-postpress-app/'
  ][bouncePath],
}
