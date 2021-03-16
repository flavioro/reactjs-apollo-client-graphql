import React from 'react'
import { Img } from 'react-image'
import { useParams } from 'react-router'

import CssGrid from '../../components/CssGrid'
import ImgPlaceHolder from '../../components/ImgPlaceHolder'
import Spinner from '../../styles/Spinner'
import Card from '../../components/Card'
import { User, useUserDetailsQuery } from '../../generated/graphql'
import {
  Container,
  Title,
  Info,
  InfoItem,
  InfoItemLabel,
  InfoItemValue,
  UserContainer,
} from './styles'

interface Params {
  id: string
}

function Friends() {
  const { id } = useParams<Params>()
  const { data, loading } = useUserDetailsQuery({ variables: { id } })

  const user = React.useMemo(() => {
    if (!data) return
    return data.find
  }, [data])

  if (!user || loading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  return (
    <Container>
      <UserContainer>
        <Img
          src={user.picture}
          loader={<ImgPlaceHolder />}
          alt="userProfileImage"
          loading="lazy"
        />

        <Info>
          <InfoItem>
            <InfoItemLabel>name: </InfoItemLabel>
            <InfoItemValue>{user.name}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>age: </InfoItemLabel>
            <InfoItemValue>{user.age}</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>email: </InfoItemLabel>
            <InfoItemValue>{user.email}</InfoItemValue>
          </InfoItem>
        </Info>
      </UserContainer>

      <Title>Friends:</Title>
      <CssGrid>
        {user.friends.map(friend => (
          <Card data={friend as User} />
        ))}
      </CssGrid>
    </Container>
  )
}

export default Friends
