import { Text, TextProps } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type TypographyProps = {
  variant: 'caption' | 'body' | 'title' | 'display'
  children: ReactNode
  uppercase?: boolean
} & TextProps

const configDesktop = {
  caption: {
    fontWeight: '400',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    lineHeight: '14.52px'
  },
  body: {
    fontWeight: '400',
    fontSize: '1rem',
    fontStyle: 'normal',
    lineHeight: '19.36px'
  },
  title: {
    fontWeight: '600',
    fontSize: '1.625rem',
    fontStyle: 'normal',
    lineHeight: '31.47px'
  },
  display: {
    fontWeight: '700',
    fontSize: '2.625rem',
    fontStyle: 'normal',
    lineHeight: '50.83px'
  }
}

const configMobile = {
  caption: {
    fontWeight: '400',
    fontSize: '0.625rem',
    fontStyle: 'normal',
    lineHeight: '12.1px'
  },
  body: {
    fontWeight: '400',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    lineHeight: '16.94px'
  },
  title: {
    fontWeight: '600',
    fontSize: '1.375rem',
    fontStyle: 'normal',
    lineHeight: '26.63px'
  },
  display: {
    fontWeight: '700',
    fontSize: '2.375rem',
    fontStyle: 'normal',
    lineHeight: '45.99px'
  }
}

export const Typography = ({
  variant,
  color,
  children,
  uppercase,
  ...rest
}: TypographyProps) => {
  const [isDesktop] = useMediaQuery('(min-width: 1024px)')
  return (
    <Text
      color={color}
      fontFamily="Inter"
      {...(uppercase && { textTransform: 'uppercase' })}
      {...(isDesktop ? configDesktop[variant] : configMobile[variant])}
      {...rest}
    >
      {children}
    </Text>
  )
}
