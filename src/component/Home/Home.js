import Navbar from '../navbar/Navbar'
import './home.css'
import { FiArrowRight } from 'react-icons/fi'
import { Scrollbars } from 'react-custom-scrollbars'

import HomeItem from './HomeItem'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home ">
        <div className="backgroundImage">i</div>
        <div className="container HomeContent">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 HomeText d-flex justify-content-center flex-column">
              <p>
                Welcome to Edufu <br /> Lorem Ipsum and content !
              </p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                vitae eros aliquet congue.
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-end flex-column mobile">
              <div className="container">
                <div className="HomeOptions ">
                  <div className="d-flex align-items-center pt-4 ">
                    {' '}
                    <span className="ms-4">Virtual Tour</span>
                    <div className="ViewAll text-primary d-flex align-items-center">
                      <span className="mx-1"> View all </span>
                      <FiArrowRight />
                    </div>
                  </div>
                  <Scrollbars
                    style={{
                      width: '100%',
                      height: '70vh',
                    }}
                  >
                    <HomeItem />
                    <HomeItem />
                    <HomeItem />
                    <HomeItem />
                    <HomeItem />
                  </Scrollbars>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
