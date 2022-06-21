import styled, { keyframes } from 'styled-components'
//import './App.css';

const P = styled.p`
  font-size: 24px;
  color: red; 

`
const Content = styled.div`
  padding: 25px;
`
const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? 'red' : 'white' };
  color: ${props => props.primary ? 'white' : 'red' };
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 5px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
  }

  &.secondary {
    background-color: blue;
    border: none;
  }

  .info{
    font-size: 28px;
  }

`


const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({ className, ...props}) => {
  return <a className={className} {...props}>Link</a> 
}

const StyledLink = styled(Link)`
  color: blue;
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`

const Password = styled(Input).attrs({
  type: 'password'
})``

const girar = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`

function App() {
  return (
    <div className="App">
      <Content>
        <P>Learn React</P>
        <Button>Enviar<P className="info">Learn React</P> </Button>
        <Button primary className='secondary' >Enviar</Button>
        <BlockButton primary as='a' href="#">Enviar</BlockButton>
        <BlockButton primary  href="#">Enviar</BlockButton>

        <Link></Link>
        <StyledLink></StyledLink>
        <Input color='green'></Input>
        <Password/>
        <br></br>
        <Rotar>Sigue girando</Rotar>
      </Content>
      

    </div>
  );
}

export default App;
