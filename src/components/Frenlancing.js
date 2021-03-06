import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { Box, Text, Heading1, Heading2, Heading3 } from '../components'
import freedom from '../assets/freedom.svg'
import coins from '../assets/coins.svg'
import skills from '../assets/skills.svg'
import missions from '../assets/handshake.svg'
import home from '../assets/home.svg'

const Svg = ({ src }) => (
  <Box height="100px" mb={'20px'} justifyContent="center">
    <img src={src} height="100px" />
  </Box>
)

const Point = ({ title, src, text }) => (
  <Zoom>
    <Box width="200px" flexDirection="column" mx="30px">
      <Svg src={src} />
      <Heading3 color="yellow">{title}</Heading3>
      <Text px={['8px']}>{text}</Text>
    </Box>
  </Zoom>
)

const Frenlancing = () => (
  <Box
    bg="white"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
  >
    <Heading1>C’est le moment de devenir freelance</Heading1>
    <Heading2 color="yellow">
      Le freelancing est le meilleur statut pour s’épanouir dans sa vie comme
      dans son job
    </Heading2>

    <Box flexDirection="column" textAlign="center" width="100%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Point
          src={freedom}
          title="Liberté"
          text="Sois libre de décider : missions, clients, durée, technos, tarifs"
        />
        <Point src={coins} title="Revenus" text="Gagne 2 fois plus qu’en CDI" />
        <Point
          src={home}
          title="Patrimoine"
          text="Prépare ton avenir"
        />

        <Point
          src={skills}
          title="Compétences"
          text="Deviens un chef d’entreprise"
        />
        <Point
          src={missions}
          title="Missions"
          text="Tes compétences sont très recherchées"
        />
      </Box>
    </Box>
  </Box>
)

export default Frenlancing
