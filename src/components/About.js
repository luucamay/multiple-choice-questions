import React from 'react';
import { Link } from 'react-router-dom';
import { connectScreenSize } from 'react-screen-size';
import { mapScreenSizeToProps } from '../utils/helpers';

/* About Component */
export default connectScreenSize(mapScreenSizeToProps)(
  class About extends React.Component {
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown, false);
    }
    handleKeyDown = ({ code }) => {
      if (code === 'Escape') this.props.history.push('/');
    }
    render() {
      const { screen } = this.props;
      return (
        <div className='studyWrapper reviewContainer'>
          <div className='studyContainer'>
            <div className='quizHeader'>
              <div className='quizTitle'>
              </div>
              {!screen.isMobile && <span id="return">
                <Link to='/'>
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </Link>
              </span>}
            </div>
            <div className='about'>
              <h1>Acerca de Exámen Teórico para Licencia de Conducción Bolivia</h1>
              <p>Puedes practicar para el exámen práctico para la licencia de conducir aquí.</p>
              <p>Este es un banco de preguntas de las diferentes categorías que se evaluarán
                durante el exámen escrito para obtener tu licencia de conducir.</p>
              <p>Esta aplicación ha sido dessarrollada por <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/luucamay"
              >@luucamay</a>
                , si quieres contactarme escribe un correo a <b>luucamay@gmail.com</b></p>
              <button className='aboutContribute'>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/luucamay/multiple-choice-questions">
                  Contribuye</a>
              </button><br />
              <Link className='finishBtn' to='/'>
                <button>Regresa a la página de retos</button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  });
