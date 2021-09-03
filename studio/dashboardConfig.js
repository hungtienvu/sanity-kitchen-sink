export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6132479f0a7c8cc0fcfc0a61',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x65gwb67',
                  apiId: 'afa487c7-1543-4c62-93a6-b795fc30d6b7'
                },
                {
                  buildHookId: '6132479ff374075699fd2f97',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jzznvqoa',
                  apiId: '110947d4-c761-45b3-b5d6-876ef3932723'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hungtienvu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jzznvqoa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
