import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { SectionAboutProjectProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const SectionAboutProject = (sectionAboutProject: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(sectionAboutProject.image.url)}
          loading="lazy"
          alt="Tela do ecommerce com uma imagem do CMS por trás"
        />
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: sectionAboutProject.description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
);

export default SectionAboutProject;
