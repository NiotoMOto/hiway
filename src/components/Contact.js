import React from 'react'
import { Box, Text, Heading1 } from '../components'

const Contact = () => (
  <Box bg="gray" width="100%" justifyContent="center">
    <Box bg="transparent" flexDirection="column" p="30px" width="500px">
      <Heading1>Be Freelance</Heading1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{ width: '100%' }}
      >
        <Box flexDirection="column" width="100%">
          <Box mb="10px" width="100%">
            <input
              type="text"
              name="name"
              autoComplete="name"
              style={{ width: '100%' }}
              placeholder="Nom Prénom"
            />
          </Box>
          <Box mb="10px" width="100%">
            <input
              style={{ width: '100%' }}
              type="text"
              name="phone"
              autoComplete="phone"
              placeholder="Téléphone"
            />
          </Box>
          <Box mb="25px" width="100%">
            <input
              style={{ width: '100%' }}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
            />
          </Box>
          <textarea
            style={{ width: '100%', height: '165px' }}
            type=""
            name="message"
            placeholder="Message"
          />
        </Box>
        <Box mt="15px" width="100%">
          <button type="submit">Envoyer</button>
        </Box>
      </form>
    </Box>
  </Box>
)

export default Contact
