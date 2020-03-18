import React, { useState } from "react"
import { navigate, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './styles.module.scss'
import Navbar from '../components/Navbar'
import ArrowBounce from '../components/ArrowBounce'
// import './background.sass'
import Responsive from '../assets/responsive.svg'
import Focus from '../assets/focus.svg'
import Light from '../assets/light.svg'
import Code from '../assets/code.svg'
import Tendency from '../assets/tendency.svg'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Email from '../assets/email.svg'
import WhiteTriangle from '../assets/white_triangle.svg'
import sendMessage from "../logic/send-message";

const IndexPage = () => {
  const { image, projects } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      projects: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)
  const imageUrl = image.childImageSharp.fluid.src

  const [name, setName] = useState('Name')
  const [email, setEmail] = useState('Email')
  const [message, setMessage] = useState('Message')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
 
  const handleSubmit = async (event) => { 
    event.preventDefault()
    const { name: { value: name }, email: { value: email }, message: { value: message } } = event.target

    if(!name) {
      setErrorName(true) 
      setName('Name is required')
    }
    if(!email) {
      setErrorEmail(true)
      setEmail('Email is required')
    }
    if(!message) {
      setErrorMessage(true)
      setMessage('Message is required')
    }
    if(name && email && message && !errorName && !errorEmail && !errorMessage) {
      await sendMessage(name, email, message)
      navigate('/confirmation')
    }
  }
  
  const handleChange = (event) => {
    const id = event.target.id
    id === 'name' && setErrorName(false)
    id === 'email' && setErrorEmail(false)
    id === 'message' && setErrorMessage(false)
  }

  const clear = () => {
    setName('Name')
    setEmail('Email')
    setMessage('Your message')
    setErrorName(false)
    setErrorEmail(false)
    setErrorMessage(false)
  }

  return (
    <Layout>
      <div className={styles.languages}>
        <p><span className={styles.language_item}>en</span><span> / </span><span className={styles.language_item}>es</span><span> / </span><span className={styles.language_item}>ca</span><span> / </span><span className={styles.language_item}>de</span></p>
      </div>
      {/* <SEO title="Home" /> */}

      {/* <!-- HOME --> */}
      {/* <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div> */}
      <section id='home-container' className={styles.home}>
        <div className={styles.greeting}>
          Hello, I'm <span className={styles.greeting__name}>Diana Moreno</span>.
          <br></br>
          I'm a Full Stack Web Developer.
        </div>
        <div className={styles.more} dest="about">
          <p>View more</p>
          <ArrowBounce />
        </div>
      </section>
      <Navbar />

      {/* <!-- ABOUT --> */}
      <section className={styles.about}>
        <div className={styles.title_section}>
          <h1>ABOUT</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <div className={styles.circles_container}>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Responsive className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Responsiveness</h3>
              <p>Procuro que mis proyectos se vean bien en todos los dispositivos aplicando el concepto de móvil primero. </p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Focus className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Simplicity</h3>
              <p>Apuesto por interfaces atractivas para el usuario pero sin perder la simplicidad. Menos es más.</p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Code className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Good practices</h3>
              <p>Aplico principios SOLID, de código limpio, construyo componentes reusables y entiendo la importancia de testear.</p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Tendency className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Latest technologies</h3>
              <p>Me intereso por las nuevas tecnologías y apuesto por estar siempre al día.</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutme}>
          <div className={styles.aboutme_image_container}>
            <img className={styles.aboutme_image} alt='Profile photography' src={imageUrl} />
          </div>
          <div className={styles.aboutme_text}>
            <h3>My story</h3>
            <p>I obtained a Bachelor in Business Administration and Management at the University of Barcelona in 2012. Once I finished my studies, I took up a career path as Accountant, growing up until I became Team Manager.<br></br>
            Six years later, I realized that this path no longer fulfilled me. I needed a new challenge where I could keep on growing as a profesional.</p>
            <p>All signs were appointing to programming and I felt an irresistible need to explore this field so, the beginning of 2019, I quit my job and started learning by myself. From september-19 to december-19 I was enrolled in a programming bootcamp in Skylab to consolidate and expand my knowledge.</p>
            <h3>Nowadays</h3>
            <p>Curently, I'm working for Interficie: a company that develops custum ecommerce and creative solutions for a big companies.<br></br>
              I am focused on Javascript and my tools are React, Gatsby, Node, SQL and Express.</p>
            <h3>Passions</h3>
            <p>Besides programming, I am dedicated to following a healthy lifestyle. I pay close attention to what I eat, and regularly exercise. Moreover, I love dancing, up to the point that I joined an amateur salsa dance company.</p>
          </div>
        </div>
      </section>

      {/* <!-- PROJECTS --> */}
      <section className={styles.projects}>
      <div className={styles.title_section}>
          <h1>PROJECTS</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <div className={styles.projects_container}>
        { projects.edges.map(elem => (
            <div>
              <h3 className={styles.project_title}>Project title</h3>
              <div className={styles.project_image_container}>
                <img className={styles.project_image} src={elem.node.publicURL} alt={elem.node.name}/>
                <button className={styles.project_details}>VIEW DETAILS</button>
              </div> 
          </div>
          )
        )}
        </div>
        
      </section>

      {/* <!-- CONTACT --> */}
      <section className={styles.contact}>
        <div className={styles.title_section}>
          <h1>CONTACT</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <WhiteTriangle className={styles.white_triangle}/>
        <form 
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={styles.form_inputs}>
            <input
              className={errorName ? styles.form_input_error : styles.form_input}
              type="text" 
              name="name" 
              id="name" 
              placeholder={name}
              onChange={handleChange}
              />
            <input 
              className={errorEmail ? styles.form_input_error : styles.form_input}
              type="text" 
              name="email" 
              id="email" 
              placeholder={email}
              onChange={handleChange}
              // pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              />
            <textarea 
              className={errorMessage ? styles.form_input_error : styles.form_input}
              name="message" 
              id="message" 
              rows="6" 
              placeholder={message}
              onChange={handleChange}
            />
          </div>
          <ul className={styles.form_buttons}>
            <li>
              <input type="submit" value="Send message" className={styles.form_button_send} />
            </li>
            <li>
              <input type="reset" value="Clear" onClick={clear} className={styles.form_button_clear} />
            </li>
          </ul>
        </form>
      </section>
      <footer>
        <div className={styles.social}>
          <Github />
          <Linkedin />
          <Email />
        </div>
        <p className={styles.footer_text}>Diana Moreno, 2020</p>
      </footer>

    </Layout>
  )
}

export default IndexPage
