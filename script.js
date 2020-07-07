const Sidebar = () => {
	const [content, setContent] = React.useState(<Image />)

	const navContent = (element) => {
		console.log(element.target.innerHTML)
		let value = element.target.innerHTML
		switch (value) {
			case 'About me': setContent(<About />);
			  break;
			case 'Education': setContent(<Education />);
			  break;
			case 'Work Experience': setContent(<WorkExp />);
			  break;
			case 'Skills': setContent(<Skills />);
			  break;
			} 
	}
	return (
		<div>
			<header>
				<nav className="sidebar">
					<div></div>
					<div className="sidebar-items">
					<h1>Lahari Chandana G</h1>
					<h3>Full Stack Developer</h3>
						<ul>
							<li>								
								<button onClick={navContent}>
									About me
								</button>
							</li>
							<br></br>
							<br></br>
							<li>
								<button onClick={navContent}>
									Education
								</button>
							</li>
							<br></br>
							<br></br>
							<li>
								<button onClick={navContent}>
									Work Experience
								</button>
							</li>
							<br></br>
							<br></br>
							<li>
								<button onClick={navContent}>Skills</button>
							</li>
						</ul> 
						<div className="contact">
						<h2>Contact</h2>
						<ul>
						<li><i class="fa fa-envelope"></i>&nbsp;govada.lahari@gmail.com</li>
						<li><i class="fa fa-phone"></i>&nbsp;7489336370</li>
						<li><i class="fa fa-home"></i>&nbsp;Jabalpur,MP,India</li>
						</ul>
					</div>

					</div>
				</nav>
			</header>
			<Content>{content}</Content>
		</div>
	)
}
const Image = () =>
(<div className="image">
<img src="Lahari.jpg" alt="Photo" />
</div>)

const About = () => (
	<div className="about">
		<h1>ABOUT ME</h1>
		<h3>Full Stack Web Developer in making</h3>
		<h3>Graduated from Sarnathan College of Engineering</h3>
		<h3>When I’m not at a computer, I enjoy traveling, learning foreign languages, swing dancing,
			karaoke, and listening to live music. 
			You can usually find me in the sunniest spot in the room.</h3>
		<h3>My thirst for growth continued as I dived into coding and programs, attended webinars and lecturers, 
			got trained by GUVI and pursued my bachelor's degree in Bachelors in Engineering.</h3>
	</div>
)

const Content = (props = { children: 'About me' }) => (
	<div className="content">{props.children}</div>
)

const Education = () => (
	<div className="education">
		<ul>
			<li>
				<p>Bachelor of Engineering</p>
				<div className="institute">Saranathan College of Engineering, Trichy,TN</div>
				<div className="year">2013-2017</div>
			</li>
			<br />
			<li>
				<p>Class XII</p>
				<div className="institute">Kendriya Vidyalaya No.1,OFT TN</div>
				<div className="year">2011-2013</div>
			</li>
			<br />
			<li>
				<p>Class X</p>
				<div className="institute">Kendriya Vidyalaya No.1,OFT TN</div>
				<div className="year">2010-2011</div>
			</li>
		</ul>
	</div>
)

const WorkExp = () => (
	<div className="workExp">
		<ul>
			<li>
				<p>Executive</p>
				<div className="company">Hexaware Technologies ltd</div>
				<div className="location">Chennai, India</div>
				<br></br>
				<div className="description">
				Learnt to handle clients requirements with necessary skills to deal with employment verification. 
				Ensuring responsiveness of applications. Meeting both technical and consumer needs.
				</div>
			</li>
		</ul>
	</div>
)

const Skills = () => (
	<div className="skills">
		<div class="section">
            <div class="title">
              SKILLS ACQUIRED
            </div>
            <div class="skills">
			<ul>
              <li>
                <h3>Java</h3><span class="bar"><span class ="java"></span> </span>
              </li>
              <li>
                <h3>Javascript</h3><span class="bar"><span class ="javascript"></span> </span>
              </li>
              <li>
                <h3>HTML</h3><span class="bar"><span class ="html"></span> </span>
              </li>
              <li>
                <h3>CSS</h3><span class="bar"><span class ="css"></span> </span>
              </li>
              <li>
                <h3>C++</h3><span class="bar"><span class ="cpp"></span> </span>
              </li>
			  </ul>
            </div>
		</div>
	</div>
		
)
ReactDOM.render(<Sidebar />, document.getElementById('root'))
