import { h, FunctionComponent } from 'preact'

import style from './CategoryLink.css'

type Props = {
  alt: string
}

export const CategoryLink: FunctionComponent<Props> = ({ alt, children }) => (
  <a class={style.CategoryLink} href='https://youla.ru' alt={alt}>
    {children}
  </a>
)
