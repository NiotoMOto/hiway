import React from 'react'
import { Box, Text } from '../components'

const Way = () => (
  <Box
    bg="gray"
    p={['15px', '22.5px', '30px']}
    flexDirection="column"
    alignItems="center"
    className="way"
    textAlign="center"
    width="100%"
  >
    <h1>2 voies pour devenir un chef d’entreprise</h1>
    <Box width="100%" justifyContent="space-around" flexWrap="wrap">
      <CoachingFreelancing />
      <FreanLanceAsService />
    </Box>
  </Box>
)

const Title = ({ bg, title, sousTitle }) => (
  <Box bg={bg}>
    <Box flexDirection="column" textAlign="center" p="30px">
      <h2 style={{ color: 'white' }}>{title}</h2>
      <p style={{ color: 'white' }}>{sousTitle}</p>
    </Box>
  </Box>
)

const CoachingFreelancing = () => (
  <Box
    width={['100%', '45%', '45%']}
    mb="30px"
    flexDirection="column"
    className="card CoachingFreelancing"
  >
    <Title
      bg="yellow"
      title="Coaching"
      sousTitle="Devient un chef d’entreprise autonome en apprenant pendant un an avec des coachs à tes côtés"
    />
    <Box flexDirection="column">
      <Box bg="gray">
        <Learn />
      </Box>
      <Understand />
    </Box>
  </Box>
)

const Learn = () => (
  <Box flexDirection="column" p={'20px'}>
    <Box flexDirection="column" textAlign="center">
      <h3 className="yellow">Apprendre</h3>
      <Text>
        Un parcours d’apprentissage pragmatique pour devenir un parfait chef
        d’entreprise en 1 an :
      </Text>
    </Box>

    <Box flexDirection="column">
      <Text textAlign="left" fontWeight="bold">
        13 ateliers de coaching délivrés par les spécialistes Hiway de la
        gestion d’entreprise sur les thémes suivants :
      </Text>
      <ul style={{ textAlign: 'left' }}>
        <li>Se lancer et créer sa société dans les meilleures conditions</li>
        <li> S’entourer de partenaires de confiance</li>
        <li> Trouver sa 1ère mission</li>
        <li> Gérer son entreprise efficacement</li>
        <li> Optimiser sa fiscalité et maximiser sa rémunération</li>
        <li>Faire son bilan</li>
      </ul>
    </Box>

    <Box flexDirection="column">
      <Text textAlign="left" fontWeight="bold">
        Un format centré sur l’humain qui associe le travail à des moments de
        partage agréables
      </Text>
      <ul style={{ textAlign: 'left' }}>
        <li>Ateliers individuels et personnalisés</li>
        <li> Toujours en présentiel</li>
        <li> Lieux de rencontre sympas et proches de toi</li>
        <li> Agenda adapté au tien </li>
        <li> Événements au sein de la Communauté Hiway </li>
      </ul>
    </Box>
  </Box>
)

const Understand = () => (
  <Box flexDirection="column" p={'20px'}>
    <Box flexDirection="column" textAlign="center">
      <h3 className="yellow">Comprendre</h3>
      <Text>
        Un accompagnent pour réussir ton démarrage dans le freelancing et une
        formation centrée sur les principes essentiels de la gestion d’une
        entreprise :
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <Text textAlign="left" fontWeight="bold">
        2 bootcamps d’une journée sur les thèmes suivants :
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <ul>
        <li>Création de la société</li>
        <li> Trouver sa 1ère mission</li>
        <li> Comprendre les principes de gestion et d’optimisation</li>
      </ul>

      <Text textAlign="left" fontWeight="bold">
        Toute l’équipe Hiway à ta disposition :
      </Text>
      <ul style={{ textAlign: 'left' }}>
        <li>Bootcamps individuels et personnalisés</li>
        <li> Support permament sur tous les sujets</li>
        <li>
          Présentation des partenaires : expert-comptable, banque, assurance /
          protection sociale
        </li>
        <li> Rencontres à ta demande </li>
        <li> Événements au sein de la Communauté Hiway </li>
      </ul>
    </Box>
  </Box>
)

const FreanLanceAsService = () => (
  <Box
    width={['100%', '45%', '45%']}
    flexDirection="column"
    className="card FreanLanceAsService"
  >
    <Title
      bg="blue"
      title="Freelancing as a Service"
      sousTitle="Devient un chef d’entreprise libéré en confiant la gestion
      administrative aux spécialistes Hiway"
    />
    <Box flexDirection="column">
      <Box bg="gray" pb={[0, '180px', '180px']}>
        <Manage />
      </Box>
      <Delegate />
    </Box>
  </Box>
)

const Manage = () => (
  <Box flexDirection="column" p="20px">
    <Box flexDirection="column" textAlign="center">
      <h3 className="blue">Gérer</h3>
      <Text>
        Des outils faciles, des méthodologies efficaces et un support permanent
        de spécialistes pour que tu gères ton entreprise sereinement
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <Text fontWeight="bold">
        La gestion de mon entreprise sans erreur avec :
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <ul>
        <li>Environnement de gestion collaboratif</li>
        <li> Outil de pilotage financier</li>
        <li> Édition de facture</li>
        <li> Calcul automatisé de la rémunération optimale</li>
        <li> Calcul des provisions fiscales et sociales</li>
        <li>Tous les templates de documents nécessaires</li>
        <li>
          Support permament de l’équipe Hiway : tes coachs, ton
          expert-comptable, ton assureur, ton banquier, ton avocat
        </li>
      </ul>
    </Box>
  </Box>
)

const Delegate = () => (
  <Box flexDirection="column" p="20px">
    <Box flexDirection="column" textAlign="center">
      <h3 className="blue">Déléguer</h3>
      <Text>
        En confiant la gestion administrative de ta société à Hiway, tu décides
        de te libérer des contraintes quotidiennes d’un chef d’entreprise et tu
        te concentres uniquement sur ton métier. Bien sur, tu restes le patron !
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <Text fontWeight="bold">
        Hiway révolutionne l’entrepreneuriat en créant la le « Freelancing as a
        Service » :
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <ul>
        <li>Ce que tu fais : nous envoyer ton CRA</li>
        <li> Ce que Hiway fait pour toi :</li>
      </ul>
      <ul style={{ textAlign: 'left', paddingLeft: '30px' }}>
        <li>Gestion commerciale</li>
        <li> Gestion comptable</li>
        <li>Gestion administrative</li>
        <li> Gestion fiscale et sociale </li>
        <li> Optimisation et rémunération</li>
        <li> Bilan comptable</li>
        <li>
          Gestion de tous les partenaires : expert-comptable, banque, assurance
          / protection sociale, organismes sociaux, administration fiscale,
          clients, fournisseurs
        </li>
        <li> Reporting de gestion réguliers </li>
      </ul>
    </Box>
  </Box>
)

export default Way
