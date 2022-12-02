import { h, FunctionComponent } from 'preact'

import imgAvifSrc from './img.avif'
import imgWebpSrc from './img.webp'
import imgPngSrc from './img.png'

type Props = {
  alt: string
  className?: string
}

export const ImgCard: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgPngSrc} alt={alt} />
  </picture>
)
