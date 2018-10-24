import Control from './control'
import Preview from './preview'

if (typeof window !== 'undefined') {
  window.netlifyCmsColorControl = Control
  window.netlifyCmsColorPreview = Preview
}

export { Control as netlifyCmsColorControl, Preview as netlifyCmsColorPreview }
