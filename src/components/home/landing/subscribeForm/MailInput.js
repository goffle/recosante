import React, { useState } from 'react'
import styled from 'styled-components'

import TextInput from 'src/components/base/TextInput'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding-top: 1.4em;
  font-size: 1.375rem;
`
const Label = styled.label`
  position: absolute;
  display: block;
  padding: 0.5em 0.75em;
  transform: translateY(${(props) => (props.small ? '-100%' : 0)});
  font-size: ${(props) => (props.small ? '0.6em' : '1em')};
  opacity: ${(props) => (props.small ? '1' : '0.6')};
  pointer-events: ${(props) => (props.small ? 'inherit' : 'none')};
  transition: all 200ms ease-out;
`
export default function MailInput(props) {
  const [focus, setFocus] = useState(false)
  return (
    <Wrapper className={props.className}>
      {props.label && (
        <Label htmlFor={props.name} small={focus || props.value}>
          {props.label}
        </Label>
      )}
      <TextInput
        type={'email'}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Wrapper>
  )
}
