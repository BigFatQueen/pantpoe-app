import React from 'react'
import { useGlobalContext } from './../../context/AuthContext'
import styled from 'styled-components'
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { Avatar, Typography, Divider } from '@mui/material'
import { CustomButton } from '../../layout/CutomerButton'
import TabContents from '../../components/TabContent'

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
}))
//first user view/ not creator view
const UserHome = () => {
  const classes = useStyle()
  const theme = useTheme()
  const islaptop = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Wrapper>
      <section className='container'>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            display={{ xs: 'block', sm: 'block' }}
            order={{ xs: 1, sm: 2 }}
          >
            <TabContents />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            order={{ xs: 2, sm: 1 }}
            display={{ xs: 'none', sm: 'block' }}
          >
            {/* supporting */}

            <Card className='card'>
              <CardContent className='cardcontent'>
                <Grid
                  p={2}
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Avatar
                    alt='Remy Sharp'
                    src='/static/images/avatar/1.jpg'
                    sx={{ width: 80, height: 80 }}
                  />
                  <Typography variant='subtitle1' mt={2} component='div'>
                    chan lay
                  </Typography>
                </Grid>
                <Divider />
                <Grid p={2}>
                  <h3 m={0}>Supporting</h3>
                </Grid>
                <Divider />
                <Grid p={2}>
                  <span m={0}>You aren’t supporting any creators yet.</span>
                </Grid>
              </CardContent>
            </Card>

            <Box display={{ xs: 'none', sm: 'block', md: 'none' }}>
              <Card className='card card-last '>
                <CardContent className='cardcontent'>
                  <Grid p={2}>
                    <h3 m={0}>Supporting</h3>
                  </Grid>
                  <Divider />
                  <Grid p={2}>
                    <p m={0} mb={2}>
                      You're almost there! Complete your page and take it live.
                    </p>
                    <CustomButton>Finish my page</CustomButton>
                  </Grid>
                </CardContent>
              </Card>

              <Card className='card card-last'>
                <CardContent className='cardcontent'>
                  <Grid p={2}>
                    <h3 m={0}>FIND CREATORS YOU LOVE</h3>
                  </Grid>
                  <Divider />
                  <Grid p={2}>
                    <p m={0} mb={2}>
                      The creators you already love may be on Patreon – connect
                      your social media to find them.
                    </p>
                    <CustomButton>Find creators</CustomButton>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            order={{ xs: 2, sm: 3 }}
            display={{ xs: 'block', sm: 'none', md: 'block' }}
          >
            {/* find creator */}

            <Card className='card'>
              <CardContent className='cardcontent'>
                <Grid p={2}>
                  <h3 m={0}>Supporting</h3>
                </Grid>
                <Divider />
                <Grid p={2}>
                  <p m={0} mb={2}>
                    You're almost there! Complete your page and take it live.
                  </p>
                  <CustomButton>Finish my page</CustomButton>
                </Grid>
              </CardContent>
            </Card>

            <Card className='card card-last'>
              <CardContent className='cardcontent'>
                <Grid p={2}>
                  <h3 m={0}>FIND CREATORS YOU LOVE</h3>
                </Grid>
                <Divider />
                <Grid p={2}>
                  <p m={0} mb={2}>
                    The creators you already love may be on Patreon – connect
                    your social media to find them.
                  </p>
                  <CustomButton>Find creators</CustomButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 20px 0px;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 1200px;
    height: auto;
    padding: 16px 16px 0px 0px;
    display: flex;
  }

  .card {
    box-shadow: none !important;
    border: 1px solid rgb(229, 227, 221);
  }

  .cardcontent {
    padding: 0px;
  }
  .card h3 {
    margin: 0px;
  }

  .card-last {
    margin-top: 8px;
  }
`

export default UserHome
