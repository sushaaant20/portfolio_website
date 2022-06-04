import "./about.css"

const About = () => {
  return (
    <div className="a">
        {/*This is the LEFT side of the about page */}
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="a-img" />
            </div>
        </div>


         {/*This is the RIGHT side of the about page */}
         <div className="a-right">
             <h4 className="abt">ABOUT ME</h4>
             <p className="i-desc">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>

         </div>

      
    </div>
  )
}

export default About
