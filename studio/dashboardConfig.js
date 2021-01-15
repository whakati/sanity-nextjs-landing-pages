export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '600180d29e8bc7093c845625',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d67xeb2i',
                  apiId: '29d54b85-fc16-42b8-8206-f5d2f19c50fd'
                },
                {
                  buildHookId: '600180d2e49a4514928a9bff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wxby1yx7',
                  apiId: 'b3a05491-7128-4106-b970-a18b35cda2bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/whakati/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wxby1yx7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
