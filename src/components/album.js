import React from "react"
import { Link } from "gatsby"

import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import { StaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"

function Album() {
  return (
    <StaticQuery
      query={albumQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div>
            <CardDeck>
              <Card>
                <div>
                  <Image
                    fixed={data.mindgrowth.childImageSharp.fixed}
                    alt="mindgrowth"
                    style={{
                      height: "200px",
                      width: "100%",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>MindGrowth</Card.Title>
                  <Card.Text>
                    Web development for{" "}
                    <a href="https://www.mindgrowth.cl">MindGrowth</a>, a
                    strategic planification consultant focussing in chilean
                    pymes bussiness.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Badge pill variant="success">
                    Vue.js
                  </Badge>{" "}
                  <Badge pill variant="success">
                    Nuxt.js
                  </Badge>
                </Card.Footer>
              </Card>   
              <Card>
                <div>
                  <Image
                    fixed={data.cajapyme.childImageSharp.fixed}
                    alt="cajapyme"
                    style={{
                      height: "200px",
                      width: "100%",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>CajaPyme</Card.Title>
                  <Card.Text>
                    Web development and ecommerce implementation for{" "}
                    <a href="https://www.cajapyme.cl">CajaPyme</a>, a surprise
                    box full of chileans entrepreneur products
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Badge pill variant="secondary">
                    Woordpress
                  </Badge>{" "}
                  <Badge pill variant="primary">
                    Woocomerce
                  </Badge>
                </Card.Footer>
              </Card>
            </CardDeck>
                <br></br>
            <CardDeck>
              <Card>
                <div>
                  <Image
                    fixed={data.dosha.childImageSharp.fixed}
                    alt="dosha"
                    style={{
                      height: "300px",
                      width: "100%",
                      align: "middle"
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Dosha Imbalance</Card.Title>
                  <Card.Text>
                    Open source {" "}
                    <a href="https://www.doshainbalance.netlify.com">Ayurveda Quiz</a>, it was develop for the HealthyGamer Community for free.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Badge pill variant="warning">
                    Javascript
                  </Badge>{" "}
                
                </Card.Footer>
              </Card>
              <Card>
                <div>
                  <Image
                    fixed={data.derechos.childImageSharp.fixed}
                    alt="derechos"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Derechos en Linea</Card.Title>
                  <Card.Text>
                    Web development and backend platform for{" "}
                    <a href="https://www.derechosenlinea.cl">Derechos en Linea</a>, group of professional and services that helps prosecutors manage their cases
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Badge pill variant="danger">
                    Laravel
                  </Badge>{" "}
                  <Badge pill variant="success">
                    Vue.js
                  </Badge>{" "}
                
                </Card.Footer>
              </Card>
            </CardDeck>
<br></br>

<CardDeck>
              <Card>
                <div>
                  <Image
                    fixed={data.turismo.childImageSharp.fixed}
                    alt="turismo"
                    style={{
                      height: "300px",
                      width: "100%",
                      align: "middle"
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>Turismo Meditarraneo</Card.Title>
                  <Card.Text>
                    Web development for {" "}
                    <a href="https://www.turismomediterraneo.cl">Turismo Meditarraneo</a>, turism agency based in Santiago, Chile with alliances around the world.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Badge pill variant="danger">
                    Laravel
                  </Badge>{" "}
                  <Badge pill variant="success">
                    Vue.js
                  </Badge>{" "}
                
                </Card.Footer>
              </Card>
              
            </CardDeck>
            
          </div>
          
        )
      }}
    />
  )
}

const albumQuery = graphql`
  query AlbumQuery {
    mindgrowth: file(absolutePath: { regex: "/portafolio/mindgrowth.png/" }) {
      childImageSharp {
        fixed(width: 959, height: 521) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cajapyme: file(absolutePath: { regex: "/portafolio/cajapyme.png/" }) {
      childImageSharp {
        fixed(width: 1611, height: 1251) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dosha: file(absolutePath: { regex: "/portafolio/dosha.png/" }) {
        childImageSharp {
          fixed(width: 1611, height: 1251) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    derechos: file(absolutePath: { regex: "/portafolio/derechos.png/" }) {
      childImageSharp {
        fixed(width: 1611, height: 1251) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    turismo: file(absolutePath: { regex: "/portafolio/turismo.png/" }) {
        childImageSharp {
          fixed(width: 1611, height: 1251) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Album
