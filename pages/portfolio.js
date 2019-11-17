import React from 'react'
import LazyImg from "../components/LazyImg";

export default () => {

  return(
    <>
    <section className={`mw7 center ph3`}>
      <div className={`pv5`}>
        <h2 className={`f2 tc w-100 mb4`}>
          So what have I worked on?
        </h2>
        <p className={`f4 tj w-100`}>
          My portfolio consists of projects that I have worked on to an entirety. I have not included items in which I
          "contributed" to as I would like you to have the ability to specifically judge on my work.
        </p>
      </div>
    </section>
    <section className={`bg-black-80 white pv5`}>
      <div className={`mw7 ph3 center`}>
        <h3 className={`f3 tc w-100 mb3`}>
          Experience
        </h3>

        <div className={``}>
          <div className={`flex flex-row flex-wrap w-100`}>
            <div className={`w-100 w-third-ns`}>
              <h4>The Spokesman Review</h4>
              <p className={`pv2`}>June 2019 - Present</p>
            </div>
            <div className={`language-list w-100 w-two-thirds-ns`}>
              <h4 className={`pa0 ma0`}>Online Developer 1</h4>
              <ul className={` list flex flex-row pv2`}>
                <li>Django</li>
                <li>ReactJS</li>
                <li>HTML</li>
                <li>JS</li>
                <li>SCSS</li>
              </ul>
              <p>As an Online Developer 1 at The Spokesman Review, I am responsible for designing / developing front end
                page templates, maintaining / optimizing the front-end, and developing new ideas to increase the user
                experience of spokesman.com</p>
              <div className={`flex flex-row flex-wrap`}>
                <div className={`mt3 relative mr3`} style={{height: 150}}>
                  <LazyImg traceClass='h-100' className={`relative h-100 w-auto`} imgSrc={`difference.jpg`} style={{height: 150}} />
                  <div style={{zIndex: 10, backgroundColor: 'rgba(0,0,0,0.5)'}} className={`h-100 w-100 absolute top-0 left-0 flex flex-column justify-center items-center tc`}>
                    <h1 className={`f4`}>Form</h1>
                    <a href="/examples/spokesman/difference/www.spokesman.com/sections/difference-makers/index.html" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
                      <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className={`mt3 relative mr3`} style={{height: 150}}>
                  <LazyImg traceClass='h-100' className={`relative h-100 w-auto`} imgSrc={`rtdb.jpg`} style={{height: 150}} />
                  <div style={{zIndex: 10, backgroundColor: 'rgba(0,0,0,0.5)'}} className={`h-100 w-100 absolute top-0 left-0 flex flex-column justify-center items-center tc`}>
                    <h1 className={`f4`}>Dashboard</h1>
                    <a href="/rtdb.jpg" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
                      <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className={`mt3 relative`} style={{height: 150}}>
                  <LazyImg traceClass='h-100' className={`relative h-100 w-auto`} imgSrc={`yourvote.jpg`} style={{height: 150}} />
                  <div style={{zIndex: 10, backgroundColor: 'rgba(0,0,0,0.5)'}} className={`h-100 w-100 absolute top-0 left-0 flex flex-column justify-center items-center tc`}>
                    <h1 className={`f4`}>Your Vote</h1>
                    <a href="/examples/yourvote/index.html" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
                      <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex flex-row flex-wrap w-100 mt4`}>
            <div className={`w-100 w-third-ns`}>
              <h4>DIGICOM Learning</h4>
              <p className={`pv2`}>July 2014 - March 2019</p>
            </div>
            <div className={`language-list w-100 w-two-thirds-ns`}>
              <h4 className={`pa0 ma0`}>Director of Technology / Web Developer</h4>
              <ul className={` list flex flex-row pv2`}>
                <li>Wordpress</li>
                <li>ReactJS</li>
                <li>HTML</li>
                <li>JS</li>
                <li>SCSS</li>
              </ul>
              <p>As the Director of Technology for DIGICOM Learning I held many responsibilities. This included managing a small team, public speaking, developing web application, and collecting data.</p>
              <div className={`flex flex-row flex-wrap`}>
                <div className={`mt3 relative`} style={{height: 150}}>
                  <LazyImg traceClass='h-100' className={`relative h-100 w-auto`} imgSrc={`learning_portal.jpg`} style={{height: 150}} />
                  <div style={{zIndex: 10, backgroundColor: 'rgba(0,0,0,0.5)'}} className={`h-100 w-100 absolute top-0 left-0 flex flex-column justify-center items-center tc`}>
                    <h1 className={`f4`}>Learning Portal</h1>
                    <a href="https://learning-portal-portfolio.web.app/" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
                      <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex flex-row flex-wrap w-100 mt4`}>
            <div className={`w-100 w-third-ns`}>
              <h4>Centers for Spiritual Living - Palm Desert</h4>
              <p className={`pv2`}>2013 - 2016</p>
            </div>
            <div className={`language-list w-100 w-two-thirds-ns`}>
              <h4 className={`pa0 ma0`}>IT / Video Producer</h4>
              <ul className={` list flex flex-row pv2`}>
                <li>PHP</li>
                <li>Wordpress</li>
                <li>AWS</li>
              </ul>
              <p>As an Online Developer 1 at The Spokesman Review, I am responsible for designing / developing front end
                page templates, maintaining / optimizing the front-end, and developing new ideas to increase the user
                experience of spokesman.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={`mw7 center ph3 pv4`}>

      <h2 className={`f2 tc w-100 mb4`}>
        All Projects
      </h2>

      <div className={`flex flex-row flex-wrap mb4`}>
        <div className={`w-100 w-third-ns`}>
          <LazyImg imgSrc={'two.jpg'}></LazyImg>
        </div>
        <div className={`w-100 w-two-thirds-ns mt3 mt0-ns pl3`}>
          <h3>This Website!</h3>
          <p>
            Developed with NextJS and Tachyons.
          </p>
          <a href="/rtdb.jpg" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
            <h2 className={`f4`}>Source </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className={`flex flex-row flex-wrap mb4`}>
        <div className={`w-100 w-third-ns`}>
          <LazyImg imgSrc={'learning_portal.jpg'}></LazyImg>
        </div>
        <div className={`w-100 w-two-thirds-ns mt3 mt0-ns pl3`}>
          <h3>DIGICOM Learning Portal</h3>
          <p>
            This learning portal was Developed for DIGICOM Learning teachers to have a digital space to develop 21st
            century lesson plans that utilize videos. It was developed in ReactJS and utilizes Firebase, AWS, and NodeJS
            to handle all backend applications.
          </p>
          <p className={`mt1`}>
            This application was retrofitted with permission to allow me to use it in my resume.
          </p>
          <div className={`flex flex-row`}>
            <a href="https://learning-portal-portfolio.web.app/" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
              <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/bucketsec/learning-portal-portfolio" className={`ml3 hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
              <h2 className={`f4`}>Source </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={`flex flex-row flex-wrap mb4`}>
        <div className={`w-100 w-third-ns`}>
          <LazyImg imgSrc={'rtdb.jpg'}></LazyImg>
        </div>
        <div className={`w-100 w-two-thirds-ns mt3 mt0-ns pl3`}>
          <h3>Real Time Dashboard</h3>
          <p>
            This dashboard was produced in ReactJS and NodeJS. It leverages the google realtime analytics api to pull
            data every 10 seconds. It's displayed on a vertical TV in the office and allows writers and administration
            to see which stories are doing the best in that moment and how the overall trends of the website are.
          </p>
          <p className={`mt1`}>
            I can only show a screenshot of this application.
          </p>
          <a href="/rtdb.jpg" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
            <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className={`flex flex-row flex-wrap mb4`}>
        <div className={`w-100 w-third-ns`}>
          <LazyImg imgSrc={'koffi.jpg'}></LazyImg>
        </div>
        <div className={`w-100 w-two-thirds-ns mt3 mt0-ns pl3`}>
          <h3>Koffi Tips Calculator</h3>
          <p>
            This application was developed as a project I used as a learning experience. It's purpose was to handle
            calculating tips and archiving / saving them for administration use. It is developed in ReactJS and uses
            Firebase for the backend.
          </p>
          <p className={`mt1`}>
            I unfortunately lost the source for this project.
          </p>
          <div className={`flex flex-row`}>
            <a href="https://koffi-tips.web.app/" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
              <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={`flex flex-row flex-wrap mb4`}>
        <div className={`w-100 w-third-ns`}>
          <LazyImg imgSrc={'difference.jpg'}></LazyImg>
        </div>
        <div className={`w-100 w-two-thirds-ns mt3 mt0-ns pl3`}>
          <h3>Decision Makers Form</h3>
          <p>
            Just a simple form developed for Spokesman.
          </p>
          <div className={`flex flex-row`}>
            <a href="/examples/spokesman/difference/index.html" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
              <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={`flex flex-row flex-wrap mb4`}>
        <div className={`w-100 w-third-ns`}>
          <LazyImg imgSrc={'matts.jpg'}></LazyImg>
        </div>
        <div className={`w-100 w-two-thirds-ns mt3 mt0-ns pl3`}>
          <h3>Matt's Express Car Wash</h3>
          <p>
            This is a Wordpress website that takes advantage of the DIVI Builder to quickly and cheaply create websites.
          </p>

          <div className={`flex flex-row`}>
            <a href="/examples/matts/index.html" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 140, height: 50}}>
              <h2 className={`f4`}>View </h2><i className="hover--icon fa fa-chevron-right f3 ml2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

    </section>
      <style>{`
        .language-list ul li:not(:first-child) {
          margin-left: 20px;
          position: relative;
        }
        .language-list ul li:not(:first-child):before{
          content: "•";
          color: white;
          position: absolute;
          top:0;
          left:0;
          margin-left: -14px;
        }
      `}</style>
    </>
  )
}