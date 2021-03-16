import React from 'react'
import { Img } from 'react-image'

import { User } from '../../generated/graphql'
import ImgPlaceHolder from '../ImgPlaceHolder'
import {
  Container,
  Info,
  Item,
  ItemLabel,
  ItemValue,
  ContentWrapper,
} from './styles'

type UserPick = Pick<
  User,
  'picture' | 'email' | '_id' | 'name' | 'age' | 'eyeColor' | 'company'
>

interface Props {
  data: UserPick
  onClick?: (_id: string) => void
}

const infoFields: Partial<keyof UserPick>[] = [
  'name',
  'age',
  'eyeColor',
  'company',
  'email',
]

function UserCard({ data, onClick }: Props) {
  return (
    <Container onClick={() => onClick?.(data._id)}>
      <ContentWrapper>
        <Img
          src={data.picture}
          loader={<ImgPlaceHolder />}
          alt="userCardImage"
          loading="lazy"
        />

        <Info>
          {infoFields.map(key => (
            <Item key={key}>
              <ItemLabel>{key}: </ItemLabel>
              <ItemValue>{data[key]}</ItemValue>
            </Item>
          ))}
        </Info>
      </ContentWrapper>
    </Container>
  )
}

export default UserCard
