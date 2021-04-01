import React from 'react'
import styled from 'styled-components'

import Section from '../layout/Section'

const StyledSection = styled(Section)`
  display: flex;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const Text = styled.h2`
  flex: 1;
  text-align: center;

  strong {
    font-size: 4rem;
  }
`
export default function Profile(props) {
  return (
    <StyledSection xlarge>
      <Text center>
        <strong>{Math.round((props.total_allergies / props.total) * 100)}%</strong>
        <br /> des utilisateurs se déclarent allergiques aux pollens.
      </Text>
      <Text center>
        <strong>
          {Math.round((props.total_pathologie_respiratoire / props.total) * 100)}%
        </strong>
        <br /> des utilisateurs déclarent avoir une pathologie respiratoire.
      </Text>
    </StyledSection>
  )
}
