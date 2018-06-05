import React from 'react'
import { Box, Text } from '../components'

const Engagement = ({ title, text }) => (
  <Box
    width="300px"
    height="235px"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    mb="20px"
    p="10px"
    bg="white"
    style={{ zIndex: 3, borderRadius: '10px' }}
    className="card"
  >
    <h3 style={{ color: 'rgb(248,210,101)' }}>{title}</h3>
    <Text m={0}>{text()}</Text>
  </Box>
)

const Line = ({ top, translateX = -15 }) => (
  <Box
    mt={[top]}
    style={{
      position: 'absolute',
      transform: `translateX(${translateX}px)`,
    }}
    width={[0, 0, '100%']} // pas visible en mobile
    className="dotted-gradient yellow"
  />
)

const Road = ({ top }) => (
  <Box
    mt={[top]}
    bg="grey"
    style={{
      position: 'absolute',
      height: '80px',
    }}
    width={[0, 0, '100%']} // pas visible en mobile
  />
)

const EngagementHiway = () => (
  <Box
    bg="grey"
    p="30px"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
  >
    {/* <Road top={278} /> */}
    <Line top={315} />
    {/* <Road top={560} /> */}
    <Line top={600} />

    <h1 style={{ color: 'white' }}>L’engagement d’hiway</h1>
    <h2 className="yellow">
      Hiway t’accompagne pour devenir freelance et garantit ta réussite
    </h2>

    <Box flexDirection="column" textAlign="center" width="90%">
      <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
        <Engagement
          title="Démarre dans les meilleures conditions"
          text={() => (
            <span>
              Choix du bon statut juridique <br />
              Création complète de ta société
            </span>
          )}
        />
        <Engagement
          title="Entoure-toi de spécialistes"
          text={() => (
            <span>
              2 coachs <br />
              1 expert-comptable<br />
              1 banquier<br />
              1 assureur
            </span>
          )}
        />
        <Engagement
          title="Signe le bon projet"
          text={() => (
            <span>
              Coaching pour trouver ta mission<br />
              Négociation<br />
              Contractualisation
            </span>
          )}
        />
      </Box>

      <Box justifyContent="space-around" mt="40px" flexWrap="wrap">
        <Engagement
          title="Gère facilement et sans erreur"
          text={() => (
            <span>
              Gestion administrative simplifiée<br />
              Fiscalité maîtrisée<br />
              Préparation du bilan
            </span>
          )}
        />
        <Engagement
          title="Gagne un maximum d’argent"
          text={() => (
            <span>
              Pilotage financier<br />
              Optimisation fiscale<br />
              Maximisation des revenus
            </span>
          )}
        />
        <Engagement
          title="Rejoins une communauté"
          text={() => (
            <span>
              Réseau de développeurs <br />freelances connectés <br />et
              solidaires
            </span>
          )}
        />
      </Box>
    </Box>
  </Box>
)

export default EngagementHiway
