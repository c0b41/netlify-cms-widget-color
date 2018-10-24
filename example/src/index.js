import './bootstrap'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { netlifyCmsColorControl, netlifyCmsColorPreview } from '../../src/index'

const config = {
  backend: {
    name: 'test-repo',
    login: false
  },
  media_folder: 'assets',
  collections: [
    {
      name: 'test',
      label: 'test',
      files: [
        {
          file: './src/test.yml',
          name: 'color_test',
          label: 'Color Test',
          fields: [
            {
              name: 'test',
              label: 'test',
              widget: 'string'
            },
            {
              name: 'color_widget',
              label: 'Color',
              widget: 'color'
            }
          ]
        }
      ]
    }
  ]
}

CMS.registerWidget('color', netlifyCmsColorControl, netlifyCmsColorPreview)

init({ config })
