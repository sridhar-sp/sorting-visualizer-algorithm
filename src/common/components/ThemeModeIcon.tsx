import React, { FunctionComponent, PropsWithChildren } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { ThemeLogo } from './GlobalComponent'

type Props = {
  themeMode: string
  fillColor: string
  onClick?: () => void | null
}

const ThemeModeIcon: FunctionComponent<Props> = (
  props: PropsWithChildren<Props>,
) => {
  const { fillColor, themeMode, onClick } = props
  return (
    <ThemeLogo onClick={onClick}>
      {themeMode === 'dark' ? (
        <BiMoon size={32} fill={fillColor} />
      ) : (
        <BiSun size={32} fill={fillColor} />
      )}
    </ThemeLogo>
  )
}

export default ThemeModeIcon
