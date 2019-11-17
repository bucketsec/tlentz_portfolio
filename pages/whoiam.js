import React, {useState} from 'react'
import LazyImg from "../components/LazyImg";

const Who = () => {

  let [lightBoxImg, useLightBoxImg] = useState(null);

  let lightImage = null;

  const useLightBoxImgHandler = (item) => {
    console.log(item)
    useLightBoxImg(item)
    lightImage = require(`../assets/${lightBoxImg}`);
  };

  const galleryData = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",

  ];

  return(
    <>
      <section className={`about__container mw7 center ph2 pv5`}>
        <h2 className={`f2 tc w-100 mb4`}>
          Who am I?
        </h2>

        <p className={`fw1 f4 pb2`}>
          My name is Tim. I'm a 22 year old web developer from California who is looking to
          grow his experience as fast as possible. My short-term goal is to work for a company
          that is able to constantly challenge my abilities and push me to learn new things. My
          long term goal is to dive deeper into full-stack development and be able to work for myself
          and employ other developers.
        </p>

        <p className={`fw1 f4 pb2`}>
          I currently am comfortable developing with Html, SCSS, React, NodeJS, and Django / Python. My
          favorite style libraries are MaterialUI and Tachyons. I didn't start with web development
          though. My past was as the Director of Technology of a non-profit named DIGICOM Learning.
          During that job I held the responsibilities of writing / shooting / directing / editing videos,
          public speaking to upwards of 1000 people, and managing a small team. Of course, I also did
          web development in that position. The most notable project I worked on there was an online
          platform for teachers to develop 21st century lesson plans. That project was developed in
          ReactJS and uses a NodeJS backend that takes advantage of AWS and Firebase services.
        </p>

        <p className={`fw1 f4`}>
          Outside of development, I'm a long hair'ed coffee loving millennial who loves watching
          documentaries and eating Ramen. I'm happily engaged to my middle-school sweetheart. Oh,
          and did I mention I love photoshopping people in to space backgrounds with cats?
        </p>

        <a href="/TL-RESUME.pdf" className={`hover--icon--toggle white flex justify-center items-center mt3`} style={{backgroundColor: '#f26823', width: 300, height: 50}}>
          <h2 className={`f4`}>Download Resume </h2><i className="hover--icon fa fa-download f3 ml2" aria-hidden="true"></i>
        </a>
      </section>

      <section className={`gallery__outside__container`}>
        <h2 className={`f2 tc w-100 pv5 white`}>
          Photos
        </h2>
        <div className={`gallery__container mw7 center ph2 pb5`}>
          {galleryData.map((item, index) => (
            <div key={index} className={`gallery__item`} onClick={item => useLightBoxImgHandler(item)}>
              <LazyImg imgSrc={item} />
            </div>
          ))}
        </div>
      </section>

      <section className={`gallery__lightbox ${lightBoxImg ? 'gallery__lightbox__show' : 'gallery__lightbox__hide'}`}>
        {lightImage && <img src={lightImage} />}
        <button className={`f3 fw8 white`} style={{zIndex: 101, position: 'fixed', top: 50, right: 50}} onClick={() => useLightBoxImg(null)}>X</button>
      </section>

      <style jsx>{`
        .gallery__lightbox{
          position: fixed;
          height: 100vh;
          width: calc(100vw - 260px);
          z-index: 100;
          background-color: rgba(0,0,0.5);
          top: 0;
          right: 0;
        }
        .gallery__lightbox__show{
          display: block;
        }
        .gallery__lightbox__hide{
          display: none;
        }
      
        .gallery__outside__container{
          background-color: #364652;
        }
        .gallery__container{
          columns: 4;
        }
        .gallery__item{
          margin-bottom: 15px;
          padding: 0;
          border-radius: 5px;
          display: inline-block;
          overflow: hidden;
          border-top: 5px solid #f26823;
          position: relative;
        }
        .gallery__item::before{
          height: 0px;
          background-color: #f26823;
          content: " ";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: block;
          z-index:10;
          transition: 200ms;
          opacity: 0.5;
        }
        .gallery__item:hover::before{
          height: 100%;
        }

        @media screen and (max-width: 60em) {
          .gallery__container{
            columns: 3;
          }
        }
        @media screen and (max-width: 45em) {
          .gallery__container{
            columns: 2;
          }
        }
        @media screen and (max-width: 30em) {
          .gallery__container{
            columns: 1;
          }
        }
        
        p{
          text-align: justify;
        }
      `}</style>
    </>
  )
};

export default Who