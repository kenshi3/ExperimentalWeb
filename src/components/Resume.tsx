import React from "react"

const Resume = () => {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const skillmessage = "Test"
  const edu = [
    {
      school: "President University",
      degree: "Bachelor of Science",
      graduated: "Dec 2020",
      description: "Information Technology",
    },
  ]
  const wor = [
    {
      company: "TalentTribe Asia",
      title: "Software Engineer",
      years: "2020-21",
      description: "Full Stack",
    },
  ]
  const ski = [
    {
      name: "Gatsby",
      level: "85%",
    },
    {
      name: "Firebase",
      level: "85%"
    },
    {
      name: "Flutter",
      level: "75%"
    }
  ]
  const education = edu.map(education => (
    <div key={education.school}>
      <h3>{education.school}</h3>
      <p className="info">
        {education.degree} <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      <p>{education.description}</p>
    </div>
  ))
  const work = wor.map(work => (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ))

  const skills = ski.map(skills => {
    const className = "bar-expand " + skills.name.toLowerCase()
    return (
      <li key={skills.name}>
        <span
          style={{ width: skills.level, backgroundColor: getRandomColor() }}
          className={className}
        ></span>
        <em>{skills.name}</em>
      </li>
    )
  })

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
