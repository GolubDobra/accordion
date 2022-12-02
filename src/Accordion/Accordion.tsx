import { h, FunctionComponent, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import classNames from 'classnames'

import { ImgCard } from './assets/ImgCard'
import { Chevron } from './Chevron'
import { CategoryLink } from './CategoryLink'

import style from './Accordion.css'

export const Accordion: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickAccordion = async () => {
    setIsOpen((prev) => !prev)
  }

  const toggledClass = (base: string) => {
    return classNames(style[base], {
      [style[`${base}_open`]]: isOpen,
    })
  }

  return (
    <Fragment>
      <div className={style.Accordion}>
        <button className={toggledClass('ImgWrapper')} onClick={handleClickAccordion}>
          <ImgCard className={style.Img} alt="Зонирование и системы хранения" />
          <div className={toggledClass('ImgOverlay')} disabled={true} />
          <div className={toggledClass('TitleWrapper')}>
            <div className={toggledClass('Title')}>Зонирование и системы хранения</div>
            <Chevron className={toggledClass('Chevron')} />
          </div>
        </button>
        <div className={toggledClass('TextAccordion')}>
          <div className={style.TextWrapper}>
            У такого варианта хранения одни плюсы — вместительно, удобно и никакого визуального
            шума. А еще всё, что нужно, всегда под рукой. Такие системы хранения можно{' '}
            <CategoryLink alt="Кровати и матрасы">
              купить на Юле
            </CategoryLink>{' '}
            вместе с кроватью, отдельно от неё или сделать самому.
          </div>
        </div>
      </div>
    </Fragment>
  )
}
