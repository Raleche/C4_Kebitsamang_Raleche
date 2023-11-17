import Button from './components/Button'
import './App.css'

function Professional() { 
  
  return (
    <>
      <h1>Kebitsamang Raleche</h1>
      <p>I studied a four year degree in BSc. Computer Science in 2013 at National Univesity of Lesotho.</p>
      <p>I also completed the following professional certificates:</p>
      <ol>
        <li>Digital Transformation: From AI and IoT to Cloud, Blockchain, and Cybersecurity</li>
        <li>Data Science</li>
        <li>Business and Systems Analysis</li>
      </ol>
      <div className='centerButton'>
        <Button name='Login'/>
        <Button name='Signin'/>
      </div>
    </>
  )
}

export default Professional