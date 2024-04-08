const Header = () => {
  const course = 'Half stack application development'
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p>{part} {exercises}</p>
    </div>
  )

}

const Content = () => {

  return (
    <div>
      <Part part='Fundamentals of react' exercises={10} />
      <Part part='Using props to pass data' exercises={7} />
      <Part part='State of a component' exercises={14} />
    </div>
  )

}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  
  const course = 'Half stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header />
      <Content />
      <Total exercises1={10} exercises2={7} 
      exercises3={14} />
    </div>
  )
}

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


export default App

