Package.describe({
  name:    'francocatena:select2',
  summary: 'Select2 is a jQuery based replacement for select boxes',
  version: '4.0.0',
  git:     'https://github.com/francocatena/meteor-select2'
})

Package.onUse(function (api) {
  api.versionsFrom('1.0')

  api.use('jquery', 'client')

  api.addFiles('lib/select2/dist/js/select2.js',   'client', { bare: true })
  api.addFiles('lib/select2/dist/css/select2.css', 'client')
})
