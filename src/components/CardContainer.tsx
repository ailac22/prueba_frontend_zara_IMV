export interface AuxProps  { 
    children: React.ReactNode
    className?: string
 }

const CardContainer: React.FC<AuxProps> = ({children, className}) => {

  return (<div className={`border-2 customDropShadow p-2 ${className}`}>
    {children}
  </div> 
  )
}

export default CardContainer
