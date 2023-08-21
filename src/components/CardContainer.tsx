export interface AuxProps  { 
    children: React.ReactNode
 }

const CardContainer: React.FC<AuxProps> = ({children}) => {

  return (<div  className='border-2 customDropShadow'>
    {children}
  </div> 
  )
}

export default CardContainer
